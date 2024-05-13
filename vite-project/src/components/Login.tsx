import { useState } from "react"

function Login() {
    let alert;
        const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e:any) => {
        e.preventDefault();
        
        try {
        const response = await fetch('http://localhost:8080/auth/login', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            
            body: JSON.stringify({ email, password })
        }).then(r => r.json());
            
        if (response.status == "success") {
            // Manejar la respuesta exitosa, por ejemplo, redirigir a otra página
            console.log(response);
        } else {
            // Manejar la respuesta de error
            alert = <div className="bg-red-300 rounded-md p-2"> 
                {response.message}
            </div>
        }
        } catch (error) {
        console.error('Error en la solicitud:', error);
        }
    };


    return (
        <main className="w-full h-screen flex flex-col items-center px-4 pt-3">
            <div className="max-w-sm w-full text-gray-600">
                <div className="text-center">
                    <img src="../src/assets/better-world-logo1.png" width={200} className="mx-auto" />
                    <div className="space-y-2">
                        <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">Iniciar sesión</h3>
                        <p className="">¿Aún no tienes una cuenta? <a href="/Signup" className="font-medium text-indigo-600 hover:text-indigo-500">Regístrate</a></p>
                    </div>
                </div>
                <form 
                    onSubmit={handleSubmit}
                    className="mt-8 space-y-5"
                >
                    {/* Canviar color border!!! */}
                    <div>
                        <label className="font-medium">
                            Correo electónico
                        </label>
                        <input
                            type="email"
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)}
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
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                        />
                    </div>
                    {alert ? alert : ""}
                    <button
                        className="w-full px-4 py-2 text-white button2 rounded-lg duration-150"
                    >
                        Entrar
                    </button>
                    <div className="text-center">
                        <a href="/ResetPassword" className="green-hover">¿Has olvidado tu conraseña?</a>
                    </div>
                </form>
            </div>
        </main>
    )
}

export default Login