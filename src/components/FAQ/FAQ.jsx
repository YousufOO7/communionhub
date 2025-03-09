

const FAQ = () => {
    return (
        <div className="px-5 my-10">
            <section className="lg:flex justify-between gap-5">
                <div className="flex-1 mb-5">
                    <div className="lg:w-4/6">
                        <h2 className="text-5xl lg:text-7xl text-bold mb-5">Frequently Asked
                            Questions</h2>
                    </div>
                    <p className="w-5/6 py-3">Our dedicated team believes in the power of unity and giving back. Every event we organize is crafted to inspire, support, and strengthen the ties within our communion.</p>

                    <div>
                        <button className="px-10 rounded-full transition duration-700 easeInOut py-2 bg-[#1E65F2] text-white hover:bg-black">Get Start Now</button>
                    </div>
                </div>

                <div className="flex-1 overflow-x-hidden space-y-3">
                    <div className="collapse collapse-plus bg-base-100 border border-base-300">
                        <input type="radio" name="my-accordion-3" defaultChecked />
                        <div className="collapse-title font-semibold">What types of events does Communion organize?</div>
                        <div className="collapse-content text-sm">We organize a diverse range of events including community meetups, workshops, charity drives, support groups, and educational sessions.</div>
                    </div>
                    <div className="collapse collapse-plus bg-base-100 border border-base-300">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title font-semibold">How do you ensure the quality of your events?</div>
                        <div className="collapse-content text-sm">Our events are carefully curated with expert speakers, interactive sessions, and detailed planning to ensure maximum value for participants.</div>
                    </div>
                    <div className="collapse collapse-plus bg-base-100 border border-base-300">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title font-semibold">Are events virtual or in-person?</div>
                        <div className="collapse-content text-sm">We offer both virtual and in-person events to accommodate different preferences and ensure maximum accessibility.</div>
                    </div>
                    <div className="collapse collapse-plus bg-base-100 border border-base-300">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title font-semibold">How can I register for an event?</div>
                        <div className="collapse-content text-sm">You can register through our website by clicking the 'Get Tickets' button on any event page. The process is simple and straightforward.</div>
                    </div>
                    <div className="collapse collapse-plus bg-base-100 border border-base-300">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title font-semibold">Are group discounts available?</div>
                        <div className="collapse-content text-sm">Yes, we offer special rates for group registrations. Contact our team for more information about group pricing.</div>
                    </div>
                    <div className="collapse collapse-plus bg-base-100 border border-base-300">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title font-semibold">What is your cancellation and refund policy?</div>
                        <div className="collapse-content text-sm">We have a flexible cancellation policy with full refunds available up to 48 hours before the event.</div>
                    </div>
                    <div className="collapse collapse-plus bg-base-100 border border-base-300">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title font-semibold">Can I volunteer or partner with Communion for events?</div>
                        <div className="collapse-content text-sm">Absolutely! We welcome volunteers and partners. Contact us to discuss collaboration opportunities.</div>
                    </div>
                    <div className="collapse collapse-plus bg-base-100 border border-base-300">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title font-semibold">How do I stay updated about future events?</div>
                        <div className="collapse-content text-sm">Subscribe to our newsletter and follow our social media channels for the latest updates about upcoming events.</div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FAQ;