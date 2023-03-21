import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import Travel from "./components/Travel";
import data from "./data";

export default function App() {
  const travelCards = data.map((data) => {
    return <Travel key={data.id} {...data} />;
  });
  return (
    <div className="travel--journal">
      <div className="travel--journal_card">
        <Nav />
        {travelCards}
      </div>
    </div>
  );
}
