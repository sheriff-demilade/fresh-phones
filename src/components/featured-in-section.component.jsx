import tecnoLogo from "../assets/tecnoLogo.webp";
import huaweiLogo from "../assets/huaweiLogo.webp";
import samsungLogo from "../assets/samsungLogo.webp";
import infinixLogo from "../assets/infinixLogo.webp";
import itelLogo from "../assets/itelLogo.jpg";

const FeaturedInSection = () => {
  return (
    <section className="container p-8 pb-0 mx-auto flex justify-evenly">
      <img src={tecnoLogo} alt="tecnoLogo" className="h-6" />
      <img src={huaweiLogo} alt="huaweiLogo" className="h-6" />
      <img src={samsungLogo} alt="samsungLogo" className="h-6" />
      <img src={itelLogo} alt="itelLogo" className="h-6" />
      <img src={infinixLogo} alt="infinixLogo" className="h-6" />
    </section>
  );
};

export default FeaturedInSection;
