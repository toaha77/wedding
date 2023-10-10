import { useLoaderData } from "react-router-dom";
import GalleryCard from "./GalleryCard";

 
const Gallery = () => {
    const gallery = useLoaderData()
    return (
        <div className="mt-4">
            <h2 className="text-5xl text-center mb-4">OUR PICTURES</h2>
            <GalleryCard gallery={gallery}></GalleryCard>
        </div>
    );
};

export default Gallery;