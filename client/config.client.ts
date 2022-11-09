import {DeepPartial, IConfig} from "../types/types";

export default JSON.parse(LoadResourceFile(GetCurrentResourceName(), 'config.json')) as DeepPartial<IConfig>