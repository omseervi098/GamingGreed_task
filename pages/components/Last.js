import Image from "next/image";
import img from "../../public/Group 2439.png";
function Last() {
  return (
    <div className="last">
      <div className="last_container">
        <div className="last_head">
          <div className="part-1">Acquire</div>
          <div className="last_head_img">
            <div className="part-1"> quality users</div>
            <div className="img"><Image src={img} alt="bg" layout="responsive"></Image></div>
          </div>
          <div className="part-1">, not just installs</div>
        </div>
        <div className="last_body">
          Talk to us today and start creating mobile marketing campaigns that
          deliver results.
        </div>
      </div>
    </div>
  );
}
export default Last;
