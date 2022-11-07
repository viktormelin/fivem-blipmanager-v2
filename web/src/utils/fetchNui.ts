import {getResourceName, isEnvBrowser} from "./misc";

export async function fetchNui<T = any>(eventName: string, data?: any, mockData?: T): Promise<T> {
    const options = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(data)
    }

    if (isEnvBrowser() && mockData) return mockData

    const resourceName = getResourceName()
    const response = await fetch(`https://${resourceName}/${eventName}`, options)
    return await response.json()
}