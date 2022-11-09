export type DeepPartial<T> = T extends object ? {
  [P in keyof T]?: DeepPartial<T[P]>;
} : T;

export type TCoord = { x: number, y: number, z: number, w?: number }

export interface IFetchedData {
  categories: ICategory[],
  blips: IBlipData[]
}

export interface IBlipSettings {
  coords: TCoord,
  sprite: number,
  shortRange: boolean,
  scale: number,
  colour: number,
  label: string
}

export interface IBlipData {
  unique: string,
  blips: number[],
  settings: IBlipSettings
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
}