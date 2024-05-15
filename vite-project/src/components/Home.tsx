import Events from "./EventsCards"
import Map from "./Map"
import { isLogged } from "../lib/authUtils";

function Home() {
    const numberOfEventsToShow = 3; // Define the number of events to show

    return (
        <>
            {/* Banner top */}
            <section className="pt-28">
                <div className="max-w-screen-xl mx-auto text-gray-600 gap-x-12 items-center justify-between overflow-hidden md:flex md:px-8">
                    <div className="flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl">
                        <h1 className="text-sm green-text font-medium">
                            Más de 100 eventos realizados con éxito
                        </h1>
                        <h2 className="text-4xl text-gray-800 font-extrabold md:text-5xl">
                        ¡Únete a nosotros para marcar la diferencia!
                        </h2>
                        <p>
                        En nuestra plataforma, conectamos a personas con corazones solidarios para participar en eventos que impactan positivamente en nuestra comunidad. Desde recogidas de basura hasta donaciones de alimentos y compañía a personas mayores, cada acción cuenta. Juntos, podemos crear un mundo más solidario y compasivo. ¡Apúntate ahora y sé parte del cambio!
                        </p>
                        <div className="items-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
                        {isLogged() ? (
                            <a href="/events" className="block button py-2 px-4 text-center text-white font-medium duration-150 rounded-lg shadow-lg hover:shadow-none">
                                Explorar eventos
                            </a>
                            
) : (
                            <>
                                <a href="/events" className="block button py-2 px-4 text-center text-white font-medium duration-150 rounded-lg shadow-lg hover:shadow-none">
                                    Explorar eventos
                                </a>
                                <a href="/login" className="flex items-center justify-center gap-x-2 py-2 px-4 text-gray-700 hover:text-gray-500 font-medium duration-150 active:bg-gray-100 border rounded-lg md:inline-flex">
                                    Acceder
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                    <path fillRule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z" clipRule="evenodd" />
                                </svg>
                                </a>
                            </>
)}
                        </div>
                    </div>
                    <div className="flex-none mt-14 md:mt-0 md:max-w-xl">
                        <img
                            src="/assets/recogida-basura.jpg"
                            className=" md:rounded-tl-[108px]"
                            alt=""
                        />
                    </div>
                </div>
            </section>

            {/* Collab. section */}
            <section>
            <div className="md:px-8 py-10 bg-white">
                    <p className="font-semibold text-sm text-gray-600 text-center">NUESTROS PRINCIPALES COLABORADORES</p>      <div className="flex justify-center items-center flex-wrap gap-x-12 gap-y-6 mt-6">
                    <svg width="150" height="50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <image xlinkHref="/assets/fundacion-rosa-maria-vivar.png" width="190" height="50" />
                    </svg>       
                
                    <svg width="150" height="50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <image xlinkHref="/assets/xplora-logo.png" width="190" height="50" />
                    </svg>                  
                    <svg width="150" height="50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <image xlinkHref="/assets/asnet-logo-color.jpeg" width="190" height="50" />
                    </svg>   
                    <svg width="150" height="50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <image xlinkHref="/assets/nou-refugi-baix-camp-logo.png" width="190" height="50" />
                    </svg>  
                
                    </div>

                </div>
            </section> 


            {/* Next events section */}
            <section>
                <h3 className="text-3xl font-semibold sm:text-4xl mb-7 mt-7">
                    Próximos eventos
                </h3>
                {/* Render the Events component and pass the numberOfEventsToShow as prop */}
                <Events numberOfEvents={numberOfEventsToShow} />
            </section>

            {/* Articles section */}
            <section className="py-14">
                <div className="max-w-screen-xl mx-auto md:px-8">
                    <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
                        <div className="flex-1 sm:hidden lg:block">
                            <img src="/assets/beachcleanups.jpg" className="md:max-w-lg sm:rounded-lg" alt="" />
                        </div>
                        <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
                            <h3 className="font-semibold">
                                Artículos más destacados
                            </h3>
                            <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                                La Importancia de la Limpieza de Playas y Bosques
                            </p>
                            <p className="mt-3 text-gray-600">
                            Mantener la limpieza de nuestros entornos naturales, como las playas y los bosques, es crucial para preservar la biodiversidad y proteger los ecosistemas. 
                            </p>
                            <a href="Article" className="inline-flex gap-x-1 items-center green-text hover:green-te duration-150 font-medium">
                                Leer artículo
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Newsletter section */}
            <section className="py-28 relative">
                <div className="relative z-10 max-w-screen-xl mx-auto px-4 justify-between items-center gap-12 md:px-8 md:flex">
                    <div className="flex-1 max-w-lg">
                        <h3 className="text-3xl font-bold text-white">
                        Suscríbete a nuestro newsletter
                        </h3>
                    </div>
                    <div className="flex-1 mt-6 md:mt-0">
                        <form onSubmit={(e) => e.preventDefault()} className="flex items-center gap-x-3 md:justify-end">
                            <div className="relative">
                                <svg className="w-6 h-6 text-gray-400 absolute left-3 inset-y-0 my-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                </svg>
                                <input
                                    type="email"
                                    required
                                    placeholder="Enter your email"
                                    className="w-full pl-12 pr-3 py-2 text-gray-500 bg-white outline-none border shadow-sm rounded-lg"
                                />
                            </div>
                            <button className="block w-auto py-3 px-4 font-medium text-sm text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 active:shadow-none rounded-lg shadow">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
                <div className="absolute inset-0 w-full h-full" style={{ background: "linear-gradient(137.92deg, rgba(192, 132, 252, 0) 20.43%, rgba(232, 121, 249, 0.26) 49.66%, rgba(204, 171, 238, 0) 92.38%)" }}></div>
            </section>

            {/* Map */}
            <Map/>
        </>
    )
}

export default Home