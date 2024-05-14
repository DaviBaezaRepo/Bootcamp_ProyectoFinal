import { jwtDecode } from "jwt-decode";

export function getUserData(): any {
    const token = localStorage.getItem("token");
    if (!token) return null;
    const jwt = jwtDecode(token);
    console.log(jwt);
    if (!jwt) return null;
    return jwt;
}

// Funcion para saber si el usuario esta logueado si esta la cookie activa
export function isLogged(): boolean {
    const userData = getUserData();
    return userData ? true : false;
}

export function logout() {
    localStorage.removeItem('token');
    
}
