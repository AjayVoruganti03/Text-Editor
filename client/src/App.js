import React, { useState } from "react";
import TextEditor from "./TextEditor";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

function App() {
  const [roomId, setRoomId] = useState(""); // Initialize roomId state

  // Handler function to update roomId state when needed
  const handleSetRoomId = (id) => {
    setRoomId(id);
  };

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          {/* Redirect to the TextEditor component with the current roomId state */}
          <Redirect to={`/documents/${roomId}`} />
        </Route>
        <Route path="/documents/:id">
          {/* Pass the roomId state as a prop to the TextEditor component */}
          <TextEditor roomId={roomId} setRoomId={handleSetRoomId} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
