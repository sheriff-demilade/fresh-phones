import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-20 text-gray-500 bg-blue-50">
      <div className="container px-8 mx-auto grid grid-cols-4 gap-20">
        <div className="flex flex-col	justify-between">
          <Link to="/" className="text-3xl  text-blue-300 logo">
            FreshPhones
          </Link>

          <div className="flex gap-6">
            <Link className="duration-300 hover:text-blue-400">
              <ion-icon name="logo-facebook"></ion-icon>
            </Link>
            <Link className="duration-300 hover:text-blue-400">
              <ion-icon name="logo-whatsapp"></ion-icon>
            </Link>
            <Link className="duration-300 hover:text-blue-400">
              <ion-icon name="logo-twitter"></ion-icon>
            </Link>
            <Link className="duration-300 hover:text-blue-400">
              <ion-icon name="logo-instagram"></ion-icon>
            </Link>
          </div>

          <p className="">
            Copyright &copy; 2023 by Freshphones, Inc. All rights reserved.
          </p>
        </div>

        <div className="">
          <p className="mb-6 text-lg font-semibold">Contact us</p>

          <address className="mb-8 not-italic">
            224 Voluptatum, Luscuatur Uatujsbsn Lossimus .
          </address>
          <a
            href="tel:4152016370"
            className="block mb-2 duration-300 hover:text-blue-400"
          >
            415-201-6370
          </a>

          <a
            href="mailto:hello@omnifood.com "
            className="duration-300 hover:text-blue-400"
          >
            hello@freshphones.com
          </a>
        </div>

        <div className="justify-self-center">
          <p className="mb-6 text-lg font-semibold">Contact us</p>
          <ul className="flex flex-col gap-4">
            <li>
              <Link className="duration-300 hover:text-blue-400">
                Create account
              </Link>
            </li>
            <li>
              <Link className="duration-300 hover:text-blue-400">Sign in</Link>
            </li>
            <li>
              <Link className="duration-300 hover:text-blue-400">iOS app</Link>
            </li>
            <li>
              <Link className="duration-300 hover:text-blue-400">
                Android app
              </Link>
            </li>
          </ul>
        </div>

        <div className="justify-self-center">
          <p className="mb-6 text-lg font-semibold">Contact us</p>
          <ul className="flex flex-col gap-4">
            <li>
              <Link className="duration-300 hover:text-blue-400">
                About FreshPhones
              </Link>
            </li>
            <li>
              <Link className="duration-300 hover:text-blue-400">
                For Business
              </Link>
            </li>
            <li>
              <Link className="duration-300 hover:text-blue-400">
                SmartPhones partners
              </Link>
            </li>
            <li>
              <Link className="duration-300 hover:text-blue-400">Careers</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
