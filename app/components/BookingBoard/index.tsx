import { SmallX } from "@/app/components/Icon";
import classNames from "classnames";
import { Children, useLayoutEffect, useState } from "react";

interface IBookingBoard {
    isPreviewMode: boolean;
    selectedPlaces: Array<number>;
    setSelectedPlaces: (places: Array<number>) => void;
    onClick?: (e: any) => void;
    className?: string;
}

const OCCUPIED_PLACE = [32, 60, 61, 1, 5, 7, 56, 21, 34, 90];
// const CHOOSEN_PLACE = [22, 87, 15, 16, 18, 100];

const BookingBoard = ({
  selectedPlaces,
  setSelectedPlaces,
  isPreviewMode,
  onClick,
  className
}: IBookingBoard) => {
  const [scrollOffset, setScrollOffset] = useState(0);
  const [scrollContainer, setScrollContainer] = useState(0);
  const [scrollWidthContainer, setScrollWidthContainer] = useState(0);

  useLayoutEffect(() => {
    const seatContainer = document.getElementById(
      "bookingboard-selection-mode"
    );
    const handleScroll = (e: any) => {
      setScrollOffset(e.target.scrollLeft);
    };

    if (!isPreviewMode && seatContainer) {
      setScrollWidthContainer(seatContainer.scrollWidth);
      setScrollContainer(seatContainer.offsetWidth);
      seatContainer.addEventListener("scroll", handleScroll);
    }
  }, [isPreviewMode]);

  return (
    <>
      <div
        className={classNames("flex justify-center relative w-full cursor-pointer", className)}
        onClick={(e) => onClick?.(e)}
      >
        {!isPreviewMode && (
          <>
            {scrollOffset - 16 > 0 && <div className="left-gradient"></div>}

            {scrollContainer + scrollOffset < scrollWidthContainer - 16 &&
            scrollContainer < scrollWidthContainer && (
                <div className="right-gradient"></div>
            )}
          </>
        )}

        <div
          className={
            isPreviewMode
              ? "bookingboard-preview-mode"
              : "bookingboard-selection-mode"
          }
          id={
            isPreviewMode
              ? "bookingboard-preview-mode"
              : "bookingboard-selection-mode"
          }
        >
          {Children.toArray(new Array(15 * 8).fill(null).map((_, index) => (
            <>
              {OCCUPIED_PLACE.includes(index + 1) ? (
                <div className="flex items-center justify-center">
                  <SmallX />
                </div>
              ) : (
                <div
                  key={`seat_${index + 1}`}
                  className={`preview-item ${
                    selectedPlaces.includes(index + 1) ? "choosen" : "available"
                  }`}
                  onClick={() => {
                    if (!isPreviewMode) {
                      const placesSet = new Set(selectedPlaces);
                      if (placesSet.has(index + 1)) {
                        placesSet.delete(index + 1);
                      } else {
                        placesSet.add(index + 1);
                      }
                      console.log(Array.from(placesSet));
                      setSelectedPlaces(Array.from(placesSet));
                    }
                  }}
                >
                  {!isPreviewMode && <>{index + 1}</>}
                </div>
              )}
            </>
          )))}
        </div>
      </div>
    </>
  );
};

export default BookingBoard;