import {IConfig} from "../../../types/types";
import {getResourceName, isEnvBrowser} from "./misc";
import defaultConfig from '../../../config.json'

export const getConfig = async (): Promise<IConfig> => {
    if (isEnvBrowser()) {
        return defaultConfig
    }

    return await fetch(`https://cfx-nui-${getResourceName()}/config.json`).then((res) => res.json())
}