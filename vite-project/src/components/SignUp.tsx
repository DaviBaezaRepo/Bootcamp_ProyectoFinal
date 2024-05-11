function SignUp () {
    return (
        <main className="w-full h-screen flex flex-col items-center justify-center px-4 pt-3">
            <div className="w-full text-gray-600 sm:max-w-md">
                <div className="text-center">
                    <img src="../src/assets/better-world-logo1.png" width={200} className="mx-auto" />
                    <div className="mt-5 space-y-2">
                        <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">Regístrate</h3>
                        <p className="">¿Ya tienes una cuenta? <a href="/Login" className="font-medium text-indigo-600 hover:text-indigo-500">Iniciar sesión</a></p>
                    </div>
                </div>
                <div className="p-4 py-6 sm:p-6">
                    <form
                        onSubmit={(e) => e.preventDefault()}
                        className="space-y-5"

                    >
                        <div>
                            <label className="font-medium">
                                Name
                            </label>
                            <input
                                type="text"
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                            />
                        </div>
                        <div>
                            <label className="font-medium">
                                Email
                            </label>
                            <input
                                type="email"
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                            />
                        </div>
                        <div>
                            <label className="font-medium">
                                Password
                            </label>
                            <input
                                type="password"
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                            />
                        </div>
                        <button
                            className="w-full px-4 py-2 text-white button2 rounded-lg duration-150">
                            Regístrate
                        </button>
                    </form>
                </div>
            </div>
        </main>
    )
}

export default SignUp