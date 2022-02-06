import React from 'react';
import './App.css';
import { Button, Navbar, Tabbar } from "./components";
import { useNavigation } from "./hooks";
import { navigationData } from "./data";


const App = () => {
  const { currentRoute, setCurrentRoute } = useNavigation();

  return (
    <div className="App">
      <Navbar
        navigationData={navigationData}
        currentRoute={currentRoute}
        setCurrentRoute={setCurrentRoute}
      />
      <Tabbar
        navigationData={navigationData}
        currentRoute={currentRoute}
        setCurrentRoute={setCurrentRoute}
      />
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
        <Button onClick={() => console.log("Small button clicked")} size="small" variant="primary" className="mt-6">Small primary</Button>
        <Button onClick={() => console.log("Medium button clicked")} size="medium" variant="secondary" className="mt-6">Medium secondary</Button>
        <Button onClick={() => console.log("Large button clicked")} size="large" variant="danger" className="mt-6">Large danger</Button>
      </header>
    </div>
  );
}

export default App;
