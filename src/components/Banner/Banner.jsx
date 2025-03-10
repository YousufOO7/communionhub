import { motion } from "motion/react"
import { Link } from "react-router";
motion
const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-96 ">
            <div className="hero-content flex-col max-w-6xl mx-auto lg:flex-row-reverse">
                <div className='flex-1'>
                    <motion.img
                        animate={{ y: [0, 40, 0] }}
                        transition={{ duration: 5, repeat: Infinity }}
                        src="https://communionhub.org/static/media/event-1.e37c47c6656e8a5c0043.avif"
                        className="max-w-sm w-64 rounded-t-[40px] rounded-br-[40px] border-blue-500 border-l-8 border-b-8 shadow-2xl"
                    />
                    <motion.img
                        animate={{ x: [100, 140, 100] }}
                        transition={{ duration: 5, delay: 3, repeat: Infinity }}
                        src="https://communionhub.org/static/media/event-2.0cb0185956a6cc4d90f8.webp"
                        className="max-w-sm w-64 rounded-t-[40px] rounded-br-[40px] border-blue-500 border-l-8 border-b-8 shadow-2xl"
                    />
                </div>
                <div className='flex-1'>
                    <h1 className="text-5xl font-bold">"Connecting people</h1>
                    <motion.h1
                        animate={{ x: [0, 50, 0] }}
                        transition={{ duration: 5, delay: 1, ease: "easeInOut", repeat: Infinity }}
                        className="text-5xl font-bold mb-2"
                    >
                        Across Faiths <motion.span
                            animate={{ color: ['#f3411b', '#f3731b', '#f3981b'] }}
                            transition={{ duration: 1, repeat: Infinity }}
                        ></motion.span>
                        & Interests"
                    </motion.h1>
                    <p className="py-6">
                        The Communion App is a platform designed to connect people of all faiths through meaningful events and community support. Whether you’re looking for religious gatherings, spiritual discussions, or charitable activities, the app helps you discover and participate in events that align with your beliefs. With an intuitive interface and seamless navigation, Communion App fosters inclusivity, connection, and engagement within diverse faith-based communities.
                    </p>
                        <button className="px-8 py-2  bg-black text-white rounded-full hover:bg-[#1E65F2] transition duration-700 easeInOut"><Link to="/events"> Explore Events </Link></button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
