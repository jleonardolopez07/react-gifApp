import React from "react";
import useFetchGifs from "../hooks/useFetchGifs";
//import { getGifs } from "../helpers/getGifts";
import GifGridItem from "./GifGridItem";

const GigGrid = ({ category }) => {
    const { data: images, loading } = useFetchGifs(category);
    /*     const [images, setImages] = useState([]);
    useEffect(() => {
        getGifs(category).then((imgs) => setImages(imgs));
    }, []); */

    return (
        <>
            <h3 className="animate__animated animate__flash">{category}</h3>
            {loading && <p>Loading...</p>}
            <div className="card-grid">
                {images.map((img) => (
                    <GifGridItem key={img.id} {...img} />
                ))}
            </div>
        </>
    );
};

export default GigGrid;
