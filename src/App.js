import "./App.css";
import React, { useState } from "react";
import data from "./data.json";
import Header from "./Components/Header";
import AssetsCard from "./Components/AssetsCard";
function App() {
  const [assets, setAssets] = useState(data);

  return (
    <div className="app">
      <div className="app_body">
        <Header />
        <div className="app_data">
          {assets.map((item, index) => (
            <div>
              <AssetsCard data={item} key={item.id} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
