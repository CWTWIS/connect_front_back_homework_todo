import { useState } from "react";

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
      <div className="flex gap-2">
        <button class="btn">Button</button>
        <button class="btn btn-neutral">Neutral</button>
        <button class="btn btn-primary">Primary</button>
        <button class="btn btn-secondary">Secondary</button>
        <button class="btn btn-accent">Accent</button>
        <button class="btn btn-ghost">Ghost</button>
        <button class="btn btn-link">Link</button>
      </div>
    </div>
  );
}

export default App;
