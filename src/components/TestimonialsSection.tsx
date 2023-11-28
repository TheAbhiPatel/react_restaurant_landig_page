import { FaStar } from "react-icons/fa";
import { testimonials } from "../data";
const TestimonialsSection = () => {
  return (
    <section className="w-full h-[30rem]  flex justify-center items-center">
      <div className="w-[60%] flex flex-col items-center text-center ">
        <div className="relative">
          <span className="uppercase text-gray-400 font-semibold tracking-wide">
            Tesimonials
          </span>
          <div className="absolute -bottom-1 right-10 w-[40%] h-[3px] bg-yellow-500" />
        </div>
        <div className="mt-5" />
        <h2 className="text-3xl  font-serif ">What People are Saying</h2>
        <div className="mt-5 flex justify-center gap-5">
          {testimonials.map((item) => {
            return (
              <div className="w-52 text-start">
                <div className="flex gap-2 text-yellow-500">
                  {[...new Array(item.rating)].map(() => (
                    <FaStar />
                  ))}
                </div>
                <div className="mt-4" />
                <h4 className="font-serif ">"{item.titile}"</h4>
                <div className="mt-4" />
                <p className="text-xs leading-6 tracking-wide text-gray-500">
                  "{item.discription}"
                </p>
                <div className="mt-4" />
                <h5 className="font-semibold">{item.name}</h5>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
