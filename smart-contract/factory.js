import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0xC72CEc4C46Cb84bCF78ea2df452fd57d63273b01"
);

export default instance;
