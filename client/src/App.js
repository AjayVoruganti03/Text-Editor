import TextEditor from "./TextEditor"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom"
// import { v4 as uuidV4 } from "uuid"

function App() {


  return (
    <Router>
    <Switch>
      <Route path="/" exact>
        {/* Always redirect to the same document */}
        <Redirect to={`/documents/12345`} />
      </Route>
      <Route path="/documents/:id">
        <TextEditor />
      </Route>
    </Switch>
  </Router>
  )
}

export default App
