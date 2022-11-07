import React, {Context, createContext, useContext, useEffect, useState} from "react";
import {useNuiEvent} from "../hooks/useNuiEvent";
import {isEnvBrowser} from "../utils/misc";
import {fetchNui} from "../utils/fetchNui";

const VisibilityCtx = createContext<VisivilityProviderValue | null>(null)

interface VisivilityProviderValue {
    setVisible: (visible: boolean) => void
    visible: boolean
}

export const VisibilityProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    const [visible, setVisible] = useState(false)
    useNuiEvent<boolean>('setVisible', setVisible)

    useEffect(() => {
        if(!visible) return
        const keyHandler = (e: KeyboardEvent) => {
            if(['Backspace', 'Escape'].includes(e.code)) {
                if(!isEnvBrowser()) fetchNui('hideFrame')
                else setVisible(!visible)
            }
        }

        window.addEventListener('keydown', keyHandler)
        return () => window.removeEventListener('keydown', keyHandler)
    }, [visible])

    return (
        <VisibilityCtx.Provider
            value={{
                visible,
                setVisible
            }}
        >
            <div style={{visibility: visible ? 'visible' : 'hidden', height: '100%'}}>
                {children}
            </div>
        </VisibilityCtx.Provider>
    )
}

export const useVisibility = () => useContext<VisivilityProviderValue>(VisibilityCtx as Context<VisivilityProviderValue>)