import { Plus } from "lucide-react"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getallEvents } from "../api/eventApi";

export const EventPages = () => {

  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fecth Events from API and setEvents
    const allEventList = async () => {
      const res = await getallEvents();
    };
  });

  return (
    <div className="flex flex-col gap-5 mb-10">
      <div className="flex justify-end mt-5">
        <Link to="/create-event">
          <button className="btn text-[#0D9C6D] text-[18px] w-55 h-13"><Plus />Create New Event</button>
        </Link>
      </div>
      <div className="flex gap-10">

        {/* Workshops & Seminars */}
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img
              src="https://i.ibb.co/vxmPrKPR/2020-presentations-banner-1024x403.webp"
              className="h-50"
              alt="Workshops & Seminars" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-2xl">Workshops & Seminars</h2>
            <p className="text-[18px]">A card component has a figure, a body part, and inside body there are title and actions parts</p>
            <div className="card-actions justify-center">
              <Link to="/details-event">
                <button className="btn bg-[#0D9C6D] text-white text-[20px] w-40 h-13">Details</button>
              </Link>
            </div>
          </div>
        </div>

        {/* Sports & Fitness */}
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img
              src="https://i.ibb.co/XBCSBL2/sports-background-international-sports-day-illustration-graphic-design-for-the-decoration-of-gift-ce.jpg"
              className="h-50"
              alt="Sports & Fitness" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-2xl">Sports & Fitness</h2>
            <p className="text-[18px]">A card component has a figure, a body part, and inside body there are title and actions parts</p>
            <div className="card-actions justify-center">
              <Link to="/details-event">
                <button className="btn bg-[#0D9C6D] text-white text-[20px] w-40 h-13">Details</button>
              </Link>
            </div>
          </div>
        </div>

        {/* Tech Meetups */}
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img
              src="https://i.ibb.co/JwTQWn7m/landing-page-template-webinar-business-startup-23-2148912601.avif"
              className="h-50"
              alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-2xl">Tech Meetups</h2>
            <p className="text-[18px]">A card component has a figure, a body part, and inside body there are title and actions parts</p>
            <div className="card-actions justify-center">
              <Link to="/details-event">
                <button className="btn bg-[#0D9C6D] text-white text-[20px] w-40 h-13">Details</button>
              </Link>
            </div>
          </div>
        </div>

        {/* Music & Concerts */}
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img
              src="https://i.ibb.co/DggGy8Kv/audience-1853662-1280.jpg"
              alt="Music & Concerts" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-2xl">Music & Concerts</h2>
            <p className="text-[18px]">A card component has a figure, a body part, and inside body there are title and actions parts</p>
            <div className="card-actions justify-center">
              <Link to="/details-event">
                <button className="btn bg-[#0D9C6D] text-white text-[20px] w-40 h-13">Details</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
