import logoTopImage from "/logo-top.png";
import backgroundImage from "/background-image-large.png";
import rightImage from "/right.png";
import leftImage from "/left.png";
import scrollImage from "/Scroll.png";
import "../../App.css";

function Banner() {
  return (
    <>
      <div>
        <img
          src={backgroundImage}
          className="pt-1 w-full -z-10"
          alt="background-building"
        />
        <div className="relative mt-[-22.5%] h-[500px] overflow-hidden">
          <div className="h-full w-full absolute flex justify-center">
            <img
              src={leftImage}
              alt="image-left"
              className="w-full absolute z-10"
            />
            <div className="text-left z-30 flex items-left justify-center flex-col text-white pt-32 px-5">
              <span className="text-4xl">Discover your wonder</span>
              <span className="w-full text-xl pt-3">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus obcaecati temporibus itaque, reprehenderit minima
                laborum praesentium maxime illum dignissimos perferendis?
                Voluptates tenetur nesciunt dignissimos ab nulla esse delectus
                architecto corrupti at beatae commodi obcaecati repudiandae rem,
                asperiores non repellat voluptatem, minus reprehenderit
                provident. Facere aspernatur eius inventore delectus veniam
                mollitia architecto omnis magnam tempore officiis! Deserunt
                rerum pariatur repudiandae quo excepturi, consectetur autem, eos
                adipisci cumque rem veniam quibusdam maxime harum! Fuga, facere.
                Vel est harum qui voluptate libero asperiores delectus? Magni
                omnis ex harum! Cupiditate maiores modi ratione vero est! Illo
                asperiores beatae, voluptas nisi mollitia veritatis dolor
                voluptate!
              </span>
            </div>
          </div>
          <img
            src={rightImage}
            alt="image-right"
            className="w-full z-0 relative"
          />
        </div>
        <div className="flex justify-center m-[-20px] z-40 relative hover:animate-bounce">
          <img src={scrollImage} alt="scroll-image" />
        </div>
      </div>
    </>
  );
}

export default Banner;
