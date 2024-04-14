import logo from "./logo.svg";
import "./App.css";
import SignIn from "./component/auth/SignIn";
import SignUp from "./component/auth/SIgnUp";
import toast, { Toaster } from "react-hot-toast";
import UserDetails from "./component/auth/UserDetails";
function App() {
  const isUser = true; // check for the is user null or not
  return (
    <div className="App">
      <SignIn />
      <SignUp />

      <Toaster />
    </div>
  );
}

export default App;
