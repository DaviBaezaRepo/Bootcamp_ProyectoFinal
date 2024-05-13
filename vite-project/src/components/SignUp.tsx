import React, {useState} from "react";


function SignUp () {

    const [isCompany, setIsCompany] = useState(false); // Estado inicial: no es de una empresa
    const [companyName, setCompanyName] = useState('');
    

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsCompany(event.target.checked); // Cambiar el estado basado en si el checkbox está marcado o no
    }; 

    const handleCompanyNameChange = (e) => {
        setCompanyName(e.target.value);
      };


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
                                Nombre
                            </label>
                            <input  
                                type="text"
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                            />
                        </div>
                        <div>
                            <label className="font-medium">
                                Apellidos
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
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border border-color shadow-sm rounded-lg"
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
                        <div>
                            <label className="font-medium">
                                Confirmar contraseña
                            </label>
                            <input
                                type="password"
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                            />
                        </div>
                        <div>
                            <label className="font-medium">
                                <input
                                type="checkbox"
                                checked={isCompany}
                                onChange={handleCheckboxChange}
                                />
                                ¿Eres de una empresa?
                            </label>
                            {isCompany && (
                                <div>
                                <label className="font-medium">
                                    Nombre de la empresa:
                                    <input
                                    type="text"
                                    value={companyName}
                                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                    onChange={handleCompanyNameChange}
                                    />
                                </label>
                                </div>
                            )}
                        </div>
                        <button
                            className="w-full px-4 py-2 text-white button2 rounded-lg duration-150">
                            Crear cuenta
                        </button>
                    </form>
                </div>
            </div>
        </main>
    )
}

export default SignUp