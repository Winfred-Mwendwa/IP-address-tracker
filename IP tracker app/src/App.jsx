
import './App.css'
import './index.css'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="container mx-auto px-0 pt-6 flex-1">
          <div className='top-banner text-center p-4'>
            <h1>IP Address Tracker</h1>

          </div>

          <div className='map-area' id='map'>

          </div>
      </main>

    </div>
  )
  
}
export default App
