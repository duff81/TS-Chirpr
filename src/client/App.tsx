import * as React from "react";
import { BrowserRouter as Router, Switch, Route, match } from "react-router-dom";

import AllChirps from "./components/AllChirps";
import NavBar from "./components/Navbar";
import AddChirp from "./components/AddChirp";
import Admin from "./components/Admin";

import "./scss/app";

// class App extends React.Component<IAppProps, IAppState> {
// 	constructor(props: IAppProps) {
// 		super(props);
// 		this.state = {
// 			chirps: []
// 		};
// 	}

// 	async componentDidMount() {
// 		try {
// 			let r = await fetch('/api/chirps');
// 			let chirps = await r.json();
// 			this.setState({ chirps });
// 		} catch (error) {
// 			console.log(error);
// 		}
// 	}

const App: React.SFC<IAppProps> = () => {
  return (
    <Router>
      <main className="container-fluid">
        <NavBar />
        <section className="container">
          <div className="row justify-content-md-center">
            <Switch>
              <Route exact path="/" component={AllChirps} /> 
              <Route exact path="/add" component={AddChirp} />
              <Route exact path="/:id/admin" component={Admin} />
            </Switch>
          </div>
        </section>
      </main>
    </Router>
  );
}; 

export interface IAppProps {}

// export interface IAppState {
// 	chirps: chirp [];
// }
// export interface chirp {
// 	user: string,
// 	text: string
// }

export default App;

//
// const App = (props: AppProps) => {
// 	const [greeting, setGreeting] = React.useState<string>('');

// 	React.useEffect(() => {
// 		(async () => {
// 			try {
// 				const res = await fetch('/api/hello');
// 				const greeting = await res.json();
// 				setGreeting(greeting);
// 			} catch (error) {
// 				console.log(error);
// 			}
// 		})();
// 	}, []);

// 	return (
// 		<div className="min-vh-100 d-flex justify-content-center align-items-center">
// 			<h1 className="display-1">Hello {greeting}!</h1>
// 		</div>
// 	);
// };

// interface AppProps {}

// export default App;
