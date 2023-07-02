import customer from "../assets/customer.jpg";

const TestimonialSection = () => (
  <section className="py-16 lg:py-20" id="testimonial">
    <div className="px-4 sm:px-8 container mx-auto">
      <div className="bg-blue-50 flex flex-col md:flex-row-reverse md:pr-12 gap-16 md:gap-0 items-center rounded-xl">
        <img
          src={customer}
          alt="customer"
          className="rounded-xl h-60 mx-auto scale-125 shadow-xl "
        />
        <div className=" sm:col-span-3 px-3 sm:px-8 pb-8 md:p-6 md:pr-12 lg:pr-14 lg:pl-12">
          <blockquote>
            <p className="text-blue-400 mb-4">
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
