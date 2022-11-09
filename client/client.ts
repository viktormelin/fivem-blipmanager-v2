import "./webUtils.client";
import config from "./config.client";
import {sendReactMessage, toggleNuiFrame} from "./webUtils.client";
import {IBlipData} from "../types/types";

const BlipMap = new Map<string, IBlipData>()
const CategoriesSet = new Set<string>()


const toggleBlip = (unique: string) => {
  const blip = BlipMap.get(unique)
  if (blip && blip.currentState) {
    for (const item of blip.blips) {
      const index = blip.blips.indexOf(item)
      
      if (DoesBlipExist(item)) {
        RemoveBlip(item)
      }
      
      blip.blips.splice(index, 1)
    }
  }
}

const displayManager = () => {
  toggleNuiFrame(true)
  sendReactMessage('setData', {})
}

on('onResourceStart', (resName: string) => {
  if (resName === GetCurrentResourceName()) {
    console.log('TypeScript boilerplate started!')
  }
})

on('blips:client:DisplayManager', () => {
  displayManager()
})

on('blips:client:AddBlipForCoord', (data: IBlipData) => {
  const {unique, label, category, description, currentState} = data
  const {coords, sprite, shortRange, scale, colour} = data.settings
  
  CategoriesSet.add(category)
  
  if (!BlipMap.has(unique)) {
    const blipObject: IBlipData = {
      unique: unique,
      blips: [],
      settings: data.settings,
      category,
      label,
      description,
      currentState
    }
    
    BlipMap.set(unique, blipObject)
  }
  
  if (currentState) {
    const blip = AddBlipForCoord(coords.x, coords.y, coords.z)
    SetBlipSprite(blip, sprite)
    SetBlipAsShortRange(blip, shortRange)
    SetBlipScale(blip, scale)
    SetBlipColour(blip, colour)
    BeginTextCommandSetBlipName("STRING")
    AddTextComponentString(label)
    EndTextCommandSetBlipName(blip)
  }
})

if (config.useCommand) {
  RegisterCommand('blipmanager', (source: number, args: any, rawCommand: string) => {
    displayManager()
  }, false)
}

on('__cfx_nui:toggleBlip', (data: IBlipData, cb: any) => {
  toggleBlip(data.unique)
  cb(true)
})