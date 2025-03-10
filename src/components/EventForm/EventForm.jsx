import axios from "axios";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";


const EventForm = () => {

    const today = new Date().toISOString().split('T')[0];
    const navigate = useNavigate();

    const eventData = async (e) => {
        e.preventDefault();
        const form = e.target;
        const eventDataObj = {
            title: form.title.value,
            image: form.image.value,
            today: today,
            location: form.location.value,
            category: form.category.value,
            description: form.description.value
        }

        try {
            const res = await axios.post("http://localhost:3000/addEvent", eventDataObj);
        
            if (res.status === 200) {
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Your event has been added successfully!",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate("/events")
            }
        } catch (error) {
            Swal.fire({
                position: "top-center",
                icon: "error",
                title: "Failed to add event!",
                text: error.response?.data?.message || "Something went wrong.",
                showConfirmButton: true
            });
        }
        
    }

    return (
        <div className="bg-base-200">
            <div className="flex justify-center py-10">
                <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
                    <div className="card-body">
                    <h2 className="text-xl text-center font-semibold my-3 underline">Add Event</h2>
                        <form onSubmit={eventData} className="fieldset">
                            <label className="fieldset-label">Title</label>
                            <input name="title" type="text" className="input" placeholder="Title" />
                            <label className="fieldset-label">Image URL</label>
                            <input name="image" type="url" className="input" placeholder="Add Image URL" />
                            <label className="fieldset-label">Date</label>
                            <input name="today" type="date" className="input" readOnly defaultValue={today} />
                            <label className="fieldset-label">Location</label>
                            <input name="location" type="text" className="input" placeholder="Location" />
                            <label className="fieldset-label">Category</label>
                            <input name="category" type="text" className="input" placeholder="category" />
                            <label className="fieldset-label">Description</label>
                            <textarea name="description" className="input" placeholder="Enter event details..." rows="6"></textarea>
                            <button className="btn btn-neutral mt-4">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventForm;