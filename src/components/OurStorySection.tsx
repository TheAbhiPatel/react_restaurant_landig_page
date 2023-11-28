const OurStorySection = () => {
  return (
    <section className="w-full h-[45rem] flex justify-center pt-20">
      <div className="flex w-[85%] justify-between">
        <div className="w-[50%] mt-5">
          <div className="relative">
            <span className="uppercase text-gray-400 font-semibold tracking-wide">
              our story
            </span>
            <div className="absolute -bottom-1 w-[10%] h-[3px] bg-yellow-500" />
          </div>
          <div className="mt-5" />
          <h2 className="text-3xl  font-serif ">Welcome To Royal</h2>
          <div className="mt-5 " />
          <p className="text-gray-500 text-start leading-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem rerum
            nulla deleniti ducimus? Aliquam illum odio quis, atque tempore dicta
            esse officia! Commodi, fugit! Id expedita, eaque sed illum nihil
            ipsam perferendis et! Enim maxime voluptate minus earum cupiditate
            quasi ratione, facere alias veritatis dolor labore quas. Inventore,
            voluptatum perferendis? Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Qui accusamus rerum eveniet ad enim autem
            inventore illum expedita, aliquid fuga facere, iste error itaque
            obcaecati veritatis unde laborum voluptatibus rem.
          </p>
          <p className="text-gray-500 text-start leading-7">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo sunt
            nobis, non tempore molestiae assumenda tenetur aspernatur. Pariatur
            dolorem neque, sapiente, voluptates excepturi, minima aperiam velit
            animi quod sit veritatis!
          </p>
        </div>
        <div className="w-[40%]">
          <img
            src="vegitable-bowl.jpg"
            alt="vegitable-bowl"
            className="w-[90%]"
          />
        </div>
      </div>
    </section>
  );
};

export default OurStorySection;
