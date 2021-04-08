import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);
  const [darkMode, setDarkMode] = useState(false)

  function handleDarkModeToggle(){
    setDarkMode(!darkMode)
  }

  // this data will be passed down to the ShoppingList as a prop
  console.log(items);

  return (
    <div className={"App " + (darkMode ? "dark" : "light")}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkModeToggle}>{ darkMode ? "Dark" : "Light"} Mode</button>
      </header>
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
