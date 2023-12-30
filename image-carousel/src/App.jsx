import "./App.css"
import React from "react";
import ReactDOM from "react-dom/client";
import Carousel from "./components/Carousel.jsx";''

import { slides } from "../data/carouselData.json";

const App = () => {
    return (
        <div className="App">
            <h2>This is an Image Carousel Application!</h2>
            <Carousel data={slides}/>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("container"));
root.render(<App />);
