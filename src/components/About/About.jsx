import { FaSearch, FaSmileBeam } from "react-icons/fa";
import { FaRectangleList } from "react-icons/fa6";
import FAQ from "../FAQ/FAQ";

const About = () => {
    return (
        <div>
            <div className="my-5 px-5 lg:px-0">
                <h2 className="text-3xl lg:text-4xl font-semibold text-center">Discover What Sets Communion Events Apart
                </h2>
                <h2 className="text-3xl lg:text-4xl font-semibold text-center mt-2 text-[#1E65F2]">
                    ✦ Who We Are</h2>
            </div>

            <section className="py-10 bg-base-200 px-5 lg:px-0">
                <div className="md:flex justify-between gap-2 lg:max-w-6xl mx-auto">
                    {/* image */}
                    <div className="flex-1">
                        <img src="https://communionhub.org/static/media/event-3.518ca15d6caff0f2e0c9.avif" alt="" className="rounded-md transition duration-700 easeInOut hover:scale-105 mb-5" />
                    </div>

                    {/* text */}
                    <div className="flex-1">
                        <div className="lg:w-4/6">
                            <h2 className="text-3xl font-bold">Where Creativity Meets
                                Community Impact</h2>
                        </div>
                        <div className="mt-5 lg:mt-10 space-y-3">
                            <div className="flex gap-5 items-center">
                                <button className="btn"><FaSearch className="text-xl lg:text-2xl" /></button>
                                <div>
                                    <h3 className="text-bold text-xl lg:text-2xl">Expert-Led Sessions</h3>
                                    <p>Learn from professionals who are leaders in their fields.</p>
                                </div>
                            </div>
                            <div className="flex gap-5 items-center">
                                <button className="btn"><FaRectangleList className="text-xl lg:text-2xl" /></button>
                                <div>
                                    <h3 className="text-bold text-xl lg:text-2xl">Interactive Learning</h3>
                                    <p>Engage in hands-on activities that enhance your skills.</p>
                                </div>
                            </div>
                            <div className="flex gap-5 items-center">
                                <button className="btn"><FaSmileBeam className="text-xl lg:text-2xl" /></button>
                                <div>
                                    <h3 className="text-bold text-xl lg:text-2xl">
                                        Networking Opportunities</h3>
                                    <p>Build connections that last beyond the event.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <FAQ />
        </div>
    );
};

export default About;