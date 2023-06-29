import customer from "../assets/customer.jpg";

const TestimonialSection = () => (
  <section className="py-16" id="testimonial">
    <div className="px-4 container mx-auto">
      <div className="bg-blue-50 grid sm:grid-cols-4 grid-cols-1 gap-16 items-center rounded-xl">
        <img
          src={customer}
          alt="customer"
          className="rounded-xl h-60 mx-auto scale-125 shadow-xl "
        />
        <div className=" sm:col-span-3 px-4 pb-8">
          <blockquote>
            <p className="text-lg text-blue-400 mb-5">
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
