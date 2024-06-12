import Left from "./home/Leftpart/Left"
import Nav from "./home/Nav"
import Right from "./home/Rightpart/Right"

function App() {
  return (
    <div>
    <Nav/>
    <div className="flex h-screen ">
      <Left/>
      <Right/>
    </div>

      </div>
  )
}

export default App
