import { useState } from "react";
import RegisterForm from "./layouts/RegisterForm";

function App() {
  const [dark, setDark] = useState(false);
  return (
    <div
      className="min-h-screen flex flex-col gap-3"
      data-theme={dark ? "dark" : "light"}
    >
      <h1 className="text-3xl font-bold underline text-pink-300">
        Hello world!
      </h1>
      <input
        type="checkbox"
        class="toggle"
        onChange={(e) => {
          setDark(e.target.checked);
        }}
        checked={dark}
      />
      <hr />
      <RegisterForm />
    </div>
  );
}

export default App;
