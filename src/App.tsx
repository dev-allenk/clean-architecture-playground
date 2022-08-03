import "./App.css"
import Alarm from "./alarm/ui/components/Alarm"
import { Provider } from "./alarm/services/store"
import Header from "./alarm/ui/components/Header"

function App() {
  return (
    <Provider>
      <div className="App">
        <Header />
        <h1>title</h1>
        <Alarm />
      </div>
    </Provider>
  )
}

export default App
