import tecnoLogo from "../assets/tecnoLogo.webp";
import huaweiLogo from "../assets/huaweiLogo.webp";
import samsungLogo from "../assets/samsungLogo.webp";
import infinixLogo from "../assets/infinixLogo.webp";
import itelLogo from "../assets/itelLogo.jpg";

const FeaturedInSection = () => {
  return (
    <section className=" container mx-auto flex justify-between items-center px-4 py-7 ">
      <img src={tecnoLogo} alt="tecnoLogo" className="h-5 " />
      <img src={huaweiLogo} alt="huaweiLogo" className="h-5" />
      <img src={samsungLogo} alt="samsungLogo" className="h-5" />
      <img src={itelLogo} alt="itelLogo" className="h-5" />
      <img src={infinixLogo} alt="infinixLogo" className="h-5" />
    </section>
  );
};

export default FeaturedInSection;
