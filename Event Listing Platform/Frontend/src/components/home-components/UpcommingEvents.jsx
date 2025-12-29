import { Link } from "react-router-dom"

export const UpcommingEvents = () => {
  return (
    <div className="mt-10">

      {/* Event 1 */}
      <div className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row gap-10">
          <img
            src="https://i.ibb.co/vxmPrKPR/2020-presentations-banner-1024x403.webp"
            className="max-w-225 rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-4xl font-bold py-3">Upcomming Events!</h1>
            <h3 className="text-2xl font-bold">Workshops & Seminars</h3>
            <div className="py-3">
              <p className="text-[20px] text-justify">
                This is an upcoming event of ours. This workshop about Web Development using MERN. You can join our wrokshop for free! To see more go to "See Details".
              </p>
            </div>
            <div className="flex justify-center items-center mt-3">
              <Link to="/details-event">
                <button className="btn bg-[#0D9C6D] text-white text-[20px] w-55 h-13">See Details</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Event 2 */}
      <div className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row gap-10  mt-15">
          <div>
            <h1 className="text-4xl font-bold py-3">Upcomming Events!</h1>
            <h3 className="text-2xl font-bold">Sports & Fitness</h3>
            <div className="py-3">
              <p className="text-[20px] text-justify">
                This is an upcoming event of ours. This is an Open Event for all Sports & Fitness loving people. You can join our Sports & Fitness event for free! To see more go to "See Details".
              </p>
            </div>
            <div className="flex justify-center items-center mt-3">
              <Link to="/details-event">
                <button className="btn bg-[#0D9C6D] text-white text-[20px] w-55 h-13">See Details</button>
              </Link>
            </div>
          </div>
          <img
            src="https://i.ibb.co/XBCSBL2/sports-background-international-sports-day-illustration-graphic-design-for-the-decoration-of-gift-ce.jpg"
            className="max-w-225 rounded-lg shadow-2xl"
          />
        </div>
      </div>

      {/* Event 3 */}
      <div className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row gap-10 mt-15">
          <img
            src="https://i.ibb.co/DggGy8Kv/audience-1853662-1280.jpg"
            className="max-w-225 h-130 rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-4xl font-bold py-3">Upcomming Events!</h1>
            <h3 className="text-2xl font-bold">Music & Concerts</h3>
            <div className="py-3">
              <p className="text-[20px] text-justify">
                This is an upcoming event of ours. This Evnet for a Music & Concerts. You can also join our Music & Concerts! To see more go to "See Details".
              </p>
            </div>
            <div className="flex justify-center items-center mt-3">
              <Link to="/details-event">
                <button className="btn bg-[#0D9C6D] text-white text-[20px] w-55 h-13">See Details</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
