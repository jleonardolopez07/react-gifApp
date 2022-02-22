import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import GigGrid from "./components/GigGrid";

const GifExpertApp = () => {
    const [categories, setCategories] = useState([
        "one punch",
        "Samurai",
        "Dragon ball",
    ]);
    /*     const handleAdd = () => {
        setCategories([...categories, "Radma"]);
        // setCategories((cate) => [...cats, "Radma"]); ...... esto es otra forma de resolverlo
    };
 */
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr></hr>
            <ol>
                {categories.map((category) => (
                    <GigGrid category={category} key={category} />
                ))}
            </ol>
        </>
    );
};

export default GifExpertApp;
