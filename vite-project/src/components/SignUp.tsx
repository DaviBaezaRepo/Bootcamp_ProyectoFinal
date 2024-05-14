import React, {useState} from "react";

function SignUp () {
    const [firstname, setFirstname] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [newpassword, setNewPassword] = useState('');
    const [isentity, setIsentity] = useState(false); // Estado inicial: no es de una empresa
    const [entity, setEntity] = useState('');

    const handleFirstnameChange = (e:any) => {
        setFirstname(e.target.value);
    };
    
    const handleSurnameChange = (e:any) => {
        setSurname(e.target.value);
    };
    
    const handleEmailChange = (e:any) => {
        setEmail(e.target.value);
    };
    
    const handleNewPasswordChange = (e:any) => {
        setNewPassword(e.target.value);
    };

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            setIsentity(event.target.checked); // Cambiar el estado basado en si el checkbox está marcado o no
            if (!event.target.checked) {
                setEntity(''); // Reiniciar el estado de la empresa si el checkbox está desmarcado
            }
    };
        
    const handleCompanyNameChange = (e:any) => {
            setEntity(e.target.value);
    };
    
      const handleSubmit = (e:any) => {
        e.preventDefault();
        // Aquí puedes enviar los datos al servidor utilizando fetch, axios, u otra biblioteca
        // const userData = {
        //   firstname,
        //   surname,
        //   email,
        //   newpassword,
        //   isentity: Boolean(isentity),
        //   entity: isentity ? entity : null, // Solo enviar companyName si es una empresa
        // };

        const userData = JSON.stringify({
            "firstname": firstname,
            "surname": surname,
            "email": email,
            "newpassword": newpassword,
            "isentity": Boolean(isentity),
            "entity": isentity ? entity : null, // Solo enviar companyName si es una empresa
          });
        console.log('Datos del usuario:', userData);
        // Aquí puedes enviar userData al servidor

        fetch('http://localhost:8080/users/crearUsuario', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: userData,
          redirect: "follow"
        })
        .then(response => {
          if (!response.ok) {
            throw new Error('Error al enviar los datos al servidor');
          }
          return response.json();
        })
        .then(data => {
          // Manejar la respuesta del servidor si es necesario
          console.log('Respuesta del servidor:', data);
          window.location.href = "/Home"
        })
        .catch(error => {
            debugger;
          // Manejar errores de la solicitud
          console.error('Error:', error);
        });
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
                        onSubmit={handleSubmit}
                        className="space-y-5"
                    >
                        <div>
                            <label className="font-medium">
                                Nombre
                            </label>
                            <input  
                                type="text" value={firstname} onChange={handleFirstnameChange} 
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                            />
                        </div>
                        <div>
                            <label className="font-medium">
                                Apellidos
                            </label>
                            <input  
                                type="text" value={surname} onChange={handleSurnameChange} 
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                            />
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
                                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                    onChange={handleCompanyNameChange}
                                    />
                                </label>
                                </div>
                            )}
                        </div>
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