import { useState } from "react"

function Login() {
    return (
        <main className="w-full h-screen flex flex-col items-center px-4 pt-3">
            <div className="max-w-sm w-full text-gray-600">
                <div className="text-center">
                    <img src="../src/assets/better-world-logo1.png" width={200} className="mx-auto" />
                    <div className="space-y-2">
                        <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">Iniciar sesión</h3>
                        <p className="">¿Aún no tienes una cuenta? <a href="javascript:void(0)" className="font-medium text-indigo-600 hover:text-indigo-500">Regístrate</a></p>
                    </div>
                </div>
                <form
                    onSubmit={(e) => e.preventDefault()}
                    className="mt-8 space-y-5"
                >
                    {/* Canviar color border!!! */}
                    <div>
                        <label className="font-medium">
                            Usuario o correo electónico
                        </label>
                        <input
                            type="email"
                            required
                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                        />
                    </div>
                    <div>
                        <label className="font-medium">
                            Contraseña
                        </label>
                        <input
                            type="password"
                            required
                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                        />
                    </div>
                    <button
                        className="w-full px-4 py-2 text-white button2 rounded-lg duration-150"
                    >
                        Entrar
                    </button>
                    <div className="text-center">
                        <a href="javascript:void(0)" className="green-hover">¿Has olvidado tu conraseña?</a>
                    </div>
                </form>
            </div>
        </main>
    )
}

export default Login