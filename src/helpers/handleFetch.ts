interface RequestConfig extends RequestInit {
    method: string;
};

type ResponseBody = {
    message: string;
} & Record<string, unknown>;

type Credentials = "omit" | "include" | "same-origin";

export default async function handleAPIFetch(route: string, method: string, expectedStatusCodes:number[], credentials:Credentials = 'include', data?: object): Promise<ResponseBody | null> {
    const requestConfig:RequestConfig = {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        },
        credentials
    };
    if (method !== 'GET' && data) {
        requestConfig.body = JSON.stringify(data);
    }
    const response = await fetch(`${import.meta.env.VITE_API_URL}${route}`, requestConfig);
    if (!response.ok || !expectedStatusCodes.includes(response.status)) {
        return null;
    }
    return await response.json();
}