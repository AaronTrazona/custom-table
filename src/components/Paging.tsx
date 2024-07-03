import { useState, memo } from "react"
import { arrayRange } from '../utils/arrayUtils';

type Props = {
    total: number,
    limit: number,
    numberOfPages?: number,
    onChangePage: (value: number) => void
}

type DisplayPagesProps = {
    page: number,
    totalPage: number,
    numberOfPages: number,
    onClickPage: (value: number) => void
}

const DisplayPages = ({ page, onClickPage, numberOfPages, totalPage }: DisplayPagesProps) => {
  const start = page > numberOfPages ? page - (numberOfPages - 3) : 1
  const stop = page > numberOfPages ? (page + 2 <= totalPage ? page + 2 : totalPage) : (totalPage > numberOfPages ? numberOfPages : totalPage) 

  return arrayRange(start, stop, 1).map((value) => (
    <button className={`rounded-lg border-[1px] border-[#232323] p-4 ${page === value ? 'bg-blue-700 text-white' : 'hover:bg-blue-400'} text-xs`} key={value} onClick={() => onClickPage(value)}>{value}</button>
  ))
}

function Paging(props: Props) {
  const {
    total,
    limit,
    numberOfPages = 5,
    onChangePage
  } = props
  const [page, setPage] = useState(1)
  const totalPage = Math.ceil(total / limit)

  const onClickPage = (value: number) => {
    setPage(value)
    onChangePage((value - 1) * limit)
  }

  return (
    <div className='flex gap-1'>
      <div onClick={() => onClickPage(page - 1)} className={`mr-4 flex items-center text-3xl ${page === 1 ? 'opacity-50 pointer-events-none' : 'cursor-pointer'} `}>
        <i className={`fa-solid fa-angle-left`}></i>
      </div> 
      <DisplayPages page={page} totalPage={totalPage} numberOfPages={numberOfPages} onClickPage={onClickPage}  />
      <div onClick={() => onClickPage(page + 1)} className={`ml-4 flex items-center text-3xl ${totalPage === page ? 'opacity-50 pointer-events-none' : 'cursor-pointer'} `}>
        <i className={`fa-solid fa-angle-right`}></i>
      </div> 
    </div>
  )
}

export default memo(Paging)
