import logo from "./logo.svg";
import "./App.css";
import SignIn from "./component/auth/SignIn";
import SignUp from "./component/auth/SIgnUp";
function App() {
  return (
    <div className="App">
      <SignIn />
      <SignUp />
    </div>
  );
}

export default App;
