import React, { useEffect } from 'react';

function Events({ numberOfEvents }: { numberOfEvents: number }) { 
    const posts = [
        {
            title: "Plantar árboles",
            desc: "Jornada de Reforestación en el Parque Nacional de Teide, Tenerife, donde voluntarios se unen para plantar árboles autóctonos y restaurar áreas degradadas, contribuyendo a la conservación de la biodiversidad y la protección del medio ambiente",
            img: "../src/assets/planting-trees.jpg",
            authorLogo: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
            authorName: "Mariano Rajoy",
            date: "May 3 2024",
            href: "javascript:void(0)"
        },
        {
            title: "Actividades con ancianos",
            desc: "Visita al Hogar de Ancianos 'La Esperanza' en Madrid para compartir una tarde de música en vivo y juegos de mesa con los residentes, llevando alegría y compañía a nuestros mayores",
            img: "../src/assets/old-people-playing.jpg",
            authorLogo: "https://api.uifaces.co/our-content/donated/FJkauyEa.jpg",
            authorName: "La Rosalia",
            date: "May 4 2024",
            href: "javascript:void(0)"
        },
        {
            title: "Recogida de alimentos",
            desc: "Recogida de Alimentos en el Mercado Central de Valencia para apoyar a los comedores sociales locales y familias necesitadas durante la temporada navideña",
            img: "../src/assets/food-donations.jpg",
            authorLogo: "https://randomuser.me/api/portraits/men/46.jpg",
            authorName: "Lluís Gibert",
            date: "May 4 2022",
            href: "javascript:void(0)"
        },
        {
            title: "Playa Limpia",
            desc: "Limpieza de la playa de San Sebastián para preservar la belleza natural y proteger la vida marina. ¡Únete y haz la diferencia!",
            img: "../src/assets/beach-cleanup.jpg",
            authorLogo: "https://randomuser.me/api/portraits/women/40.jpg",
            authorName: "Ana García",
            date: "May 5 2024",
            href: "javascript:void(0)"
        },
        {
            title: "Campaña de Donación de Sangre",
            desc: "Campaña de donación de sangre en el Hospital General de Valencia. ¡Tu donación puede salvar vidas!",
            img: "../src/assets/blood-donation.jpg",
            authorLogo: "https://randomuser.me/api/portraits/men/40.jpg",
            authorName: "Juan Pérez",
            date: "May 6 2024",
            href: "javascript:void(0)"
        }
    ];

    // useEffect to limit the description length
    useEffect(() => {
        const descriptionElements = document.querySelectorAll('#description');
        descriptionElements.forEach(element => {
            const text = element?.textContent; // Use optional chaining here
            const maxLength = 130;
            if (text && text.length > maxLength) {
                element.textContent = text.slice(0, maxLength) + '...';
            }
        });
    }, []);

    // Filter events based on the number of events prop or show all if prop not provided
    const filteredEvents = numberOfEvents ? posts.slice(0, numberOfEvents) : posts;

    // Render the events
    return (
        <section className="mt-12 mx-auto px-4 max-w-screen-xl md:px-8">
            <div className="text-center">
                <h3 className="text-3xl font-semibold sm:text-4xl mb-7">
                    Próximos eventos
                </h3>
                <p className="mt-3 text-gray-500">
                    No te pierdas nuestras próximas actividades solidarias
                </p>
            </div>
            <div className="mt-12 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {
                    // Render the events based on the number of events specified
                    filteredEvents.map((items, key) => (
                        <article className="transform transition duration-300 hover:scale-105 max-w-md mx-auto mt-4 border rounded-md" key={key}>
                            <a href={items.href}>
                                <img src={items.img} loading="lazy" alt={items.title} className="w-full h-48 rounded-t-md" />
                                <div className="flex items-center mt-2 pt-3 ml-4 mr-2">
                                    <div className="flex-none w-10 h-10 rounded-full">
                                        <img src={items.authorLogo} className="w-full h-full rounded-full" alt={items.authorName} />
                                    </div>
                                    <div className="ml-3">
                                        <span className="block text-gray-900">{items.authorName}</span>
                                        <span className="block text-gray-400 text-sm">{items.date}</span>
                                    </div>
                                </div>
                                <div className="pt-3 ml-4 mr-2 mb-3">
                                    <h3 className="text-xl text-gray-900">
                                        {items.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm mt-1 font-normal" id='description'>{items.desc}</p>
                                </div>
                            </a>
                        </article>
                    ))
                }
            </div>
        </section>
    )
}

export default Events;
