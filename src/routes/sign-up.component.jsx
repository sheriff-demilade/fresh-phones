const SignUp = () => {
  return (
    <main className="container mx-auto px-4 sm:px-8 pt-14 pb-20">
      <form className=" max-w-xs mx-auto">
        <label htmlFor="text" className="block mb-4">
          Name
        </label>
        <input
          id="text"
          type="text"
          placeholder="Sheriff Demilade"
          className="block py-2 px-3 border-2 border-gray-300 w-full rounded-lg  mb-6"
          required
        />
        <label htmlFor="email" className="block mb-4">
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="me@example.com"
          className="block py-2 px-3 border-2 border-gray-300 w-full rounded-lg  mb-6"
          required
        />

        <label htmlFor="password" className="block  mb-4">
          Password
        </label>
        <input
          id="password"
          type="password"
          className="block py-2 px-3 border-2 border-gray-300 w-full rounded-lg  mb-6"
          required
        />
        <label htmlFor="confirm-password" className="block  mb-4">
          Confirm Password
        </label>
        <input
          id="onfirm-password"
          type="password"
          className="block py-2 px-3 border-2 border-gray-300 w-full rounded-lg  mb-8"
          required
        />

        <div className="flex justify-between gap-6">
          <button className=" py-2 px-5 bg-blue-400 text-white rounded-lg  hover:bg-blue-500">
            Sign up
          </button>

          <button className=" grow py-2 px-5 bg-blue-50 text-blue-400 outline outline-1 outline-blue-400 hover:bg-blue-100 rounded-lg">
            Google Sign in
          </button>
        </div>
      </form>
    </main>
  );
};

export default SignUp;
