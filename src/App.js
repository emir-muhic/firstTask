import Header from "./Header";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from "./HomePage";
import Page404 from "./Page404";
import Dashboard from "./Dashboard";
import Users from "./Users";
import Posts from "./Posts";
import Profile from "./Profile";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {/* IMPORTING HOMEPAGE */}
          <HomePage />
        </Route>
        <Route path="/dashboard">
          {/* IMPORTING HEADER AND DASHBOARD */}
          <Header />
          <Dashboard />
        </Route>
        <Route path="/users">
          {/* IMPORTING HEADER AND USERS */}
          <Header />
          <Users />
        </Route>
        <Route path="/posts">
          {/* IMPORTING HEADER AND POSTS */}
          <Header />
          <Posts />
        </Route>
        <Route path="/profile">
          {/* IMPORTING HEADER AND PROFILE */}
          <Header />
          <Profile />
        </Route>
        <Route path="*">
          {/* IMPORTING 404 ERROR PAGE */}
          <Page404 />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
