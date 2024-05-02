import { useState } from "react"
import { Link } from 'react-router-dom';
import Events from "./Events"

function Home() {
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
                            <a href="/events" className="block button py-2 px-4 text-center text-white font-medium duration-150 rounded-lg shadow-lg hover:shadow-none">
                                Explorar eventos
                            </a>
                            <a href="/login" className="flex items-center justify-center gap-x-2 py-2 px-4 text-gray-700 hover:text-gray-500 font-medium duration-150 active:bg-gray-100 border rounded-lg md:inline-flex">
                                Acceder
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                    <path fillRule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z" clipRule="evenodd" />
                                </svg>
                            </a>

                        </div>
                    </div>
                    <div className="flex-none mt-14 md:mt-0 md:max-w-xl">
                        <img
                            src="../src/assets/recogida-basura.jpg"
                            className=" md:rounded-tl-[108px]"
                            alt=""
                        />
                    </div>
                </div>
            </section>

            {/* Collab. section */}
            <section>
            <div className="md:px-8 py-10 bg-white">
                    <p className="text-center text-sm text-gray-700 font-semibold">Nuestros colaboradores principales</p>
                    <div className="flex justify-center items-center flex-wrap gap-x-12 gap-y-6 mt-6">
                    <svg width="150" height="50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <image xlinkHref="src/assets/fundacion-rosa-maria-vivar.png" width="190" height="33" />
                    </svg>       
                    <svg width="150" height="50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <image xlinkHref="src/assets/nou-refugi-baix-camp-logo.png" width="190" height="33" />
                    </svg>                  
                    <svg width="150" height="50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <image xlinkHref="src/assets/fundacion-rosa-maria-vivar.png" width="190" height="33" />
                    </svg>   
                    <svg width="150" height="50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <image xlinkHref="src/assets/nou-refugi-baix-camp-logo.png" width="190" height="33" />
                    </svg>  
                    </div>
                </div>
            </section>

            {/* Next events section */}
            <section>
                <Events />
            </section>
        </>
    )
}

export default Home