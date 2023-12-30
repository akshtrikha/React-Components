import React from "react";
import ReactDOM from "react-dom/client";

console.log(React);
console.log(ReactDOM);

const App = () => {
    return (
        <>
            <h2>This is an Image Carousel Application!</h2>
        </>
    );
};

const root = ReactDOM.createRoot(document.getElementById("container"));
root.render(<App />);
