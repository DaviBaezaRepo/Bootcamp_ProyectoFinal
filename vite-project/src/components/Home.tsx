import { useState } from "react"

function Home() {
    return (
        <>
            <section className="py-28">
                <div className="max-w-screen-xl mx-auto text-gray-600 gap-x-12 items-center justify-between overflow-hidden md:flex md:px-8">
                    <div className="flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl">
                        <h1 className="text-sm green-text font-medium">
                            Más de 100 eventos con éxito
                        </h1>
                        <h2 className="text-4xl text-gray-800 font-extrabold md:text-5xl">
                        ¡Únete a nosotros para marcar la diferencia!
                        </h2>
                        <p>
                        En nuestra plataforma, conectamos a personas con corazones solidarios para participar en eventos que impactan positivamente en nuestra comunidad. Desde recogidas de basura hasta donaciones de alimentos y compañía a personas mayores, cada acción cuenta. Juntos, podemos crear un mundo más solidario y compasivo. ¡Apúntate ahora y sé parte del cambio!
                        </p>
                        <div className="items-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
                            <a href="./Events" className="block button py-2 px-4 text-center text-white font-medium duration-150 rounded-lg shadow-lg hover:shadow-none">
                                Explorar eventos
                            </a>
                            <a href="./Signin" className="flex items-center justify-center gap-x-2 py-2 px-4 text-gray-700 hover:text-gray-500 font-medium duration-150 active:bg-gray-100 border rounded-lg md:inline-flex">
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
                <div className="mt-14 px-4 md:px-8">
                    <p className="text-center text-sm text-gray-700 font-semibold">Nuestros colaboradores principales</p>
                    <div className="flex justify-center items-center flex-wrap gap-x-12 gap-y-6 mt-6">
                        <svg xmlns="../assets/fundacion-rosa-maria-vivar.png" width="190" height="33" fill="none"><g fill="#4B5563" clip-path="url(#a)"><path d="M16.416 32.17v-6.175c6.554 0 11.596-6.49 9.106-13.36-.945-2.552-2.961-4.6-5.514-5.514-6.869-2.49-13.36 2.552-13.36 9.106H.473c0-10.43 10.083-18.559 21.016-15.156 4.79 1.481 8.57 5.294 10.052 10.052 3.403 10.965-4.695 21.048-15.125 21.048Z" /><path fill-rule="evenodd" d="M16.416 25.995h-6.144v-6.144h6.144v6.144ZM10.272 30.721H5.546v-4.726h4.726v4.726ZM5.546 25.995h-3.97v-3.939h3.97v3.939Z" clip-rule="evenodd" /><path d="M57.19 9.516c-1.828-1.26-4.097-1.922-6.744-1.922H44.68V25.9h5.766c2.647 0 4.916-.661 6.743-2.016 1.008-.693 1.796-1.702 2.332-2.93.535-1.23.819-2.679.819-4.317 0-1.607-.284-3.057-.82-4.286-.535-1.197-1.323-2.174-2.33-2.835Zm-9.139 1.197h1.828c2.017 0 3.687.41 4.947 1.166 1.386.85 2.111 2.458 2.111 4.758 0 2.394-.725 4.064-2.111 4.978-1.197.788-2.867 1.198-4.916 1.198h-1.827l-.032-12.1ZM64.373 7.373c-.567 0-1.04.19-1.418.567-.378.378-.599.851-.599 1.387 0 .567.19 1.04.6 1.418.377.378.85.598 1.417.598.567 0 1.04-.189 1.418-.598.378-.378.599-.883.599-1.418 0-.567-.19-1.04-.6-1.387a1.975 1.975 0 0 0-1.417-.567ZM65.949 13.013h-3.246v12.919h3.246V13.013ZM77.764 14.085c-.976-.883-2.08-1.387-3.245-1.387-1.796 0-3.277.63-4.443 1.828-1.166 1.197-1.733 2.773-1.733 4.631 0 1.828.567 3.372 1.733 4.632 1.166 1.198 2.647 1.828 4.443 1.828 1.26 0 2.332-.347 3.214-1.04v.315c0 1.072-.284 1.89-.85 2.49-.568.566-1.356.85-2.332.85-1.513 0-2.427-.599-3.593-2.142l-2.205 2.11.063.095c.472.662 1.197 1.323 2.174 1.954.977.63 2.174.945 3.624.945 1.922 0 3.497-.599 4.631-1.764 1.166-1.166 1.733-2.742 1.733-4.695V13.013h-3.182l-.032 1.072Zm-.85 7.625c-.567.63-1.292.945-2.237.945-.946 0-1.67-.315-2.206-.945-.567-.63-.85-1.481-.85-2.521 0-1.04.283-1.922.85-2.552.567-.63 1.292-.977 2.206-.977.945 0 1.67.315 2.237.977.567.63.85 1.512.85 2.552s-.315 1.89-.85 2.52ZM86.965 13.013H83.72v12.919h3.245V13.013ZM85.39 7.373c-.567 0-1.04.19-1.418.567-.378.378-.599.851-.599 1.387 0 .567.19 1.04.599 1.418.378.378.85.598 1.418.598.567 0 1.04-.189 1.418-.598.378-.378.598-.883.598-1.418 0-.567-.189-1.04-.599-1.387a1.975 1.975 0 0 0-1.417-.567ZM94.086 9.547h-3.182v3.498h-1.86v2.962h1.86v5.356c0 1.67.346 2.867 1.008 3.56.662.694 1.828 1.04 3.497 1.04.536 0 1.072-.031 1.576-.063h.157V22.94l-1.102.063c-.788 0-1.292-.126-1.544-.41s-.378-.85-.378-1.701v-4.916h3.025v-2.962h-3.025V9.547h-.032ZM115.576 7.594h-3.246V25.9h3.246V7.594ZM148.376 21.3c-.567.662-1.166 1.229-1.638 1.512-.441.284-1.008.442-1.67.442-.945 0-1.733-.347-2.363-1.072-.631-.724-.946-1.638-.946-2.74 0-1.104.315-2.018.914-2.71.63-.725 1.387-1.072 2.332-1.072 1.04 0 2.142.662 3.088 1.764l2.142-2.048c-1.386-1.827-3.182-2.678-5.325-2.678-1.796 0-3.34.662-4.6 1.922-1.26 1.26-1.891 2.899-1.891 4.821 0 1.922.631 3.53 1.891 4.821 1.26 1.292 2.804 1.922 4.6 1.922 2.363 0 4.254-1.008 5.514-2.867l-2.048-2.017ZM161.705 14.81a5.263 5.263 0 0 0-1.859-1.545c-.788-.378-1.67-.567-2.679-.567-1.827 0-3.308.662-4.411 1.985-1.071 1.324-1.638 2.93-1.638 4.853 0 1.953.598 3.56 1.796 4.82 1.166 1.23 2.773 1.86 4.695 1.86 2.174 0 4.001-.883 5.325-2.647l.063-.095-2.111-2.048c-.19.252-.473.504-.725.756-.315.316-.63.536-.945.694-.473.252-1.04.346-1.639.346-.914 0-1.638-.252-2.206-.788-.535-.472-.85-1.134-.913-1.953h8.602l.031-1.198a8.48 8.48 0 0 0-.346-2.394 7.177 7.177 0 0 0-1.04-2.08Zm-7.09 3.056c.158-.63.441-1.135.851-1.544.441-.441 1.008-.662 1.701-.662.788 0 1.387.22 1.796.662.379.41.599.913.662 1.512h-5.01v.032ZM174.183 13.99c-.977-.85-2.332-1.26-4.034-1.26a6.85 6.85 0 0 0-2.993.693c-.851.44-1.67 1.134-2.206 2.08l.032.03 2.079 1.986c.851-1.355 1.796-1.827 3.057-1.827.693 0 1.229.188 1.67.535.441.347.63.82.63 1.386v.63a8.067 8.067 0 0 0-2.395-.377c-1.607 0-2.93.378-3.907 1.134-.977.756-1.481 1.859-1.481 3.214 0 1.197.41 2.206 1.261 2.93.85.693 1.89 1.072 3.119 1.072 1.229 0 2.395-.505 3.435-1.355v1.07h3.182v-8.318c.063-1.543-.441-2.772-1.449-3.623Zm-5.767 6.995c.378-.252.883-.378 1.544-.378.788 0 1.607.157 2.458.473v1.26c-.693.662-1.638.977-2.804.977-.567 0-1.009-.126-1.292-.378-.284-.253-.441-.536-.441-.946 0-.41.189-.756.535-1.008ZM188.173 14.242c-.914-1.008-2.175-1.512-3.782-1.512-1.291 0-2.331.378-3.119 1.102v-.787h-3.182v12.918h3.245v-7.152c0-.977.221-1.765.693-2.3.473-.567 1.072-.82 1.922-.82.725 0 1.292.252 1.702.725.409.504.63 1.166.63 2.017V25.9h3.245v-7.467c0-1.765-.441-3.183-1.354-4.19ZM108.265 13.99c-.976-.85-2.331-1.26-4.033-1.26a6.85 6.85 0 0 0-2.993.693c-.851.44-1.67 1.134-2.206 2.08l.032.03 2.079 1.986c.851-1.355 1.796-1.827 3.057-1.827.693 0 1.228.188 1.67.535.441.347.63.82.63 1.386v.63a8.067 8.067 0 0 0-2.395-.377c-1.607 0-2.93.378-3.907 1.134-.977.756-1.481 1.859-1.481 3.214 0 1.197.41 2.206 1.26 2.93.851.693 1.891 1.072 3.12 1.072s2.394-.505 3.434-1.355v1.07h3.183v-8.318c.031-1.543-.473-2.772-1.45-3.623Zm-5.766 6.995c.378-.252.882-.378 1.544-.378.788 0 1.607.157 2.458.473v1.26c-.693.662-1.639.977-2.805.977-.567 0-1.008-.126-1.291-.378-.284-.253-.442-.536-.442-.946 0-.41.158-.756.536-1.008ZM127.36 26.184c-5.199 0-9.453-4.222-9.453-9.453a9.44 9.44 0 0 1 9.453-9.452c5.199 0 9.453 4.222 9.453 9.452 0 5.23-4.254 9.453-9.453 9.453Zm0-15.534a6.118 6.118 0 0 0-6.113 6.113 6.118 6.118 0 0 0 6.113 6.113 6.12 6.12 0 0 0 6.113-6.113 6.12 6.12 0 0 0-6.113-6.113Z" /></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h190v32.454H0z" /></clipPath></defs></svg>
                        <svg xmlns="../src/assets/nou-refugi-baix-camp-logo.png" width="120" height="28" fill="none"><g clip-path="url(#a)"><path fill="#4B5563" d="M60.128 7.467c-4.664 0-8.027 3.042-8.027 7.605 0 4.563 3.781 7.605 8.45 7.605 2.818 0 5.302-1.116 6.84-2.996l-3.232-1.867c-.854.934-2.15 1.479-3.608 1.479-2.024 0-3.743-1.056-4.381-2.746h11.838c.093-.474.148-.964.148-1.48 0-4.558-3.359-7.6-8.028-7.6Zm-3.992 6.126c.528-1.685 1.973-2.746 3.992-2.746 2.024 0 3.469 1.06 3.993 2.746h-7.985ZM55.18 2.82 43.474 23.1 31.763 2.82h4.39l7.317 12.675L50.787 2.82h4.394ZM15.611.708l15.61 27.039H0L15.61.707ZM85.14 15.072c0 2.535 1.656 4.225 4.225 4.225 1.74 0 3.046-.79 3.717-2.079l3.245 1.872c-1.343 2.24-3.861 3.587-6.962 3.587-4.669 0-8.028-3.042-8.028-7.605 0-4.563 3.363-7.605 8.028-7.605 3.1 0 5.615 1.348 6.962 3.587l-3.245 1.872c-.671-1.289-1.977-2.079-3.717-2.079-2.565 0-4.225 1.69-4.225 4.225ZM119.986 2.82v19.434h-3.802V2.82h3.802Zm-14.364 4.647c-4.664 0-8.027 3.042-8.027 7.605 0 4.563 3.785 7.605 8.449 7.605 2.818 0 5.303-1.116 6.84-2.996l-3.232-1.867c-.853.934-2.15 1.479-3.608 1.479-2.023 0-3.743-1.056-4.381-2.746h11.838c.093-.474.148-.964.148-1.48 0-4.558-3.359-7.6-8.027-7.6Zm-3.993 6.126c.529-1.685 1.969-2.746 3.993-2.746 2.023 0 3.468 1.06 3.992 2.746h-7.985ZM80.069 7.89v4.094a4.816 4.816 0 0 0-1.351-.207c-2.455 0-4.225 1.69-4.225 4.225v6.252h-3.802V7.89h3.802v3.887c0-2.147 2.497-3.887 5.577-3.887Z" /></g><defs><clipPath id="a"><path fill="#fff" d="M0 .708h120v27.039H0z" /></clipPath></defs></svg>
                    </div>
                </div>
            </section>
            <section>
                <h3 className="text-3xl font-semibold sm:text-4xl mb-10">
                    Próximos eventos
                </h3>
                <div className="inline-flex">
                    <div className="max-w-sm rounded overflow-hidden shadow-lg mx-10 mb-10">
                        <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"></img>
                        <div className="px-6 py-4">
                            <div className="font-bold green-text text-xl mb-2">Plantar árboles</div>
                            <p className="text-gray-700 text-base">
                                Jornada de Reforestación en el Parque Nacional de Teide, Tenerife, donde voluntarios se unen para plantar árboles autóctonos y restaurar áreas degradadas, contribuyendo a la conservación de la biodiversidad y la protección del medio ambiente
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#naturaleza</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#bosque</span>
                        </div>
                    </div>
                    <div className="max-w-sm rounded overflow-hidden shadow-lg mx-10 mb-10">
                        <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"></img>
                        <div className="px-6 py-4">
                            <div className="font-bold green-text text-xl mb-2">Actividades con ancianos</div>
                            <p className="text-gray-700 text-base">
                                Visita al Hogar de Ancianos 'La Esperanza' en Madrid para compartir una tarde de música en vivo y juegos de mesa con los residentes, llevando alegría y compañía a nuestros mayores
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#terderaEdad</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#basura</span>
                        </div>
                    </div>
                    <div className="max-w-sm rounded overflow-hidden shadow-lg mx-10 mb-10">
                        <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"></img>
                        <div className="px-6 py-4">
                            <div className="font-bold green-text text-xl mb-2">Recogida de alimentos</div>
                            <p className="text-gray-700 text-base">
                                Recogida de Alimentos en el Mercado Central de Valencia para apoyar a los comedores sociales locales y familias necesitadas durante la temporada navideña
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#alimentos</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#donar</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home