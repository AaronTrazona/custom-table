import { ReactEventHandler, SyntheticEvent, useState } from "react";
import { useGetMovies } from "../hooks/movies";
import Table from "./CustomTable/Table";
import TableBody from "./CustomTable/TableBody";
import TableData from "./CustomTable/TableData";
import TableHeader from "./CustomTable/TableHeader";
import Paging from "./Paging";
import DefaultImage from "../assets/default.png";

const DEFAULT_LIMIT = 5
const headers = [
  'IMDB ID',
  'Title',
  'Thumbnail',
];

type Movies = {
  id: number,
  title: string,
  posterURL: string,
  imdbId: string
}

type PagingMovies = {
  total: number
  data: Movies[]
}

const onImageError = (event: SyntheticEvent<HTMLImageElement, Event>) => {
  event.currentTarget.src = DefaultImage
}

const cellRender = (item: Movies, index: number) : React.JSX.Element => {
  return (
    <tr key={index} className="grid grid-cols-3 sm:grid-col1">
      <TableData className="col-span-1 flex items-center justify-center">
        <span>
          {item.imdbId}
        </span>
      </TableData>
      <TableData className="col-span-1 flex items-center justify-center">
        <span>
          {item.title}
        </span>
      </TableData>
      <TableData className="col-span-1 flex items-center justify-center">
        <div className="w-16">
          <img src={item.posterURL} className="w-full object-cover" onError={onImageError}/>
        </div>
      </TableData>
    </tr>
  )
}

const normalizeMovies = (data: Movies[], start: number, limit: number): PagingMovies  => {
  const total = data.length

  return {
    total,
    data: data.sort((a, b) => {
      if (a.title < b.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }
      return 0;
    }).slice(start, start + limit)
  }
}

export default function MoviesTable() {
  const [start, setStart] = useState(0)
  const { data: movies, isFetching } = useGetMovies({
    select: (data: Movies[]) => normalizeMovies(data, start, DEFAULT_LIMIT)
  })
  const pagingMovies = (movies as unknown as PagingMovies)
  const tableData: Movies[] = pagingMovies?.data || []

  return (
    <div className="mt-5">
      <Table>
        <TableHeader headers={headers} className="grid grid-cols-3 sm:grid-col1" />
        <TableBody<Movies> data={tableData} cellRender={cellRender} isFetching={isFetching}></TableBody>
      </Table>
      <div className="mt-2 flex justify-end">
        <Paging limit={DEFAULT_LIMIT} total={pagingMovies?.total} onChangePage={setStart} />
      </div>
    </div>
  )
}