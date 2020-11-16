import * as React from "react";
import { BrowserRouter as Router, Switch, Route, match } from "react-router-dom";


import AllChirps from "./components/AllChirps";
import NavBar from "./components/Navbar";
import AddChirp from "./components/AddChirp";
import Admin from "./components/Admin";

import "./scss/app";



const App: React.FC<IAppProps> = () => {
  return (
    <Router>
      <main className="container-fluid">
        <NavBar />
        <section className="container">
          <div className="row justify-content-md-center">
            <Switch>
              <Route exact path="/" component={AllChirps} /> 
              <Route exact path="/add" component={AddChirp} />
              <Route exact path="/chirp/:id/admin" component={Admin} />
            </Switch>
          </div>
        </section>
      </main>
    </Router>
  );
}; 

export interface IAppProps { }



export default App;

