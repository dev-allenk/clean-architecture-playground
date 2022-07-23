import "./App.css"
import Alarm from "./alarm/ui/components/Alarm"
import { Provider } from "react-redux"
import { store } from "./alarm/services/store"

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>title</h1>
        <Alarm />
      </div>
    </Provider>
  )
}

export default App
