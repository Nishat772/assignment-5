import { Banner } from "../components/home-components/Banner"
import { Categories } from "../components/home-components/Categories"
import { UpcommingEvents } from "../components/home-components/UpcommingEvents"

export const HomePage = () => {
  return (
    <div>
      <Banner />
      <UpcommingEvents />
      <Categories />
    </div>
  )
}
