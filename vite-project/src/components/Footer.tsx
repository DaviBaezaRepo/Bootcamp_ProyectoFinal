export default () => {
    const footerNavs = [
        {
            href: '/AboutUs',
            name: 'Sobre nosotros'
        },
        {
            href: '/AboutProject',
            name: 'Acerca del proyecto'
        },
        {
            href: '/PrivacyPolicy',
            name: 'Política de privacidad'
        }
    ]

    return (
        <footer className="text-gray-500 bg-white px-4 py-5 mx-auto md:px-8 mt-14 bg-green">
            <div className="max-w-lg sm:mx-auto sm:text-center">
                <img src="/assets/better-world-negative-logo2.png" className="w-32 sm:mx-auto" />
                <p className="leading-relaxed mt-2 text-[15px]">
                BetterWorld, una plataforma dedicada a fomentar la solidaridad y el bienestar comunitario. En BetterWorld, creemos en el poder de la colaboración y la acción colectiva para generar un impacto positivo en nuestra sociedad.
                </p>
            </div>
            <ul className="items-center justify-center mt-8 text-sm space-y-5 sm:flex sm:space-x-4 sm:space-y-0">
                {
                    footerNavs.map((item, idx) => (
                        <li key={idx}>
                            <a href={item.href} className="hover:text-lime-100">
                                { item.name }
                            </a>
                        </li>
                    ))
                }
            </ul>
            <div className="mt-8 items-center justify-between sm:flex">
                <div className="mt-4 sm:mt-0">
                    &copy; 2022 Better World All rights reserved.
                </div>
                    <li className="w-auto h-10 flex items-center justify-center">
                <div className="mt-4 sm:mt-0 text-white hover:text-white">
                    <a href="mailto:info@betterworld.com" className="font-normal text-white hover:text-white">info@betterworld.com</a>
                </div>
                    </li>
                </div>
        </footer>
    )
}