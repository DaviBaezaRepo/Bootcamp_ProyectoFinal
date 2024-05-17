import * as Dialog from "@radix-ui/react-dialog";
import { useEffect, useState } from "react";
import { getUserData } from "../lib/authUtils";

const URLLink = "https://example.lorem/shortlink";

export default (props: any) => {

    const userData = getUserData();
    const createEventInputsNames = ["title", "explanation", "image", "location", "duration", "dateandtime", "imageString"];
    const createEventInputs: any = {};
    for (let i = 0; i < createEventInputsNames.length; i++) {
        const [value, set] = useState('');
        createEventInputs[createEventInputsNames[i]] = { value, set }
    }

    function handleInputUpdate(e: any) {
        const input = e.currentTarget.id;
        if (input == 'image') {
            // Get a reference to the file
            const file = e.target.files[0];
                
            // Encode the file using the FileReader API
            const reader = new FileReader();
            reader.onloadend = () => {
                createEventInputs.imageString.set(reader.result);
            };
            reader.readAsDataURL(file);
            createEventInputs[input].set(e.target.value);
        } else {
            createEventInputs[input].set(e.target.value);
        }
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();

        const myHeaders: HeadersInit = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const inputs:any = {};
        Object.keys(createEventInputs).forEach(key => {
            inputs[key] = createEventInputs[key].value
        });
        inputs.organizer = userData?.sub;
        inputs.image = inputs.imageString

        console.log(inputs);

        const raw: string = JSON.stringify(inputs);

        const requestOptions: RequestInit = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch("http://localhost:8080/events/crearEvento", requestOptions)
            .then((response: Response) => {
                if (response.status >= 500 && response.status < 600) {
                    // Si el código de estado es de la familia 500
                    console.error("Error del servidor:", response.status);
                    //setAlert("No se ha podido crear la cuenta");
                    //toast.error("No se ha podido crear la cuenta");
                    // Aquí puedes manejar el error como desees
                } else {
                    // Si no es un error del servidor, maneja la respuesta normalmente
                    return response.text();
                }
            })
            .then((result: string | undefined) => {
                if (result) {
                    console.log(result);
                    //setAlert("La cuenta se ha creada exitosamente");
                    //toast.success("La cuenta se ha creado exitosamente"); // Mostrar notificación de éxito
                    //setTimeout(() => navigate("/login"), 2000);
                }
            })
            .catch((error: any) => console.error(error));

    };

  const [copyState, setCopyState] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(URLLink).then(
      function () {
        setCopyState(true);
      },
      function (err) {
        console.error("Async: Could not copy text: ", err);
      }
    );
  };

  useEffect(() => {
    if (copyState) {
      setTimeout(() => setCopyState(false), 3000);
    }
  }, [copyState]);

  return (
    <Dialog.Root>
      <Dialog.Trigger className="inline-block px-4 py-2 text-white duration-150 font-medium rounded-lg button2 md:text-sm">
        Crear
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 w-full h-full bg-black opacity-40" />
        <Dialog.Content className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full max-w-lg mx-auto px-4">
          <div className="bg-white rounded-md shadow-lg px-4 py-6">
            <div className="flex items-center justify-between">
              <Dialog.Title className="text-lg font-medium text-gray-800 ">
                {props.title}
              </Dialog.Title>
              <Dialog.Close className="p-2 text-gray-400 rounded-md hover:bg-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 mx-auto"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Dialog.Close>
            </div>
            <div className="text-black">
                <form className="my-2" id="eventForm" onSubmit={handleSubmit}> 
                    <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900">Titulo</label>
                    <input type="text" required value={createEventInputs.title.value} onChange={handleInputUpdate} id="title" aria-describedby="helper-text-explanation" className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Titulo del evento" />

                    <label htmlFor="explanation" className="block mb-2 text-sm font-medium text-gray-900 mt-5">Descripcion</label>
                    <textarea id="explanation" required value={createEventInputs.explanation.value} onChange={handleInputUpdate} aria-describedby="helper-text-explanation" className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Descripcion del evento" ></textarea>

                    <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900 mt-5">Imagen</label>
                    <input type="file" accept="image/*" required value={createEventInputs.image.value} onChange={handleInputUpdate} id="image" aria-describedby="helper-text-explanation" className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Imagen del evento" />
                    <input type="hidden" id="imageString"  value={createEventInputs.imageString.value} />

                    <label htmlFor="location" className="block mb-2 text-sm font-medium text-gray-900 mt-5">Ubicacion</label>
                    <input type="text" required value={createEventInputs.location.value} onChange={handleInputUpdate} id="location" aria-describedby="helper-text-explanation" className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Ubicacion del evento" />

                    <label htmlFor="duration" className="block mb-2 text-sm font-medium text-gray-900 mt-5">Duracion</label>
                    <input type="text" required value={createEventInputs.duration.value} onChange={handleInputUpdate} id="duration" aria-describedby="helper-text-explanation" className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Duracion del evento" />
                
                    
                    <label htmlFor="dateandtime" className="block mb-2 text-sm font-medium text-gray-900 mt-5">Fecha y hora</label>
                    <input type="datetime-local" required value={createEventInputs.dateandtime.value} onChange={handleInputUpdate} id="dateandtime" aria-describedby="helper-text-explanation" className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
            
                </form>
            </div>
            <button type="submit" form="eventForm" className="text-sm mt-3 py-2.5 px-8 button2 flex-1 text-white bg-indigo-600 rounded-md outline-none ring-offset-2 ring-indigo-600 focus:ring-2">
                Crear
            </button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};