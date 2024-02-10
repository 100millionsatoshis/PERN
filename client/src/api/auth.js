import axios from 'axios';
// The axios.defaults.withCredentials = true; line is used to tell Axios to send the cookies to the server.
axios.defaults.withCredentials = true;

export async function onRegistration(registrationData) {
    return await axios.post(
        "http://localhost:8000/api/register",
        registrationData
    )
}

export async function onLogin(loginData) {
    return await axios.post(
        "http://localhost:8000/api/login",
        loginData
    )
}

export async function onLogout() {
    return await axios.get(
        "http://localhost:8000/api/logout"
    )
}
// The fetchProtectedInfo function is used to make a request to the protected route on the server. 
//This function is used to test if the user is authenticated. If the user is authenticated, the server will 
//respond with the protected information. If the user is not authenticated, the server will respond with an error message.
export async function fetchProtectedInfo() {
    return await axios.get(
        "http://localhost:8000/api/auth/protected"
    )
}