const FeaturesSection = () => (
  <section className="py-20" id="features">
    <div className="container mx-auto px-8 grid sm:grid-cols-4 grid-cols-1 sm:gap-12 gap-16">
      <div>
        <div className="h-16 w-16 flex justify-center items-center rounded-full bg-blue-50 text-blue-400 mb-8">
          <ion-icon name="ribbon-outline" size="large"></ion-icon>
        </div>
        <h3 className="text-3xl mb-4">Quality Products</h3>
        <p className="text-lg">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum,
          fugiat nam ullam eveniet optio, laborum earum.
        </p>
      </div>
      <div>
        <div className="h-16 w-16 flex justify-center items-center rounded-full bg-blue-50 text-blue-400 mb-8">
          <ion-icon name="cart-outline" size="large"></ion-icon>
        </div>
        <h3 className="text-3xl mb-4">Free Delivery</h3>
        <p className="text-lg">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum,
          fugiat nam ullam eveniet optio, laborum earum.
        </p>
      </div>
      <div>
        <div className="h-16 w-16 flex justify-center items-center rounded-full bg-blue-50 text-blue-400 mb-8">
          <ion-icon name="happy-outline" size="large"></ion-icon>
        </div>
        <h3 className="text-3xl mb-4">Friendly Services</h3>
        <p className="text-lg">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum,
          fugiat nam ullam eveniet optio, laborum earum.
        </p>
      </div>
      <div>
        <div className="h-16 w-16 flex justify-center items-center rounded-full bg-blue-50 text-blue-400 mb-8">
          <ion-icon name="card-outline" size="large"></ion-icon>
        </div>
        <h3 className="text-3xl mb-4">Safe Payment</h3>
        <p className="text-lg">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum,
          fugiat nam ullam eveniet optio, laborum earum.
        </p>
      </div>
    </div>
  </section>
);

export default FeaturesSection;
