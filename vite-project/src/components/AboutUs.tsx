export default () => {

    const team = [
        {
            avatar: "../src/assets/team-member3.jpeg",
            name: "Thirza Visser",
            title: "Back-end Developer",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry.",
            linkedin: "javascript:void(0)",
            twitter: "javascript:void(0)",
        },
        {
            avatar: "../src/assets/team-member1.jpeg",
            name: "Sara Didouh",
            title: "Front-end Developer",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry.",
            linkedin: "javascript:void(0)",
            twitter: "javascript:void(0)",
        },
        {
            avatar: "../src/assets/team-member2.jpeg",
            name: "David Baeza",
            title: "Full-stack Developer & DDBB Expert",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry.",
            linkedin: "javascript:void(0)",
            twitter: "javascript:void(0)",
        },

    ]

    return (
        <section className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 text-center md:px-8">
                {/*<div className="max-w-xl mx-auto mb-14">
                    <h3 className="text-3xl font-semibold sm:text-4xl mb-7">
                        Acerca de BetterWorld
                    </h3>
                    <p className="text-gray-600 mt-3">
                    Bienvenido a <span className="green-text">BetterWorld</span>, una plataforma dedicada a fomentar la solidaridad y el bienestar comunitario. En BetterWorld, creemos en el poder de la colaboración y la acción colectiva para generar un impacto positivo en nuestra sociedad.
                    </p>
                    <h4>Nuestra Misión</h4>
                    <p className="text-gray-600 mt-3">
                    Nuestra misión en BetterWorld es conectar a personas con iniciativas solidarias y facilitar su participación en proyectos que contribuyan al bienestar de nuestra comunidad. Nos esforzamos por ofrecer una plataforma accesible y fácil de usar que inspire y movilice a individuos y organizaciones para trabajar juntos en la construcción de un mundo más solidario y compasivo.                                    
                    </p>
                    <h4>Nuestros Valores</h4>
                    <p className="text-gray-600 mt-3">
                    En BetterWorld, nos guiamos por los siguientes valores fundamentales:
                    </p>
                    <li className="text-gray-600 mt-3">
                        <ul>Solidaridad: Creemos en la solidaridad como fuerza motriz para el cambio social positivo. Trabajamos para fomentar la empatía y el apoyo mutuo en nuestra comunidad.</ul>
                        <ul>Inclusión: Nos esforzamos por crear un espacio inclusivo donde todas las personas, independientemente de su origen, género, orientación sexual, capacidad o situación socioeconómica, se sientan bienvenidas y valoradas.</ul>
                        <ul>Transparencia: Promovemos la transparencia y la honestidad en todas nuestras acciones. Nos comprometemos a mantener una comunicación clara y abierta con nuestra comunidad.</ul>
                        <ul>Responsabilidad: Aspiramos a ser responsables en nuestras acciones y decisiones. Nos comprometemos a utilizar nuestros recursos de manera responsable y a actuar con integridad en todo momento.</ul>
                    </li>
                </div>*/}                
                
                {/* The team */}
                <div className="max-w-xl mx-auto">
                    <h3 className="text-3xl font-semibold sm:text-4xl mb-7">
                        Conoce a nuestro equipo
                    </h3>
                    <p className="text-gray-600 mt-3">
                    ¡Hola! Somos el equipo detrás de <span className="green-text">BetterWorld</span>. Nosotros tres compartimos una pasión común: hacer del mundo un lugar más solidario. Desde organizar eventos hasta coordinar acciones, estamos comprometidos en nuestra misión de crear un impacto positivo en nuestra comunidad. Con vuestra ayuda, estamos construyendo un futuro más solidario y humano.
                    </p>
                </div>
                <div className="mt-12">
                    <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
                        {
                            team.map((item, idx) => (
                                <li key={idx}>
                                    <div className="w-24 h-24 mx-auto">
                                        <img
                                            src={item.avatar}
                                            className="w-full h-full rounded-full"
                                            alt=""
                                        />
                                    </div>
                                    <div className="mt-2">
                                        <h4 className="text-gray-700 font-semibold sm:text-lg">{item.name}</h4>
                                        <p className="green-text">{item.title}</p>
                                        <p className="text-gray-600 mt-2">{item.desc}</p>
                                        <div className="mt-4 flex justify-center gap-4 text-gray-400">
                                            <a href={item.twitter}>
                                                <svg className="w-5 h-5 duration-150 hover:text-gray-500" fill="currentColor" viewBox="0 0 48 48"><g clip-path="url(#clip0_17_80)"><path fill="currentColor" d="M15.1 43.5c18.11 0 28.017-15.006 28.017-28.016 0-.422-.01-.853-.029-1.275A19.998 19.998 0 0048 9.11c-1.795.798-3.7 1.32-5.652 1.546a9.9 9.9 0 004.33-5.445 19.794 19.794 0 01-6.251 2.39 9.86 9.86 0 00-16.788 8.979A27.97 27.97 0 013.346 6.299 9.859 9.859 0 006.393 19.44a9.86 9.86 0 01-4.462-1.228v.122a9.844 9.844 0 007.901 9.656 9.788 9.788 0 01-4.442.169 9.867 9.867 0 009.195 6.843A19.75 19.75 0 010 39.078 27.937 27.937 0 0015.1 43.5z" /></g><defs><clipPath id="clip0_17_80"><path fill="currentColor" d="M0 0h48v48H0z" /></clipPath></defs></svg>
                                            </a>
                                            <a href={item.linkedin}>
                                                <svg className="w-5 h-5 duration-150 hover:text-gray-500" fill="none" viewBox="0 0 48 48"><g clip-path="url(#clip0_17_68)"><path fill="currentColor" d="M44.447 0H3.544C1.584 0 0 1.547 0 3.46V44.53C0 46.444 1.584 48 3.544 48h40.903C46.407 48 48 46.444 48 44.54V3.46C48 1.546 46.406 0 44.447 0zM14.24 40.903H7.116V17.991h7.125v22.912zM10.678 14.87a4.127 4.127 0 01-4.134-4.125 4.127 4.127 0 014.134-4.125 4.125 4.125 0 010 8.25zm30.225 26.034h-7.115V29.766c0-2.653-.047-6.075-3.704-6.075-3.703 0-4.265 2.896-4.265 5.887v11.325h-7.107V17.991h6.826v3.13h.093c.947-1.8 3.272-3.702 6.731-3.702 7.21 0 8.541 4.744 8.541 10.912v12.572z" /></g><defs><clipPath id="clip0_17_68"><path fill="currentColor" d="M0 0h48v48H0z" /></clipPath></defs></svg>
                                            </a>
                                        </div>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}