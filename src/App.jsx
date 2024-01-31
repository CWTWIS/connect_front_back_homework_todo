import { useState } from "react";
import RegisterForm from "./layouts/RegisterForm";
import LoginForm from "./layouts/LoginForm";
import useAuth from "../hooks/useAuth";
import AppRouter from "./routes/AppRouter";

function App() {
  const { loading } = useAuth();
  const [dark, setDark] = useState(false);
  if (loading) {
    return <span className="loading loading-dots loading-lg"></span>;
  }
  return (
    // <div
    //   className="min-h-screen flex flex-col gap-3"
    //   data-theme={dark ? "dark" : "light"}
    // >
    // <input
    //   type="checkbox"
    //   class="toggle"
    //   onChange={(e) => {
    //     setDark(e.target.checked);
    //   }}
    //   checked={dark}
    // />
    // <hr />
    <div
      className="min-h-screen flex flex-col gap-3"
      // data-theme={dark ? "dark" : "light"}
    >
      <AppRouter />
    </div>
    // </div>
  );
}

export default App;
