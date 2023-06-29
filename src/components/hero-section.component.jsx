import { Link } from "react-router-dom";
import { BsArrowDown } from "react-icons/bs";

const HeroSection = () => {
  return (
    <section className="py-10 bg-blue-50">
      <div className="container mx-auto px-4 grid sm:grid-cols-2 grid-cols-1 sm:gap-24 gap-16 items-center">
        <div>
          <h2 className="text-2xl font-medium mb-3">
            Lorem ipsum dolor sit amet bonjour elit.
          </h2>
          <p className="mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            laboriosam minus labore repellat similique dicta reiciendis
            repudiandae autem. Voluptas adipisci eligendi veritatis facilis, non
            iure velit doloribus nesciunt in dignissimos.
          </p>

          <div className="flex gap-4 text-xs">
            <Link
              to="/shop"
              className="px-4 py-3 rounded-lg text-white bg-blue-400 hover:bg-blue-500 duration-300 shadow"
            >
              GOTO SHOP
            </Link>
            <a
              href="#phones"
              className="px-4 py-3 rounded-lg flex gap-3 items-center w-fit bg-blue-100 shadow hover:text-blue-400"
            >
              <span>SEE PHONES</span>
              <BsArrowDown />
            </a>
          </div>
        </div>
        <div>
          <img
            src="https://plus.unsplash.com/premium_photo-1682065724607-22877c1b6983?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fG1vYmlsZSUyMHBob25lc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60"
            alt="Mobile phone"
            className="sm:w-4/5 w-11/12 rounded-3xl mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
