import HotJobs from "../components/HotJobs";
import './HomePage.css';

export default function HomePage() {
  return (
    <>
      <div className="navbar__container--main">
        <h1 className="navbar__header--banner">Hot Jobs</h1>
      </div>
      <HotJobs />
    </>
  )
}