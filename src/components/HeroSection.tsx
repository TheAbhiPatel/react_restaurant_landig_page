import { IoIosArrowRoundDown } from "react-icons/io";

const HeroSection = () => {
  return (
    <section>
      <div className="w-full relative">
        <img
          src="hero-banner.jpg"
          alt="hero-banner"
          className="w-full h-[27rem]"
        />
        <div className="absolute top-0 right-0 left-0 bottom-0 bg-[rgba(0,0,0,0.7)] ">
          <div className="mx-auto w-[60%] h-full flex flex-col  items-center text-white">
            <div className="mt-28" />
            <h1 className="text-5xl font-serif tracking-wider">
              Only Quality Food
            </h1>
            <div className="mt-10" />
            <p className="text-center ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              blanditiis vitae illum fugit fuga magni eos nam inventore, culpa
              voluptatibus veritatis dolorum minima minus esse saepe ad?
              Explicabo, ex voluptatem. Lorem ipsum dolor sit amet. Lorem, ipsum
              dolor.
            </p>
            <div className="mt-10 flex gap-5">
              <button className="px-2 border-[1.5px] border-white uppercase text-sm">
                View Menu
              </button>
              <button className="px-2 bg-yellow-500 uppercase text-sm tracking-wide">
                Reservation
              </button>
            </div>
            <div className="mt-10 text-3xl">
              <IoIosArrowRoundDown />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
