import { BsArrowDown } from "react-icons/bs";
import ShopButton from "./shop-button.component";

const HeroSection = () => {
  return (
    <section className="py-14 md:py-16 bg-blue-50">
      <div className="container mx-auto px-4 sm:px-8 grid grid-cols-1 md:grid-cols-2 gap-9 md:gap-12 items-center">
        <div className="md:col-start-2">
          <img
            src="https://plus.unsplash.com/premium_photo-1682065724607-22877c1b6983?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fG1vYmlsZSUyMHBob25lc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60"
            alt="Mobile phone"
            className="w-full rounded-lg mx-auto"
          />
        </div>
        <div className="md:col-start-1 md:row-start-1">
          <h2 className="text-2xl font-medium mb-3">
            Lorem ipsum dolor sit amet bonjour elit.
          </h2>
          <p className="mb-9">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            laboriosam minus labore repellat similique dicta reiciendis
            repudiandae autem. Voluptas adipisci eligendi veritatis facilis, non
            iure velit doloribus nesciunt in dignissimos.
          </p>

          <div className="flex gap-4 text-xs font-medium">
            <ShopButton />
            <a
              href="#phones"
              className="px-4 py-3 rounded-lg flex gap-3 items-center w-fit bg-blue-100 shadow hover:text-blue-400"
            >
              <span>SEE PHONES</span>
              <BsArrowDown />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
