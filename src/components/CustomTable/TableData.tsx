
type Props = {
  children: React.ReactNode
  className?: string
}

export default function TableData({ children, className }: Props) : React.JSX.Element {
  return (
    <td className={`border-2 border-gray-300 bg-gray-200 ${className}`}>
      {children}
    </td>
  );
}