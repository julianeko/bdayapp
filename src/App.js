import "./App.css";
import Entries from "./Entries";
import React, { useState } from "react";
import Data from "./Data";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [persons, setPersons] = useState([]);

  return (
    <div>
      <Entries persons={persons} setPersons={setPersons} />
      <Data
        persons={persons}
        setPersons={setPersons}
        id={persons.id}
        name={persons.name}
        date={persons.date}
      />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Entries />} />
          <Route path="/:data" element={<Data />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
