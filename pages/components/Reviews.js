import Image from "next/image";
import Link from "next/link";
import img from "../../public/Dream-11-Logo-PNG_aeod57.png";
function Reviews(){
    return (
        <div className="reviews">
            <div className="reviews_container">
                <div className="reviews_head">
                    <div>Hear it from Clients</div>
                </div>
                <div className="reviews_card">
                   <div className="reviews_card_img">
                    <Image src={img} alt="bg"></Image>
                    </div>
                    <div className="reviews_card_text">
                        <div className="reviews_card_text_head">
                        22.4 Mn minutes of branding results in 25k high-quality registrations
                        </div>
                        <div className="reviews_card_text_body">
                        The placement of clickable units natively placed on the main menu, gameplay screen and pause screen ensured high engagement, registrations and transactions.
                        </div>
                    </div>
                    <Link href="#">Read Casestudy</Link>
                </div>
            </div>
        </div>
    );
}
export default Reviews;