export const isEnvBrowser = (): boolean => !(window as any).invokeNative
export const noop = () => {
}
export const getResourceName = () => {
    return (window as any).GetParentResourceName ? (window as any).GetParentResourceName() : 'nui-frame-app';
}