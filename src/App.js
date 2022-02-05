import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import ExploresProducts from './Pages/ExploresProducts/ExploresProducts/ExploresProducts';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import DashBoard from './Pages/DashBoard/DashBoard/DashBoard';

function App() {
  return (
    <div className="App">
     <AuthProvider>
     <Router>
       <Switch>
         <Route exact path="/">
           <Home></Home>
         </Route>
         <Route path="/home">
           <Home></Home>
         </Route>
         <Route path="/ExploresProducts">
          <ExploresProducts></ExploresProducts>
         </Route>
         <Route path="/dashboard">
         <DashBoard></DashBoard>
         </Route>
         <Route path="/login">
         <Login></Login>
         </Route>
         <Route path="/register">
        <Register></Register>
         </Route>
       </Switch>
     </Router>
     </AuthProvider>
    </div>
  );
}

export default App;
