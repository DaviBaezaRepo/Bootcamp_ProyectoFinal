import { jwtDecode } from "jwt-decode";


// Define User interface (los datos que van a llegar des de backend)
type User = {
    sub: string;
    name: string;
    image: string | null;
}

// Function to retrieve user data from JWT token stored in local storage
export function getUserData(): null | User {
    // Get JWT token from local storage
    const token = localStorage.getItem("token");
    // If token does not exist, return null
    if (!token) return null;
    // Decode JWT token and extract user data
    const jwt = jwtDecode<User>(token);
    // Log decoded JWT token (for debugging purposes)
    console.log(jwt);
    // If decoded JWT is empty, return null
    if (!jwt) return null;
    // Return decoded user data
    return jwt;
}

// Function to check if user is logged in
export function isLogged(): boolean {
    // Check if user data exists
    return Boolean(getUserData());
}

// Function to retrieve user avatar, fallback to default if not available
export function getUserAvatar(): string {
    const userData = getUserData();
    // If user data exists and contains image, return user image
    return userData?.image ?? "/assets/user-icon.jpg";
}

// Function to log out user by removing token from local storage
export function logout() {
    localStorage.removeItem('token');
}
