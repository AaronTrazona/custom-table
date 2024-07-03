
type Props = {
  children: React.ReactNode
  className?: string
}

export default function Table({ children, className }: Props) : React.JSX.Element {
  return (
    <table className={`w-full ${className}`}>
      {children}
    </table>
  );
}