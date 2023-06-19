import newsLetter from "../assets/newsLetter.jpg";

function CtaSection() {
  return (
    <section className="pt-20 pb-32 ">
      <div className="px-8 container mx-auto">
        <div className=" bg-gradient-to-br from-blue-100 to-blue-400 grid grid-cols-5 rounded-xl overflow-hidden shadow-xl">
          <div className="col-span-3	p-12 ">
            <h3 className="text-3xl mb-4">
              Lorem ipsum dolor sit amet consectetur
            </h3>
            <p className="mb-8 text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elitnisi
              recusandae iste ex voluptatibus commodi!
            </p>
            <form action="flex items-center	">
              <input
                type="email"
                placeholder="me@example.com"
                className="w-4/5 h-16 px-6 -mr-32 m- rounded-xl text-xl outline-none"
              />
              <button className="h-12 w-32 text-xl font-semibold text-white rounded-lg -translate-x-[6px] bg-blue-400 hover:bg-blue-500 duration-300">
                subscribe
              </button>
            </form>
          </div>

          <div
            style={{
              backgroundImage: ` url(${newsLetter})`,
              backgroundSize: "cover",
              backgroundPosition: "right 20% top 35% ",
            }}
            className="col-span-2"
          ></div>
        </div>
      </div>
    </section>
  );
}

export default CtaSection;
