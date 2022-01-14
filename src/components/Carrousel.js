import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import { Carousel } from "react-responsive-carousel"
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai"
function Carrousel() {
  const customIndicator = (clickHandler, isSelected, index, label) => {
    return (
      <div
        className={
          isSelected
            ? "h-3 w-3 rounded-full bg-blue-600 z-30 inline-block mx-1 "
            : "h-3 w-3 rounded-full bg-blue-100 z-30 inline-block mx-1 "
        }
        onClick={() => console.log(isSelected, index)}
      ></div>
    )
  }
  const next = (click, hasNext) => {
    if (hasNext)
      return (
        <div
          onClick={click}
          className="w-8 h-8 md:h-10 md:w-10 rounded-full flex  justify-center items-center p-1 z-40 bg-white  absolute right-1 top-1/2 cursor-pointer "
        >
          <AiOutlineArrowRight className="text-blue-700" />
        </div>
      )
  }
  const prev = (click, hasPrev) => {
    if (hasPrev) {
      return (
        <div
          onClick={click}
          className="w-8 h-8 md:h-10 md:w-10 rounded-full flex justify-center items-center p-1 z-40 bg-white absolute left-1 top-1/2 cursor-pointer"
        >
          <AiOutlineArrowLeft className="text-blue-700" />
        </div>
      )
    }
  }
  return (
    <div className=" lg:w-1/2 mx-auto relative ">
      <Carousel
        className=" md:my-14  my-1 "
        swipeable
        showStatus={false}
        showThumbs={false}
        emulateTouch
        dynamicHeight
        renderIndicator={customIndicator}
        // autoPlay
        // infiniteLoop
        interval={3500}
        renderArrowNext={(click, hasNext) => next(click, hasNext)}
        renderArrowPrev={(click, hasPrev) => prev(click, hasPrev)}
      >
        <div className="relative">
          <img src="images/grh.png" alt="grh" />
          <div className="absolute inset-0 flex flex-col items-center bg-transparentBlack">
            <h1 className="text-2xl text-white font-bold md:text-5xl mt-4 md:mt-16">
              Titre ici ...
            </h1>
            <p className="text-white font-semibold text-xl my-auto">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat
            </p>
          </div>
          <div className="bg-white text-blue-500 border-2 border-blue-500 hover:bg-blue-500 hover:text-white absolute right-4 bottom-4 md:px-3 md:py-2 px-1 py-1 z-50 cursor-pointer rounded-lg">
            Voir plus
          </div>
        </div>

        <div className="relative">
          <img src="images/iso-1.png" alt="comp" />
          <div className="absolute inset-0 flex flex-col items-center   bg-transparentBlack">
            <h1 className="text-2xl text-white font-bold md:text-5xl mt-4 md:mt-16">
              Titre ici ...
            </h1>
            <p className="text-white font-semibold text-xl my-auto">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat
            </p>
          </div>
        </div>
        <div className="relative">
          <img src="images/comptabilité.png" alt="comp" />
          <div className="absolute inset-0 flex flex-col items-center   bg-transparentBlack">
            <h1 className="text-2xl text-white font-bold md:text-5xl mt-4 md:mt-16">
              Titre ici ...
            </h1>
            <p className="text-white font-semibold text-xl my-auto">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat
            </p>
          </div>
        </div>
      </Carousel>
    </div>
  )
}

export default Carrousel
