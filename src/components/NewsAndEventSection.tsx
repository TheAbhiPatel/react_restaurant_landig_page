import { news } from "../data";

const NewsAndEventSection = () => {
  return (
    <section className="w-full h-[50rem]  bg-gray-100 flex justify-center items-center">
      <div className="w-[80%] flex flex-col items-center text-center ">
        <div className="relative">
          <span className="uppercase text-gray-400 font-semibold tracking-wide">
            Don't Miss
          </span>
          <div className="absolute -bottom-1 right-7 w-[40%] h-[2.5px] bg-yellow-500" />
        </div>
        <div className="mt-5" />
        <h2 className="text-3xl  font-serif ">Our News And Events</h2>
        <div className="mt-5" />
        <p className="text-gray-500 leading-7">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
          fugit suscipit qui, doloremque beatae quo reprehenderit accusantium
          voluptates totam
        </p>

        <div className="w-full flex justify-between mt-10">
          {news.map((item) => {
            return (
              <div className="w-64 h-auto bg-white ">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-40"
                />
                <div className="px-3 py-4 text-start">
                  <h4>{item.title}</h4>
                  <span className="uppercase text-yellow-500 text-xs font-[500]">
                    {item.category}
                  </span>
                  <p className="text-xs text-gray-400 tracking-wide">
                    {item.discription}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10" />
        <button className="px-3 py-1 bg-yellow-500 uppercase text-sm tracking-wide text-white">
          Read More
        </button>
      </div>
    </section>
  );
};

export default NewsAndEventSection;
