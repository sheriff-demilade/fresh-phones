const HeroSection = () => {
  return (
    <section className="pt-16 pb-20 bg-blue-50">
      <div className="container mx-auto px-8 grid grid-cols-2 gap-24 items-center">
        <div>
          <h2 className="text-4xl font-medium mb-6">
            Lorem ipsum dolor sit amet bonjour elit.
          </h2>
          <p className="text-lg mb-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            laboriosam minus labore repellat similique dicta reiciendis
            repudiandae autem. Voluptas adipisci eligendi veritatis facilis, non
            iure velit doloribus nesciunt in dignissimos.
          </p>

          <form
            action=""
            className="flex items-center w-2/3 shadow rounded-2xl"
          >
            <input
              type="search"
              className="h-10 grow rounded-l-2xl px-6 outline-none"
            />
            <button className="h-10 bg-blue-400 rounded-r-2xl text-white text-xl px-2">
              <ion-icon name="search-outline"></ion-icon>
            </button>
          </form>
        </div>
        <div className="">
          <img
            src="https://plus.unsplash.com/premium_photo-1682065724607-22877c1b6983?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fG1vYmlsZSUyMHBob25lc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60"
            alt="Mobile phone"
            className="w-4/5 rounded-3xl mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
