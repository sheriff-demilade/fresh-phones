import customer from "../assets/customer.jpg";

const TestimonialSection = () => (
  <section className="py-20">
    <div className="px-8 container mx-auto">
      <div className="bg-blue-50 grid grid-cols-4 items-center rounded-xl">
        <img
          src={customer}
          alt="customer"
          className="rounded-xl h-60 mx-auto scale-125 shadow-xl"
        ></img>
        <div className=" col-span-3 px-16 pl-8">
          <blockquote>
            <p className="text-lg text-blue-400 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit iure
              nulla dignissimos minima quaerat explicabo voluptatibus obcaecati
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit iure
              nulla dignissimos minima quaerat explicabo voluptatibus obcaecati
              nam iusto ullam tenetur debitis non, nihil aspernatur nemo iste
              saepe illum, eveniet.
            </p>
            <p className="text-blue-300">&mdash; Mathew Benson</p>
          </blockquote>
        </div>
      </div>
    </div>
  </section>
);

export default TestimonialSection;