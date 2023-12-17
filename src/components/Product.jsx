import Section from "./layout/Section";
import productList from "../data/product.json";

const Product = () => {
  return (
    <div className="bg-primary-800 relative" id="service">
      <div
        className="absolute inset-0 mix-blend-color-burn	"
        style={{
          backgroundImage: "url(src/assets/bg/wave-bg.svg)",
        }}
      ></div>
      <Section>
        <div className="flex flex-col justify-center items-center">
          <h2 className="font-primary font-bold text-xl md:text-2xl text-primary-50">
            Our Product And Services
          </h2>
          <p className="font-secondary text-base mt-2 text-center">
            Develop digital skills with our{" "}
            <span className="text-accent-200">industry-relevant</span> online
            courses, guided by top practitioners and experts.
          </p>
          <div className="flex max-[550px]:flex-col max-md:flex-wrap justify-center w-full mt-8 md:mt-12 gap-6">
            {productList.map((product) => (
              <div key={product.title} className="group relative cursor-pointer ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl bg-neutral-white p-6 lg:p-8 rounded-md basis-1/3 max-md:grow overflow-hidden">
                <span className="absolute z-0 h-12 w-12 rounded-full bg-accent-500 transition-all duration-500 group-hover:scale-[18]"></span>
                <div className="flex flex-col gap-6 relative z-10">
                  <div className="p-3 rounded-full bg-blue-50 group-hover:bg-green-200 transition-all duration-300 shadow-[0px_0px_4px_#00000040] flex justify-center items-center w-fit relative">
                    <img
                      className="relative w-[24px] h-[24px] object-cover"
                      alt="Image"
                      src={product.icon}
                    />
                  </div>
                  <h3 className="font-secondary font-bold text-lg text-primary-700 group-hover:text-white transition-all duration-300">
                    {product.title}
                  </h3>
                  <p className="text-grey-600 group-hover:text-neutral-white transition-all duration-300">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Product;
