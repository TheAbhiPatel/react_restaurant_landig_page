const ContactSection = () => {
  return (
    <section className="w-full relative">
      <img
        src="hero-banner.jpg"
        alt="hero-banner"
        className="w-full h-[50rem]"
      />
      <div className="absolute top-0 right-0 left-0 bottom-0 bg-[rgba(0,0,0,0.8)] ">
        <div className="mx-auto w-[85%] h-full flex justify-between  items-center text-white">
          <div className="w-[48%] h-[35rem] p-10 bg-gray-900 flex flex-col items-center justify-center">
            <h6 className="text-2xl font-serif">Hours of Operation</h6>
            <div className="mt-10" />
            <div className="flex flex-col gap-1 items-center">
              <span>MON - FRI</span>
              <span>10:00am - 1:00pm</span>
              <span>4:00pm - 10:30pm</span>
            </div>
            <div className="w-full h-[3px] bg-yellow-500 my-3" />
            <div className="flex flex-col gap-1 items-center">
              <span>SAT</span>
              <span>4:00pm - 10:30pm</span>
            </div>
            <div className="w-full h-[3px] bg-yellow-500 my-3" />

            <div className="flex flex-col gap-1 items-center">
              <span>SUN</span>
              <span>We are closed</span>
            </div>
            <div className="mt-10" />
            <button className="px-3 py-1 bg-yellow-500 uppercase text-sm tracking-wide text-white">
              Make a Reservation
            </button>
          </div>
          <div className="w-[48%] h-[35rem] p-10 bg-gray-900 flex flex-col items-center justify-center">
            <div className="flex flex-col gap-1 items-center">
              <h6 className="text-2xl ">Drop Us a Line</h6>
              <p className="text-center text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam beatae
              </p>
              <div className="mt-5" />
              <button className="px-3 py-1 bg-yellow-500 uppercase text-sm tracking-wide text-white">
                Cantact US
              </button>
            </div>
            <div className="mt-10" />
            <div className="flex flex-col gap-4 items-center">
              <h6 className="text-2xl">Our Newsletter</h6>
              <p className="text-gray-300">
                Lorem ipsum dolor sit amet consectetur
              </p>
              <form action="" className="w-full flex flex-col gap-3">
                <input
                  type="text"
                  name="firstname"
                  placeholder="First Name"
                  className="px-2 py-1 bg-gray-700"
                />
                <input
                  type="text"
                  name="lastname"
                  placeholder="Last Name"
                  className="px-2 py-1 bg-gray-700 "
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="px-2 py-1 bg-gray-700"
                />
                <button className="px-3 py-1 bg-yellow-500 uppercase text-sm tracking-wide text-white">
                  Cantact US
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
