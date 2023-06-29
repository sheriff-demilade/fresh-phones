const FeaturesSection = () => (
  <section className="py-12" id="features">
    <div className="container mx-auto px-4 grid sm:grid-cols-4 grid-cols-1 sm:gap-12 gap-10">
      <div>
        <div className="h-12 w-12 flex justify-center items-center rounded-full bg-blue-50 text-blue-400 mb-5">
          <ion-icon name="ribbon-outline" size="large"></ion-icon>
        </div>
        <h3 className="text-xl mb-2">Quality Products</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum,
          fugiat nam ullam eveniet optio, laborum earum.
        </p>
      </div>
      <div>
        <div className="h-12 w-12 flex justify-center items-center rounded-full bg-blue-50 text-blue-400 mb-5">
          <ion-icon name="cart-outline" size="large"></ion-icon>
        </div>
        <h3 className="text-xl mb-2">Free Delivery</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum,
          fugiat nam ullam eveniet optio, laborum earum.
        </p>
      </div>
      <div>
        <div className="h-12 w-12 flex justify-center items-center rounded-full bg-blue-50 text-blue-400 mb-5">
          <ion-icon name="happy-outline" size="large"></ion-icon>
        </div>
        <h3 className="text-xl mb-2">Friendly Services</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum,
          fugiat nam ullam eveniet optio, laborum earum.
        </p>
      </div>
      <div>
        <div className="h-12 w-12 flex justify-center items-center rounded-full bg-blue-50 text-blue-400 mb-5">
          <ion-icon name="card-outline" size="large"></ion-icon>
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
