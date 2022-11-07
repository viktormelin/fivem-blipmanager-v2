import {atom} from "jotai";
import {IBlipData} from "../../../types/types";

export const blipStore = atom<IBlipData[]>([])