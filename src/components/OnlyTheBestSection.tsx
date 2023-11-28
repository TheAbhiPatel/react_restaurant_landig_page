const OnlyTheBestSection = () => {
  return (
    <section className="w-full h-[27rem] bg-gray-100 flex justify-center items-center">
      <div className="w-[60%] flex flex-col items-center text-center ">
        <div className="relative">
          <span className="uppercase text-gray-400 font-semibold tracking-wide">
            Only the best
          </span>
          <div className="absolute -bottom-1 right-10 w-[40%] h-[3px] bg-yellow-500" />
        </div>
        <div className="mt-5" />
        <h2 className="text-3xl  font-serif ">Fresh Ingredient, Tasty Meals</h2>
        <div className="mt-5" />
        <p className="text-gray-500 leading-7">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
          fugit suscipit qui, doloremque beatae quo reprehenderit accusantium
          voluptates totam rerum dolorem cupiditate eius non laborum animi.
          Pariatur nostrum consequatur voluptatum
        </p>

        <div className="mt-5" />
        <button className="px-3 py-1 bg-yellow-500 uppercase text-sm tracking-wide text-white">
          View items
        </button>
      </div>
    </section>
  );
};

export default OnlyTheBestSection;
