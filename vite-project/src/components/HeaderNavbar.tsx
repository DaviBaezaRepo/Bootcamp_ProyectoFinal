import { useState, useEffect, useRef } from 'react';
import { logout } from '../lib/authUtils';

function HeaderNavbar(props: any) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        // Función para cerrar el menú cuando se hace clic fuera de él
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !(dropdownRef.current as any).contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        // Agregar event listener al documento
        document.addEventListener('mousedown', handleClickOutside);

        // Limpiar event listener al desmontar el componente
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative z-10" ref={dropdownRef}>
            <button
                className="flex items-center justify-center px-3 py-2 text-gray-700 hover:text-gray-900 focus:outline-none"
                onClick={toggleDropdown}
            >
                {props.children}
            </button>
            {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg">
                    <div className="py-1 flex flex-col">
                        <a
                            href="/settings/profile"
                            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                        >
                            Perfil
                        </a>
                        <a
                            href="/settings/my-events"
                            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                        >
                            Mis eventos
                        </a>
                        <a
                            href="/settings/saved-events"
                            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                        >
                            Eventos guardados
                        </a>
                        <a
                            href="/login"
                            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                            onClick={logout}
                        >
                            Cerrar Sesion
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
}

export default HeaderNavbar;
