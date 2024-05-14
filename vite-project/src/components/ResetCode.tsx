function ResetCode() {

    return (
        <main className="w-full flex flex-col items-center justify-center px-4 pt-3">
            <div className="max-w-sm w-full text-gray-600 space-y-8 mb-7">
                <div className="text-center">
                    <img src="/assets/better-world-logo1.png" width={200} className="mx-auto" />
                    <div className="space-y-2">
                        <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">Introduzca su código de Lorem ipsum</h3>
                    </div>
                </div>
                <form>
                    <div>
                        <label className="font-medium">Email</label>
                        <input
                            type="number"
                            required
                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border border-color shadow-sm rounded-lg"
                        />
                    </div>
                    <p className="my-4">Enviaremos un código de verificación a este email si coincide con una cuenta de BetterWorld existente.</p>
                    <button type="submit" className="w-full px-4 pt-2 text-white button2 rounded-lg duration-150">Enviar</button>
                </form>
            </div>
        </main>
    );
}

export default ResetCode;
