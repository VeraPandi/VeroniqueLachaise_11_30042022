import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faChevronRight,
   faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

const Gallery = ({ pictures }) => {
   // State of the currently displayed image
   const [current, setCurrent] = useState(0);
   const length = pictures.length;

   const nextPicture = () => {
      setCurrent(current === length - 1 ? 0 : current + 1);
   };

   const prevPicture = () => {
      setCurrent(current === 0 ? length - 1 : current - 1);
   };

   return (
      <section className="gallery">
         {length !== 1 && ( // <= Displays "previous/next" buttons if the gallery has more than 1 image
            <>
               <FontAwesomeIcon
                  className="prevBtn"
                  icon={faChevronLeft}
                  onClick={prevPicture}
               />
               <FontAwesomeIcon
                  className="nextBtn"
                  icon={faChevronRight}
                  onClick={nextPicture}
               />
            </>
         )}

         {pictures.map((picture, index) => (
            <div
               className={index === current ? "picture active" : "picture"}
               key={index}
            >
               {index === current && (
                  <img key={`${picture}-${index}`} src={picture} alt="" />
               )}
            </div>
         ))}

         {length !== 1 && ( // <= Displays the total number of images if the gallery has more than 1 image
            <span className="lenght">{`${current + 1} / ${length}`}</span>
         )}
      </section>
   );
};

export default Gallery;
