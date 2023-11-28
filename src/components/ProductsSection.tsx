import { products } from "../data";

const ProductsSection = () => {
  return (
    <section className="w-full bg-black">
      <div className="w-[75%] mx-auto grid gird-cols-1 md:grid-cols-3 justify-center gap-0">
        {products.map((product) => {
          return (
            <>
              <div className="w-64 h-64 bg-white  px-4 text-center flex flex-col justify-center items-center m-0">
                <h4 className="text-xl font-semibold text-orange-300">
                  ${product.price}
                </h4>
                <div className="mt-3" />
                <h3 className="text-xl font-serif">{product.title}</h3>
                <div className="mt-3" />
                <p className="text-gray-500">{product.discription}</p>
              </div>
              <div className="w-64 h-64  m-0">
                <img
                  src={product.image}
                  alt={product.title + "image"}
                  className="w-full h-full object-cover"
                />
              </div>
            </>
          );
        })}
      </div>
    </section>
  );
};

export default ProductsSection;
