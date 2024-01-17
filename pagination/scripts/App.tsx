import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";

import List from "../components/List";
import Pages from "../components/Pages";

// console.log(React);
// console.log(ReactDOM);

const URL = `https://jsonplaceholder.typicode.com/posts`;

const App = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        async function fetchPosts(url: string) {
            const res = await axios.get(url);
            console.log(res);
            // setPosts(res.data);
            // setLoading(false);
        }

        fetchPosts(URL);
    }, []);

    // console.log("posts:", posts);

    const size = 10;

    return (
        <div id="container" className="home">
            {(() => {
                if (loading) {
                    return <h1>Loading...</h1>;
                } else {
                    const paginatedData = posts.slice(offset, offset + size);
                    return (
                        <>
                            <List offset={0} data={paginatedData} size={10} />
                            <Pages
                                currentPage={(offset + size) / size}
                                offset={offset}
                                setOffset={setOffset}
                                size={size}
                                totalSize={posts.length}
                            />
                        </>
                    );
                }
            })()}
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
