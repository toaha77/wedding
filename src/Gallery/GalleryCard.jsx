/* eslint-disable react/prop-types */
import GalleryCards from "./GalleryCards";

  
const GalleryCard = ({gallery}) => {
  
    return (
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-4" > 
            {
                gallery?.map(galleries => <GalleryCards key={galleries.id} galleries={galleries}></GalleryCards>)
            }
        </div>
    );
};

export default GalleryCard;