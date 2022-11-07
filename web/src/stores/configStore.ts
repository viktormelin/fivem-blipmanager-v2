import {atom} from "jotai";
import {IConfig} from "../../../types/types";
import {getConfig} from "../utils/api";

export const configStore = atom<Promise<IConfig>>(async () => {
    return await getConfig()
})