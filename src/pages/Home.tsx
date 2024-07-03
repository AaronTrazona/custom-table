import MoviesTable from "../components/MoviesTable";


export default function Home() {
  return (
    <main>
      <section>
        <div className="min-h-[80vh]">
          <div className="px-[20vw] mt-[10vh] w-full h-full flex-col">
            <h3 className="flex justify-center text-3xl font-bold">Movies</h3>
            <MoviesTable />
          </div>
        </div>
      </section>
    </main>
  )
}
