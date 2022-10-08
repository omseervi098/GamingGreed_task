import Image from "next/image";
import img1 from "../../public/Mask Group 41.png";
import img2 from "../../public/Mask Group 43.png";
import img3 from "../../public/Mask Group 44.png";
import img4 from "../../public/Mask Group 42.png";
import img5 from "../../public/Mask Group 34.png";
import img6 from "../../public/Mask Group 39.png";
function Partners() {
  const partners = [img1, img2, img3, img4, img5, img6];
  return (
    <div className="partners">
      <div className="partners_container">
        <div className="partners_head">
          <div>Our Top Partners</div>
        </div>
        <div className="partners_cards">
          {partners.map((partner, idx) => {
            return (
              <div key={idx} className="partners_cards_img">
                <Image src={partner} alt="partners-1" ></Image>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default Partners;
