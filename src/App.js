import "./App.css";
import Entries from "./Entries";
import React, { useState, createContext, useEffect } from "react";
import Data from "./Data";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Change from "./Change";
import Main from "./Main";

export const Context = createContext();

function App() {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    const storage = localStorage.getItem("persons");
    if (storage) {
      setPersons(JSON.parse(localStorage.getItem("persons")));
    }
  }, []);
  useEffect(() => {
    // Ausführung bei Änderung des todos-State ([todos])

    localStorage.setItem("persons", JSON.stringify(persons));
  }, [persons]);

  return (
    <div>
      <Context.Provider value={{ persons, setPersons }}>
        <BrowserRouter>
          <Routes>
            <Route
              path="/entries/"
              element={<Entries persons={persons} setPersons={setPersons} />}
            />
            <Route
              path="/data/"
              element={<Data persons={persons} setPersons={setPersons} />}
            />

            <Route
              path="/data/:search"
              element={<Data persons={persons} setPersons={setPersons} />}
            />
            <Route
              path="/change/:change"
              element={<Change persons={persons} setPersons={setPersons} />}
            />
            <Route
              path="/"
              element={<Main persons={persons} setPersons={setPersons} />}
            />
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
}

export default App;
