import newsLetter from "../assets/newsLetter.jpg";

function CtaSection() {
  return (
    <section className="pt-4 pb-16 ">
      <div className="px-4 container mx-auto">
        <div className="bg-gradient-to-br from-blue-100 to-blue-400 grid grid-cols-1 rounded-xl overflow-hidden shadow-xl">
          <div
            style={{
              backgroundImage: ` url(${newsLetter})`,
              backgroundSize: "cover",
              backgroundPosition: "right 20% top 35%",
            }}
            className="h-60"
          ></div>
          <div className="p-4 pt-8 pb-6">
            <h3 className="text-xl mb-2">
              Lorem ipsum dolor sit amet consectetur
            </h3>
            <p className="mb-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elitnisi
              recusandae iste ex voluptatibus commodi!
            </p>
            <form className="flex flex-col gap-6 items-center">
              <input
                type="email"
                placeholder="me@example.com"
                className="w-full h-12 px-3 rounded-xl text-xl outline-none"
              />
              <button className="h-10 w-32  text-xl font-semibold text-white rounded-lg bg-blue-400 hover:bg-blue-500 duration-300 shadow">
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
