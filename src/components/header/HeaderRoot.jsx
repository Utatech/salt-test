import workingSmall from "/working-small.png";
import iconOne from "/icon1.png";
import iconTwo from "/icon2.png";
import iconThree from "/icon3.png";
import Header from "./Header";
import Banner from "./Banner";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { AiOutlineMinus } from "react-icons/ai";
import { Carousel, IconButton } from "@material-tailwind/react";
import Footer from "./Footer";

function HeaderRoot() {
  return (
    <>
      <Header />
      <Banner />
      <div className="md:p-24 p-5">
        <div className="flex flex-col items-start pt-5">
          <span id="who-we-are" className="text-4xl text-primary">
            Who we are
          </span>
          <span className="pt-3">Technology Company</span>
          <span className="pt-1 text-left text-gray-500">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam,
            voluptatem perferendis sequi repellendus possimus officiis ipsum
            adipisci eligendi quia, nihil quisquam sapiente nemo dignissimos
            aliquid voluptate illo praesentium. Sequi quaerat quo laudantium
            beatae consequatur temporibus dolorem reprehenderit harum
            accusantium quas. Cumque aliquid similique alias commodi distinctio
            sint quam a harum?
          </span>
          <div className="pt-10 text-2xl flex justify-between items-center w-full">
            <div>
              <span className="text-black">01</span>
              <span className="text-gray-500">/03</span>
            </div>
            <div className="flex gap-2">
              <span className="p-2 text-gray-500">
                <BsArrowLeft />
              </span>
              <span className="bg-primary text-white p-2">
                <BsArrowRight />
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start pt-10">
          <span id="core" className="text-4xl text-primary">
            Our Core Values
          </span>
          <span className="pt-1 text-left text-gray-500">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam,
            voluptatem perferendis sequi repellendus possimus officiis ipsum
            adipisci eligendi quia, nihil quisquam sapiente nemo dignissimos
            aliquid voluptate illo praesentium. Sequi quaerat quo laudantium
            beatae consequatur temporibus dolorem reprehenderit harum
            accusantium quas. Cumque aliquid similique alias commodi distinctio
            sint quam a harum?
          </span>
          <span className="pt-3 text-left text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa,
            quam.
          </span>

          <div className="pt-7 flex">
            <span>
              <AiOutlineMinus className="text-2xl" />
            </span>
            <div className="flex flex-col text-left">
              <span className="pl-2">Dedication</span>
              <span className="pl-2 text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque
                in similique dolorem nulla sequi animi iure eaque cupiditate quo
                quae!
              </span>
            </div>
          </div>

          <div className="pt-5 flex">
            <span>
              <AiOutlineMinus className="text-2xl" />
            </span>
            <div className="flex flex-col text-left">
              <span className="pl-2">Intellectual Honesty</span>
              <span className="pl-2 text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque
                in similique dolorem nulla sequi animi iure eaque cupiditate quo
                quae!
              </span>
            </div>
          </div>

          <div className="pt-5 flex">
            <span>
              <AiOutlineMinus className="text-2xl" />
            </span>
            <div className="flex flex-col text-left">
              <span className="pl-2">Curiosity</span>
              <span className="pl-2 text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque
                in similique dolorem nulla sequi animi iure eaque cupiditate quo
                quae!
              </span>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <img src={workingSmall} alt="working" className="md:w-1/2" />
        </div>
      </div>
      <div className="bg-primary p-10">
        <div className="bg-white flex flex-col p-5">
          <span
            id="perks"
            className="uppercase text-left text-primary text-2xl"
          >
            Our speciality
          </span>
          <span className="text-left pt-2 text-gray-600">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
            vitae libero sunt deleniti quam excepturi aliquam rerum eos, illo at
            doloribus alias, molestiae dolorum debitis? Corrupti consequuntur
            nemo expedita libero quibusdam, iusto alias aliquid ipsa sed ea
            fugiat eum at reiciendis asperiores suscipit itaque error. Nihil
            adipisci facilis ullam explicabo harum nesciunt quia, doloremque
            provident, molestiae atque earum, error deleniti pariatur mollitia
            optio quo expedita quisquam consequatur. Aliquam deserunt delectus
            quod libero. Ducimus ipsum natus tempora consequuntur deleniti
            doloremque alias suscipit, itaque qui accusamus eius, quo,
            consectetur porro! Hic facilis sapiente sequi aperiam sit eveniet
            commodi iure, nam blanditiis minus.
          </span>
          <Carousel
            className="rounded-xl overflow-hidden"
            prevArrow={({ handlePrev }) => (
              <IconButton
                variant="text"
                color="blue"
                size="lg"
                onClick={handlePrev}
                className="!absolute top-[95%] -translate-y-2/4 left-4"
              >
                <BsArrowLeft className="w-6 h-6" />
              </IconButton>
            )}
            nextArrow={({ handleNext }) => (
              <IconButton
                variant="text"
                color="blue"
                size="lg"
                onClick={handleNext}
                className="!absolute top-[95%] -translate-y-2/4 !right-4"
              >
                <BsArrowRight className="w-6 h-6" />
              </IconButton>
            )}
          >
            <div className="h-full w-full flex flex-col items-center pt-10">
              <img src={iconOne} alt="icon-one" className="w-[200px]" />
              <span className="h-full w-full pt-3">Seep Improvement</span>
              <p className="p-5 text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta,
                voluptates. Rem, ad consequatur, nulla delectus sunt explicabo
                aliquid necessitatibus soluta voluptatibus reprehenderit aperiam
                ea sit atque perferendis dolores repudiandae harum eligendi eius
                sequi. Labore quae sit reprehenderit ut voluptatum impedit,
                officia nulla ad dicta iste sapiente tenetur tempore ea
              </p>
            </div>
            <div className="h-full w-full flex flex-col items-center pt-10">
              <img src={iconTwo} alt="icon-one" className="w-[200px]" />
              <span className="h-full w-full pt-3">Free</span>
              <p className="p-5 text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta,
                voluptates. Rem, ad consequatur, nulla delectus sunt explicabo
                aliquid necessitatibus soluta voluptatibus reprehenderit aperiam
                ea sit atque perferendis dolores repudiandae harum eligendi eius
                sequi. Labore quae sit reprehenderit ut voluptatum impedit,
                officia nulla ad dicta iste sapiente tenetur tempore ea
              </p>
            </div>
            <div className="h-full w-full flex flex-col items-center pt-10">
              <img src={iconThree} alt="icon-one" className="w-[200px]" />
              <span className="h-full w-full pt-3">Performance</span>
              <p className="p-5 text-sm text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta,
                voluptates. Rem, ad consequatur, nulla delectus sunt explicabo
                aliquid necessitatibus soluta voluptatibus reprehenderit aperiam
                ea sit atque perferendis dolores repudiandae harum eligendi eius
                sequi. Labore quae sit reprehenderit ut voluptatum impedit,
                officia nulla ad dicta iste sapiente tenetur tempore ea
              </p>
            </div>
          </Carousel>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default HeaderRoot;
