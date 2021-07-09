import HotJobs from "../components/HotJobs";
// import Partnerships from "../components/Partnerships";
import './HomePage.css';

export default function HomePage() {
  return (
    <>
      <HotJobs />
      <div className="navbar__container--main">
        <h1 className="navbar__header--banner">Hot Jobs and Partnerships</h1>
        <img src="https://cdn.shortpixel.ai/client/q_lossless,ret_img,w_898/https://www.growthmarketingpro.com/wp-content/uploads/2018/06/app-academy.png" alt="App Academy" width="200"></img>
      </div>
      {/* <Partnerships /> */}
    </>
  )
}
