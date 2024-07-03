
interface Props <T> {
  data: T[],
  cellRender: (item: T, index: number) => React.JSX.Element,
  isFetching?: boolean 
}

export default function TableBody<T>({ data, cellRender, isFetching } : Props<T>) : React.JSX.Element {
  return (
    <tbody>
        {
          !data.length ? (
            <tr>
              <td className="flex-1">
                <span className="mt-2 flex justify-center">{isFetching ? 'Retrieving data...' : 'No data available'}</span> 
              </td>
            </tr>
          ) : (
            data.map((item, index) => cellRender(item, index))
          )
        }
    </tbody>
  )     
}
