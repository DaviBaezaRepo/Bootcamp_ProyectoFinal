export default () => {

    const tableItems = [
        {
            avatar: "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
            name: "Liam James",
        },
        {
            avatar: "https://randomuser.me/api/portraits/men/86.jpg",
            name: "Olivia Emma",
        },
        {
            avatar: "https://randomuser.me/api/portraits/women/79.jpg",
            name: "William Benjamin",
        },
        {
            avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
            name: "Henry Theodore",
        },
        {
            avatar: "https://images.unsplash.com/photo-1439911767590-c724b615299d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
            name: "Amelia Elijah",
        },
    ]

    return (
        <div className="max-w-screen-xl mx-auto mt-8 px-4 md:px-8">
            <div className="items-start justify-between md:flex">
                <div className="max-w-lg">
                    <h2 className="text-gray-800 font-medium font-bold sm:text-2xl">
                        Eventos creados
                    </h2>
                </div>
                <div className="mt-3 md:mt-0">
                    <a
                        href="javascript:void(0)"
                        className="inline-block px-4 py-2 text-white duration-150 font-medium rounded-lg button2 md:text-sm"
                    >
                        Crear
                    </a>
                </div>
            </div>
            <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
                <table className="w-full table-auto text-sm text-left">
                    <thead className="bg-gray-50 text-gray-600 font-medium border-b">
                        <tr>
                            <th className="py-3 px-6">Título</th>
                            <th className="py-3 px-6"></th>

                        </tr>
                    </thead>
                    <tbody className="text-gray-600 divide-y">
                        {
                            tableItems.map((item, idx) => (
                                <tr key={idx}>
                                    <td className="flex items-center gap-x-3 py-3 px-6 whitespace-nowrap">
                                        <img src={item.avatar} className="w-10 h-10 rounded-full" />
                                        <div>
                                            <span className="block text-gray-700 text-sm font-medium">{item.name}</span>
                                        </div>
                                    </td>
                                    <td className="text-right px-6 whitespace-nowrap">
                                        <a href="#" className="py-2 px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg">
                                            Editar
                                        </a>
                                        <button href="#" className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg">
                                            Eliminar
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <div className="items-start mt-12 justify-between md:flex">
                <div className="max-w-lg">
                    <h2 className="text-gray-800 font-medium font-bold sm:text-2xl">
                        Eventos a los que asisto
                    </h2>
                </div>
            </div>
        </div>
    )
}