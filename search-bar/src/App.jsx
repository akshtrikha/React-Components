import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import SearchBar from "../components/SearchBar";
import SearchResultsList from "../components/SearchResultsList";

import "./App.css";

console.log(React);
console.log(ReactDOM);

const App = () => {
    const [results, setResults] = useState([]);

    return (
        <div className="App">
            <h2>This is a Search Bar built using React!</h2>
            <div className="search-bar-container">
                <SearchBar setResults={setResults} />
                <SearchResultsList results={results} />
            </div>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("container"));
root.render(<App />);
