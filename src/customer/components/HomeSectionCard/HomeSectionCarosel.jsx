import React, { useRef, useState } from "react";
import HomeSectioncard from "./homeSectioncard";
import AliceCarousel from "react-alice-carousel";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { Button } from "@mui/material";
import { Mens_Kurta } from '../../Data/Mens_Kurta.js';

function HomeSectionCarosel({data,sectionName}) {
  const carouselRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = data.slice(0, 10).map((item, index) => (
    <HomeSectioncard key={index} Product={item} />
  ));

  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };

  const handleSlideChanged = (e) => {
    setCurrentIndex(e.item);
  };

  const maxVisibleItems = responsive[1024].items; // assuming screen size is large
  const maxIndex = items.length - maxVisibleItems;

  return (
    <div className="">
      <h2 className="text-2xl font-extrabold text-grey-800 py-5">{sectionName}</h2>
      <div className="relative p-5">
        <AliceCarousel
          items={items}
          disableButtonsControls
          responsive={responsive}
          disableDotsControls
          ref={carouselRef}
          onSlideChanged={handleSlideChanged}
        />

        {/* Prev Button */}
        {currentIndex > 0 && (
          <Button
            onClick={() => carouselRef.current?.slidePrev()}
            variant="contained"
            className="z-50 bg-white"
            sx={{
              position: "absolute",
              top: "8rem",
              left: "0rem",
              transform: "translateX(-50%) rotate(90deg)",
            }}
            aria-label="prev"
          >
            <KeyboardArrowLeftIcon
              sx={{ transform: "rotate(-90deg)", color: "black" }}
            />
          </Button>
        )}

        {/* Next Button */}
        {currentIndex < maxIndex && (
          <Button
            onClick={() => carouselRef.current?.slideNext()}
            variant="contained"
            className="z-50 bg-white"
            sx={{
              position: "absolute",
              top: "8rem",
              right: "0rem",
              transform: "translateX(50%) rotate(90deg)",
            }}
            aria-label="next"
          >
            <KeyboardArrowLeftIcon
              sx={{ transform: "rotate(90deg)", color: "black" }}
            />
          </Button>
        )}
      </div>
    </div>
  );
}

export default HomeSectionCarosel;
