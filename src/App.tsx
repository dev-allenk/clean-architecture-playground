import "./App.css"
import Alarm from "./alarm/ui/components/Alarm"
import { Provider } from "./alarm/services/store"

function App() {
  return (
    <Provider>
      <div className="App">
        <h1>title</h1>
        <Alarm />
      </div>
    </Provider>
  )
}

export default App
