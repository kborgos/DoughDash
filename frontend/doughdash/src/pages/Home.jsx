import ListBakeries from '../components/ListBakeries'


export default function Home() {
  return (
    <main className="container-fluid">
        <div className="px-4 py-1 my-4 text-left">
          <h1 className="display-5 fw-bold">Home Page</h1>
          <div className="restaurant-grid container">
            <div className="row">
              <ListBakeries />
            </div>
          </div>
        </div>
      </main>
  )
}