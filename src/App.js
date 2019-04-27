import React from "react";
import { Button, Dropdown } from "carbon-components-react";
import "./App.css";
import AppHeader from "./components/header/header";
import "carbon-components/scss/globals/scss/styles.scss";

const items = [
  {
    id: "prod1",
    text: "prod1"
  },
  {
    id: "prod2",
    text: "prod2"
  },
  {
    id: "prod-3",
    text: "prod 3"
  },
  {
    id: "prod-4",
    text: "prod 4"
  }
];

function App() {
  return (
    <div className="App">
      <AppHeader />
      <Button> Run </Button>
      <Dropdown items={items} itemToString={item => (item ? item.text : "")} />
    </div>
  );
}

export default App;
