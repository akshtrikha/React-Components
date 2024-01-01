import { FaSearch } from "react-icons/fa";
import { useState } from "react";

import "./SearchBar.css";

let timer;
const debounce = function (cb, wait) {
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            cb.apply(this, args);
        }, wait);
    };
};

const SearchBar = ({ setResults }) => {
    const URL = "https://jsonplaceholder.typicode.com/users";

    const [input, setInput] = useState("");

    const fetchData = (value, url) => {
        fetch(url)
            .then((res) => {
                return res.json();
            })
            //? Ideally, the filtering of data done on the backend by passing the value to the backend.
            .then((res) => {
                const results = res.filter((user) => {
                    return (
                        value &&
                        user &&
                        user.name &&
                        user.name.toLowerCase().includes(value.toLowerCase())
                    );
                });
                setResults(results);
            });
    };

    const handleChange = (value) => {
        setInput(value);
        const debouncedFetch = debounce(fetchData, 300);
        debouncedFetch(value.trim(), URL);
    };

    return (
        <div className="input-wrapper">
            <FaSearch id="search-icon" />
            <input
                placeholder="Type to search..."
                value={input}
                onChange={(e) => {
                    handleChange(e.target.value);
                }}
            ></input>
        </div>
    );
};

export default SearchBar;
