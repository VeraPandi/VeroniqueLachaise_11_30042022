import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Collapse = ({ title, items }) => {
   // Collapse open and close state
   const [isOpen, setIsOpen] = useState(false);

   return (
      <section className="collapse">
         <div
            className={isOpen ? "collapse-header active" : "collapse-header"}
            onClick={() => setIsOpen(!isOpen)}
         >
            <h2 className="collapse-title">{title}</h2>
            <div>
               <span
                  className={
                     isOpen ? "fa-chevron-down active" : "fa-chevron-down"
                  }
               >
                  <FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon>
               </span>
            </div>
         </div>
         <ul
            className={
               isOpen ? "collapse-description active" : "collapse-description"
            }
         >
            {items}
         </ul>
      </section>
   );
};

export default Collapse;
