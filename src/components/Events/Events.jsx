import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { Link } from 'react-router';

const Events = () => {
    const [events, setEvents] = React.useState([]);
    const [selectedCategory, setSelectedCategory] = React.useState("All");

    React.useEffect(() => {
        axios.get("http://localhost:3000/events")
            .then(res => setEvents(res.data))
            .catch(error => console.error("Error fetching events:", error));
    }, []);

    const filteredEvents = selectedCategory === "All"
        ? events
        : events.filter(item => item.category === selectedCategory);

    return (
        <div className='max-w-6xl mx-auto'>
            <h1 className="text-4xl font-bold text-center my-5">All Events Are Here</h1>

            {/* Category Buttons */}
            <div className='flex justify-center gap-5 my-10'>
                {["All", "Religious", "Social", "Charity"].map(category => (
                    <button
                        key={category}
                        className={`btn ${selectedCategory === category ? "bg-blue-500 text-white" : "bg-gray-300"}`}
                        onClick={() => setSelectedCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div>
                <Link to="/addEvent"><button className='btn bg-blue-500 text-white hover:bg-black transition duration-700 easeInOut'>Add New Event</button></Link>
            </div>

            {/* Events Grid */}
            <div className='my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-10 md:px-5 lg:px-0'>
                {filteredEvents.length > 0 ? (
                    filteredEvents.map(item => (
                        <Card key={item.id} sx={{ maxWidth: 345 }} className='p-2 group'>
                            <CardMedia
                                sx={{ height: 140 }}
                                image={item?.image}
                                title={item?.title}
                                className='transition duration-700 ease-in-out group-hover:scale-105 rounded-md'
                            />
                            <CardContent>
                                <div className='mb-2'>
                                    <span className="px-4 py-1 border-gray-300 border rounded-full">{item?.category}</span>
                                </div>
                                <div className="my-2 font-semibold">📅 {item?.date}</div>
                                <div className="my-2 font-semibold">{item?.location}</div>
                                <Typography gutterBottom variant="h6" component="div">
                                    {item?.title}
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    {item?.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    ))
                ) : (
                    <p className="text-center col-span-full text-gray-500">No events found.</p>
                )}
            </div>
        </div>
    );
};

export default Events;
