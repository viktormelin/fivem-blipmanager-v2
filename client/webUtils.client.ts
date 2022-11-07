export const toggleNuiFrame = (state: boolean) => {
    SetNuiFocus(state, state)
    sendReactMessage('setVisible', state)
}

export const sendReactMessage = (action: string, data: any) => {
    SendNUIMessage({action, data})
}

const currentResourceName = GetCurrentResourceName()
export const debugPrint = (message: string) => {
    console.log(`^3[${currentResourceName}]^0${message}`)
}

RegisterNuiCallbackType('hideFrame')
on('__cfx_nui:hideFrame', (_: any, cb: any) => {
    toggleNuiFrame(false)
    cb({})
})