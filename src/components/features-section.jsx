import {
  BsTrophy,
  BsTruck,
  BsEmojiSmile,
  BsCreditCard2Back,
} from "react-icons/bs";

const FeaturesSection = () => (
  <section className="py-14 md:py-16" id="features">
    <div className="container mx-auto px-4 sm:px-8 grid sm:grid-cols-2 grid-cols-1 sm:gap-y-14 sm:gap-x-12 md:gap-x-16 gap-10">
      <div>
        <div className="h-12 w-12 flex justify-center items-center rounded-full bg-blue-50 text-blue-400 mb-5">
          <BsTrophy size={24} />
        </div>
        <h3 className="text-xl mb-2">Quality Products</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum,
          fugiat nam ullam eveniet optio, laborum earum.
        </p>
      </div>
      <div>
        <div className="h-12 w-12 flex justify-center items-center rounded-full bg-blue-50 text-blue-400 mb-5">
          <BsTruck size={24} />
        </div>
        <h3 className="text-xl mb-2">Free Delivery</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum,
          fugiat nam ullam eveniet optio, laborum earum.
        </p>
      </div>
      <div>
        <div className="h-12 w-12 flex justify-center items-center rounded-full bg-blue-50 text-blue-400 mb-5">
          <BsEmojiSmile size={24} />
        </div>
        <h3 className="text-xl mb-2">Friendly Services</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum,
          fugiat nam ullam eveniet optio, laborum earum.
        </p>
      </div>
      <div>
        <div className="h-12 w-12 flex justify-center items-center rounded-full bg-blue-50 text-blue-400 mb-5">
          <BsCreditCard2Back size={24} />
        </div>
        <h3 className="text-xl mb-2">Safe Payment</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum,
          fugiat nam ullam eveniet optio, laborum earum.
        </p>
      </div>
    </div>
  </section>
);

export default FeaturesSection;
