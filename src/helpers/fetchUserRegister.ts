type RequestData = {
    nombre: string;
    email: string;
    password: string;
}

type ResponseData = {
    message: string;
}

const apiUrl = import.meta.env.VITE_API_URL;

export async function fetchUserRegister(data:RequestData) {
    if (!apiUrl) {
        return { success: false, reason: "no api url" };
    }
    const response = await fetch(`${apiUrl}/api/users/register-admin`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    if (!response.ok) {
        return { message: "bad server response." };
    }
    const parsedResponse: ResponseData = await response.json();
    return { message: parsedResponse.message };
}