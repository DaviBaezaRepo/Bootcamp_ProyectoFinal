import Events from "./EventsCards"
import Map from "./Map"

function EventsPage() {
    const numberOfEventsToShow = 100; // Define the number of events to show

    return (
        <>
            <section className="mt-12 mx-auto px-4 max-w-screen-xl md:px-8 mb-14">
                <div className="text-center">
                    <h3 className="text-3xl font-semibold sm:text-4xl mb-7">
                        Próximos eventos
                    </h3>
                    <p className="mt-3 text-gray-500">
                    No te pierdas nuestras próximas actividades solidarias
                    </p>
                </div>
                <Events numberOfEvents={numberOfEventsToShow} />
            </section>
            <Map/>
        </>
    )
}

export default EventsPage