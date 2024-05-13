function ResetPassword() {
    return (
        <main className="w-full  flex flex-col items-center justify-center px-4 pt-3">
            <div className="max-w-sm w-full text-gray-600 space-y-8">
                <div className="text-center">
                    <img src="../src/assets/better-world-logo1.png" width={200} className="mx-auto" />
                    <div className="space-y-2">
                        <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">¿Has olvidado tu contraseña?</h3>
                    </div>
                </div>
                <form onSubmit={(e) => e.preventDefault()}>
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
                    <p className="my-4">Enviaremos un código de verificación a este email o número de teléfono si coincide con una cuenta de LinkedIn existente.</p>
                    <button className="w-full px-4 py-2 text-white button2 rounded-lg duration-150">
                        Enviar
                    </button>
                    <button className="w-full flex items-center justify-center gap-x-3 py-2.5 mt-5 border rounded-lg text-sm font-medium duration-150 hover:bg-gray-100">
                        <a href="/Login">Volver</a>
                    </button>
                </form>
            </div>
        </main>
    )
}

export default ResetPassword