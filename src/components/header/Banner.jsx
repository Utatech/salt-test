import logoTopImage from "/logo-top.png";
import backgroundImage from "/background-image-large.png";
import rightImage from "/right.png";
import leftImage from "/left.png";
import scrollImage from "/Scroll.png";

function Banner() {
  return (
    <>
      <div>
        <img
          src={backgroundImage}
          className="pt-1 w-full -z-10 min-h-full"
          alt="background-building"
        />
        <div className="relative mt-[-22.5%] md:h-[500px] overflow-hidden">
          <div className="h-full w-full absolute flex justify-center">
            <img
              src={leftImage}
              alt="image-left"
              className="w-full absolute z-10 h-[94%]"
            />
            <div className="flex flex-col items-left justify-between mt-[-100px] md:mt-52 px-5">
              <div className="text-left z-30 flex items-left justify-center flex-col text-white pt-40 md:pt-0">
                <span className="text-2xl md:text-4xl">
                  Discover your wonder
                </span>
                <span className="w-full text-md md:text-xl pt-3">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Doloribus obcaecati temporibus itaque, reprehenderit minima
                  laborum praesentium maxime illum dignissimos perferendis?
                  Voluptates tenetur nesciunt dignissimos ab nulla esse delectus
                  architecto corrupti at beatae commodi obcaecati
                </span>
              </div>
              <div className="z-40 flex justify-center">
                <a href="#who-we-are">
                  <img
                    src={scrollImage}
                    alt="scroll-image"
                    className="animate-bounce"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="h-full w-full relative flex justify-center pb-6">
            <img
              src={rightImage}
              alt="image-right"
              className="w-full z-0 h-[90%]"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
