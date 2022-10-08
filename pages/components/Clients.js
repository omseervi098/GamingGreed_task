import Image from "next/image";
import img2 from "../../public/Mask Group 42.png";
import img1 from "../../public/Dream11-Logo-PNG-imsge.png";
import img3 from "../../public/Mask Group 44@2x.png";
function Clients() {
  const clients = [img1, img2, img3];
  return (
    <div className="clients" id="client">
      <div className="clients_container">
        <div className="clients_head">Our Top Clients</div>
        <div className="clients_cards">
          {clients.map((client) => {
            return (
              <div key={client.id} className="clients_cards_img">
                <Image src={client} alt="clients-1"></Image>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default Clients;
