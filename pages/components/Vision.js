import Image from "next/image";
import img1 from "../../public/Group 7436.png";
import img2 from "../../public/Group 7330.png";
import img3 from "../../public/Group 7482.png";
import img4 from "../../public/googleadsensesm.png";
import img5 from "../../public/Group 2444.png";
function Vision() {
  return (
    <div className="vision">
      <div className="vision_head">
        <div className="vision_header">Result-oriented</div>
        <div className="vision_img"><Image src={img5} alt=".."  ></Image></div>
        <p>performance campaign for every objective</p>
      </div>
      <div className="vision_cards_group">
        <div className="vision_cards">
          <div className="vision_cards_img">
            <Image src={img1} alt="card-1"></Image>
          </div>
          <div className="vision_cards_text">
            <p>Self-serve platform with CPI starting at INR 1</p>
          </div>
        </div>
        <div className="vision_cards">
          <div className="vision_cards_img">
            <Image src={img2} alt="card-2"></Image>
          </div>
          <div className="vision_cards_text">
            <p>Access to premium inventory and exposure to 5K+ apps</p>
          </div>
        </div>
        <div className="vision_cards">
          <div className="vision_cards_img">
            <Image src={img3} alt="card-3"></Image>
          </div>
          <div className="vision_cards_text">
            <p>
              Comprehensive reporting and insights into campaign performance
            </p>
          </div>
        </div>
        <div className="vision_cards">
          <div className="vision_cards_img">
            <Image src={img4} alt="card-4"></Image>
          </div>
          <div className="vision_cards_text">
            <p>
              Campaigns for every need - clicks, installs, impressions, and more
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Vision;
