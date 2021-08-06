import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import LiftedStateExample from "./sections/liftedState";
import LocalStateExample from "./sections/localState";
import WebStorageExample from "./sections/webStorage";

function App() {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Router>
        <Navbar />
        <div
          style={{
            marginTop: "10px",
            maxWidth: "750px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <Switch>
            <Route path="/local-state">
              <LocalStateExample />
            </Route>
            <Route path="/lifted-state">
              <LiftedStateExample />
            </Route>
            <Route path="/web-storage">
              <WebStorageExample />
            </Route>
            <Route path="/">
              <div style={{ maxWidth: "500px" }}>
                <h1>Home</h1>
                <p>
                  Welcome to this course. The different pages you see in the
                  navigation bar are different tasks that you can try. It is
                  suggested that you do the first section first, because you
                  might need that code later, then move on to the other ones as
                  you like. Don't forget to ask if anything is unclear!{" "}
                  <span role="img" aria-label="hugging emoji">
                    🤗
                  </span>
                </p>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <h2>Sections</h2>
                  <ol style={{ alignSelf: "center", padding: 0 }}>
                    <li>
                      <Link to="/local-state">Local state</Link>
                    </li>
                    <li>
                      <Link to="/lifted-state">Lifted state</Link>
                    </li>
                    <li>
                      <Link to="/web-storage">Web storage</Link>
                    </li>
                  </ol>
                </div>
              </div>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
