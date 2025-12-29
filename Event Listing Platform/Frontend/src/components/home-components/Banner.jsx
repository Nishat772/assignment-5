export const Banner = () => {
  return (
    <div className="mt-5">
      <div
        className="hero h-115"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/B2j8kmhD/360-F-425596866-DOalo9-Oii5of6-QPc-Vm6bz7c-Ujf2cpe-Tt.jpg)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="">
            <h1 className="mb-5 text-6xl font-bold">Hello there</h1>
            <p className="text-2xl">
              This is a Banner For an Event Listing Platform.
            </p>
            <p className="text-2xl">
              Scrol down to see our Upcoming Events.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
