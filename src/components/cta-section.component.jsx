import newsLetter from "../assets/newsLetter.jpg";

function CtaSection() {
  return (
    <section className="pt-6 md:pt-14 lg:pt-16 pb-16 md:pb-24 lg:pb-28">
      <div className="px-4 sm:px-8 container mx-auto">
        <div className="bg-gradient-to-br from-blue-50 to-blue-400 grid grid-cols-1 md:grid-cols-5 rounded-xl overflow-hidden shadow-xl">
          <div
            style={{
              backgroundImage: ` url(${newsLetter})`,
              backgroundSize: "cover",
              backgroundPosition: "right 20% top 33%",
            }}
            className="h-64 sm:h-80 md:col-span-2 md:h-auto"
          ></div>
          <div className="px-4 sm:px-8 py-8 sm:py-10 md:col-span-3">
            <h3 className="text-xl lg:text-2xl mb-2 lg:mb-3">
              Lorem ipsum dolor sit amet consectetur
            </h3>
            <p className="mb-7 lg:mb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elitnisi
              recusandae iste ex voluptatibus commodi!
            </p>
            <form className="flex flex-col sm:flex-row gap-6 sm:gap-0 items-center">
              <input
                type="email"
                placeholder="me@example.com"
                className="w-full h-12 px-3 rounded-xl outline-none sm:-mr-[132px] lg:w-3/4"
              />
              <button className="h-10 w-32  text-xl font-semibold text-white rounded-lg bg-blue-400 hover:bg-blue-500 duration-300 shadow-md">
                subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CtaSection;
