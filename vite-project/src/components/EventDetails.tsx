const EventDetails = ({ event }: { event: { title: string; desc: string } }) => {
    return (
        <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-14">           
            <article className="max-w-xl mx-auto">
                <h3 id="eventt-title" className="text-2xl font-semibold sm:text-4xl mb-6 text-green leading-10">
                {event.title}
                </h3>
                <p id="event-description" className="text-gray-600 mt-3">
                {event.desc}
                </p>
            </article>
            <div className="mt-12">  
            </div>
        </div>
    );
}

export default EventDetails;