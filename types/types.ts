export interface IFetchedData {
    categories: ICategory[],
    blips: IBlipData[]
}

export interface IBlipData {
    id: number,
    blips: number[],
    category: string,
    label: string,
    description?: string,
    currentState: boolean,
}

export interface ICategory {
    name: string,
    label: string,
    description?: string
}

export interface IConfig {
    categories: ICategory[],
    showBlipCount: boolean,
    useCommand: boolean,
    commandName?: string
}