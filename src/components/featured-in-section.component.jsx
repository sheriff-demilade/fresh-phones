import tecnoLogo from "../assets/tecnoLogo.webp";
import huaweiLogo from "../assets/huaweiLogo.webp";
import samsungLogo from "../assets/samsungLogo.webp";
import infinixLogo from "../assets/infinixLogo.webp";
import itelLogo from "../assets/itelLogo.jpg";

const FeaturedInSection = () => {
  return (
    <section className=" container mx-auto flex justify-between lg:justify-evenly items-center px-4 sm:px-8 py-7 lg:py-8 ">
      <img
        src={tecnoLogo}
        alt="tecnoLogo"
        className="h-5 sm:h-7 md:h-9 lg:h-10 "
      />
      <img
        src={huaweiLogo}
        alt="huaweiLogo"
        className="h-5 sm:h-7 md:h-9 lg:h-10"
      />
      <img
        src={samsungLogo}
        alt="samsungLogo"
        className="h-5 sm:h-7 md:h-9 lg:h-10"
      />
      <img
        src={itelLogo}
        alt="itelLogo"
        className="h-5 sm:h-7 md:h-9 lg:h-10"
      />
      <img
        src={infinixLogo}
        alt="infinixLogo"
        className="h-5 sm:h-7 md:h-9 lg:h-10"
      />
    </section>
  );
};

export default FeaturedInSection;
