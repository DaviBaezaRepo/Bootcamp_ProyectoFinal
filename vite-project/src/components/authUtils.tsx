import { useCookies } from "react-cookie";

import { Cookies } from 'react-cookie';


// Funcion para saber si el usuario esta logueado si esta la cookie activa
export function isLogged() {
    const [cookies] = useCookies(['token']);
    
    // Verificar si la cookie "token" está presente y tiene un valor
    const isAuthenticated = cookies.token !== undefined && cookies.token !== '';

    // Si el usuario está autenticado, pero no hay cookie, elimina la cookie y devuelve falso
    if (isAuthenticated && !cookies.token) {
        return false;
    }

    return isAuthenticated;
}

export function Logout() {
    const [Cookies, setCookie,removeCookie] = useCookies(['token']);
    
        // Eliminar la cookie de autenticación
        removeCookie('token', { path: '/' });
        localStorage.clear();
        // Redirigir al usuario a la página de inicio
        window.location.href = '/Home';
};
