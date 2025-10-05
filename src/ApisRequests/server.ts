import { revalidateTag } from "next/cache"

// const base = 'http://3.135.129.190:5000'
// const base = 'http://18.218.23.153:5000'
export const base = 'https://api.protippz.com'
// const base = 'https://585d-103-145-138-193.ngrok-free.app'
export const baseUrl = async (url: string) => {
    if (url?.startsWith('/')) return `${base}${url}`
    if (url?.startsWith('http')) return `${url}`
    return `${base}/${url}`
}

export const imageUrl = (url: string) => {
    if (!url) {
        return ""
    }
    if (url.includes('http')) {
        return url
    }
    if (url.startsWith('/')) {
        return `${base}${url}`
    }
    return `${base}/${url}`
}

// const defaultServer = 'https://585d-103-145-138-193.ngrok-free.app';
// const defaultServer = 'http://3.135.129.190:5000';
// const defaultServer = "http://18.218.23.153:5000 ";
const defaultServer = "https://api.protippz.com";

const request = async (
    method: 'GET' | 'POST' | 'PATCH' | 'DELETE',
    url: string,
    options: {
        body?: Record<string, any> | FormData;
        headers?: Record<string, string>;
        cacheTag?: string;
        server?: string;
    } = {}
) => {
    const { body, headers = {}, cacheTag, server = defaultServer } = options;
    body instanceof FormData ? {} : headers['Content-Type'] = 'application/json'
    try {

        const response = await fetch(`${server}${url}`, {
            method,
            headers: {
                //     'Content-Type': body instanceof FormData ? 'multipart/form-data' : 'application/json',
                ...headers,
            },
            body: body instanceof FormData ? body : JSON.stringify(body),
            cache: 'no-store',
        });
        // if (!response.ok) {
        //     throw new Error(`Error: ${response.status} ${response.statusText}`);
        // }

        const result = await response.json();

        if (cacheTag && method !== 'GET') {
            revalidateTag(cacheTag)
        }

        return result;
    } catch (error) {
        // console.error(`Error in ${method} request to ${url}:`, error);
        throw error;
    }
};

// Reusable HTTP method functions
export const get = async (
    url: string,
    options: { headers?: Record<string, string>; cacheTag?: string; server?: string } = {}
) => {
    return request('GET', url, options);
};

export const post = async (
    url: string,
    body: Record<string, any> | FormData,
    options: { headers?: Record<string, string>; cacheTag?: string; server?: string } = {}
) => {
    return request('POST', url, { ...options, body });
};

export const patch = async (
    url: string,
    body: Record<string, any> | FormData,
    options: { headers?: Record<string, string>; cacheTag?: string; server?: string } = {}
) => {
    return request('PATCH', url, { ...options, body });
};

export const remove = async (
    url: string,
    options: { headers?: Record<string, string>; cacheTag?: string; server?: string } = {}
) => {
    return request('DELETE', url, options);
};
