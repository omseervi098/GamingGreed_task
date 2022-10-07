import Image from "next/image";
import img from "../../public/Group 2439.png";
function Last(){
    return (
        <div className="last">
          <div className="last_container">
            <div className="last_head">
            <div>Acquire quality users, not just installs</div>
             <div className="last_head_img"><Image src={img} alt="bg" width={350}></Image></div>
            </div>
            <div className="last_body">
            Talk to us today and start creating mobile marketing campaigns that deliver results.
            </div>
          </div>
        </div>
    );
}
export default Last;