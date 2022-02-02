import React from 'react';
import './App.css';
import { Button } from "./components";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://www.typescriptlang.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Test TypeScript
        </a>
        <h1 className="mt-3 text-3xl font-bold underline bg-blue-500">
          Hello Tailwind
        </h1>
        <Button onClick={() => console.log("Button clicked")} size="small" variant="danger" className="mt-6">test button</Button>
      </header>
    </div>
  );
}

export default App;
