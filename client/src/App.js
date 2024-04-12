import logo from "./logo.svg";
import "./App.css";
import SignIn from "./component/auth/SignIn";
import SignUp from "./component/auth/SIgnUp";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <div className="App">
      <SignIn />
      <SignUp />
      <Toaster />
    </div>
  );
}

export default App;
