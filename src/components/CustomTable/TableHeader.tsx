
type Props = {
  headers: string[],
  className?: string
}

export default function TableHeader({ headers, className }: Props) : React.JSX.Element {
  return (
    <thead className={`text-black`}>
      <tr className={`${className}`}>
        {
          headers.map((header, index) => {
            return (
              <th className={`py-2 px-3 bg-primary col-span-1 text-sm rounded-sm border-2 border-gray-300`} key={index}>
                {header}
              </th>
            )
          })
        }
      </tr>
    </thead>
  )
}