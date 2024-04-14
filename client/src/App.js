import logo from "./logo.svg";
import "./App.css";
import SignIn from "./component/auth/SignIn";
import SignUp from "./component/auth/SIgnUp";
import toast, { Toaster } from "react-hot-toast";
import UserDetails from "./component/auth/UserDetails";
import TestAuth from "./component/auth/TestAuth";
function App() {
  const isUser = true; // check for the is user null or not
  return (
    <div className="App">
      {/* <SignIn />
      <SignUp /> */}
      <TestAuth />
      <Toaster />
    </div>
  );
}

export default App;
