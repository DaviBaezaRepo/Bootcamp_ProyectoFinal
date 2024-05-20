import  { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function SignUp() {
    const navigate = useNavigate();
    const [firstname, setFirstname] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [newpassword, setNewPassword] = useState('');
    const [isentity] = useState(false); // Estado inicial: no es de una empresa
    const [entity] = useState('');
    const [ alert, setAlert] = useState('');

    const handleFirstnameChange = (e: any) => {
        setFirstname(e.target.value);
    };

    const handleSurnameChange = (e: any) => {
        setSurname(e.target.value);
    };

    const handleEmailChange = (e: any) => {
        setEmail(e.target.value);
    };

    const handleNewPasswordChange = (e: any) => {
        setNewPassword(e.target.value);
    };

/*    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsentity(event.target.checked); // Cambiar el estado basado en si el checkbox está marcado o no
        if (!event.target.checked) {
            setEntity(''); // Reiniciar el estado de la empresa si el checkbox está desmarcado
        }
    };

    const handleCompanyNameChange = (e: any) => {
        setEntity(e.target.value);
    };
*/
    const handleSubmit = (e: any) => {
        e.preventDefault();

        const myHeaders: HeadersInit = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw: string = JSON.stringify({
            firstname: firstname,
            surname: surname,
            email: email,
            newpassword: newpassword,
            isentity: Boolean(isentity),
            entity: isentity ? entity : null
        });

        const requestOptions: RequestInit = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        // fetch("http://localhost:8080/users/crearUsuario", requestOptions)
        //   .then((response: Response) => response.text())
        //   .then((result: string) => {console.log(result); debugger;})
        //   .catch((error: any) => {console.error(error); alert("NO OK!")});
        fetch("http://localhost:8080/users/crearUsuario", requestOptions)
            .then((response: Response) => {
                if (response.status >= 500 && response.status < 600) {
                    // Si el código de estado es de la familia 500
                    console.error("Error del servidor:", response.status);
                    setAlert("No se ha podido crear la cuenta");
                    toast.error("No se ha podido crear la cuenta", { autoClose: 1000} );
                    // Aquí puedes manejar el error como desees
                } else {
                    // Si no es un error del servidor, maneja la respuesta normalmente
                    return response.text();
                }
            })
            .then((result: string | undefined) => {
                if (result) {
                    console.log(result);
                    toast.success("La cuenta se ha creado exitosamente", { autoClose: 1000 , onClose: () => navigate("/login")} );
                    
                }
            })
            .catch((error: any) => console.error(error));

    };

    return (
        <main className="w-full flex flex-col items-center px-4 pt-3">
            <div className="sm:max-w-md w-full mb-3 text-gray-600">
                <div className="text-center">
                    <img src="/assets/better-world-logo1.png" width={200} className="mx-auto" />
                    <div className="space-y-2">
                        <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">Regístrate</h3>
                        <p className="text-sm">¿Ya tienes una cuenta? <a href="/Login" className="font-medium text-indigo-600 hover:text-indigo-500">Iniciar sesión</a></p>
                    </div>
                </div>
                <div>
                    <form
                        onSubmit={handleSubmit}
                        className="mt-8 space-y-5"
                    >
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="font-medium">
                                Nombre
                            </label>
                            <input
                                type="text" value={firstname} onChange={handleFirstnameChange}
                                pattern="[A-Za-z]+"
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border border-color shadow-sm rounded-lg"
                            />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="font-medium">
                                Apellidos
                            </label>
                            <input
                                type="text" value={surname} onChange={handleSurnameChange}
                                pattern="[A-Za-z ]+"
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border border-color shadow-sm rounded-lg"
                            />
                        </div>
                    </div>
                        <div>
                            <label className="font-medium">
                                Email
                            </label>
                            <input
                                type="email" value={email} onChange={handleEmailChange}
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border border-color shadow-sm rounded-lg"
                            />
                        </div>
                        <div>
                            <label className="font-medium">
                                Contraseña
                            </label>
                            <input
                                type="password" value={newpassword} onChange={handleNewPasswordChange}
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border border-color shadow-sm rounded-lg"
                            />
                        </div>
                        <div>
                            <label className="font-medium">
                                Confirmar contraseña
                            </label>
                            <input
                                type="password"
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border border-color shadow-sm rounded-lg"
                            />
                        </div>
                        {/*<div>
                            <label className="font-medium">
                                <input
                                    type="checkbox"
                                    checked={isentity}
                                    onChange={handleCheckboxChange}
                                />
                                ¿Eres de una empresa?
                            </label>
                            {isentity && (
                                <div>
                                    <label className="font-medium">
                                        Nombre de la empresa:
                                        <input
                                            type="text"
                                            value={entity}
                                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border border-color shadow-sm rounded-lg"
                                            onChange={handleCompanyNameChange}
                                        />
                                    </label>
                                </div>
                            )}
                        </div>*/}
                        
                        <button
                            type="submit"
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