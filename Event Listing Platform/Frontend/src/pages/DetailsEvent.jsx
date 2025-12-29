export const DetailsEvent = () => {
    return (
        <div>
            {/* Details 1 */}
            <div className="hero bg-base-200 mt-10">
                <div className="hero-content flex-col lg:flex-row gap-10">
                    <img
                        src="https://i.ibb.co/vxmPrKPR/2020-presentations-banner-1024x403.webp"
                        className="max-w-150 rounded-lg shadow-2xl"
                    />
                    <div>
                        <h3 className="text-5xl font-bold text-[#2E85BF]">Workshops & Seminars</h3>
                        <div className="py-3">
                            <p className="text-[20px] text-justify">
                                This is an upcoming event of ours. This workshop about Web Development using MERN. You can join our wrokshop for free!. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo ullam sed sapiente labore architecto molestias voluptate et quaerat hic, reprehenderit dolore laborum dolorem quis ratione ducimus esse at, repudiandae earum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis, omnis nemo! Id mollitia quaerat minima, consequatur, vel repellendus esse earum, sit enim inventore ratione exercitationem quisquam maiores odio repudiandae harum.
                            </p>
                        </div>
                        <div className="flex justify-end items-center mt-3">
                            <button className="btn bg-[#2E85BF] text-white text-[20px] w-55 h-13">Register Here</button>
                        </div>
                    </div>
                </div>
            </div>


            {/* Details 2 */}
            <div className="hero bg-base-200">
                <div className="hero-content flex-col lg:flex-row gap-10  mt-15">
                    <div>
                        <h3 className="text-5xl font-bold text-[#2E85BF]">Sports & Fitness</h3>
                        <div className="py-3">
                            <p className="text-[20px] text-justify">
                                This is an upcoming event of ours. This is an Open Event for all Sports & Fitness loving people. You can join our Sports & Fitness event for free!. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo ullam sed sapiente labore architecto molestias voluptate et quaerat hic, reprehenderit dolore laborum dolorem quis ratione ducimus esse at, repudiandae earum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis, omnis nemo! Id mollitia quaerat minima, consequatur, vel repellendus esse earum, sit enim inventore ratione exercitationem quisquam maiores odio repudiandae harum.
                            </p>
                        </div>
                        <div className="flex justify-start items-center mt-3">
                            <button className="btn bg-[#2E85BF] text-white text-[20px] w-55 h-13">Register Here</button>
                        </div>
                    </div>
                    <img
                        src="https://i.ibb.co/XBCSBL2/sports-background-international-sports-day-illustration-graphic-design-for-the-decoration-of-gift-ce.jpg"
                        className="max-w-150 rounded-lg shadow-2xl"
                    />
                </div>
            </div>
        </div>
    )
}
