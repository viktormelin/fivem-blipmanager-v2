import './App.css'
import {Box, List, ListSubheader, ThemeProvider} from "@mui/material";
import {debugData} from "../utils/debugData";
import {grey} from "@mui/material/colors";
import React, {useState} from "react";
import {IBlipData, ICategory, IFetchedData} from "../../../types/types";
import {theme} from "../theme/theme";
import ListItemMod from "./ListItemMod";
import Sidebar from "./Sidebar";
import {useAtom} from "jotai";
import {menuStore} from "../stores/menuStore";
import {useNuiEvent} from "../hooks/useNuiEvent";

debugData([
    {
        action: 'setVisible',
        data: true
    }
])


const MockData: IBlipData[] = [
    {
        id: 1,
        blips: [123123],
        category: "Category1",
        label: "I'm a Blip label",
        currentState: true,
    },
    {
        id: 2,
        blips: [12399, 123798],
        category: "Category2",
        label: "I'm a Blip label",
        currentState: true,
    },
    {
        id: 3,
        blips: [12399, 123798],
        category: "Category2",
        label: "I'm a Blip label",
        description: "I'm a Blip description",
        currentState: true,
    },
]

const MockCategories = [
    {
        name: 'Category1',
        label: 'Category 1',
        description: 'Category 1 Description'
    },
    {
        name: 'Category2',
        label: 'Category 2',
        description: 'Category 2 Description'
    },
]

const AppWrapper: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <App/>
        </ThemeProvider>
    )
}

const App: React.FC = () => {
    const [menu] = useAtom(menuStore)
    //const [blips, setBlips] = useAtom(blipStore)
    const [blips, setBlips] = useState<IBlipData[]>(MockData)
    const [categories, setCategories] = useState<ICategory[]>(MockCategories)

    useNuiEvent<IFetchedData>('setData', ({categories, blips}) => {
        setBlips(blips)
        setCategories(categories)
    })

    return (
        <div className="App">
            <Box sx={{
                display: 'flex',
                width: '50rem',
                height: '30rem',
                backgroundColor: grey[900],
                borderRadius: '0.5rem'
            }}>
                <Sidebar/>
                {menu === 'activated' ? (
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        padding: '1rem',
                        width: '100%'
                    }}>
                        {categories.map((category) => (
                            <List
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '0.5rem',
                                    width: '100%',
                                }}
                                subheader={<ListSubheader>{category.label}</ListSubheader>}
                            >
                                {blips.map((blip) => {
                                    if (blip.category === category.name && blip.currentState) {
                                        return (
                                            <ListItemMod data={blip}/>
                                        )
                                    }
                                })}
                            </List>
                        ))}
                    </Box>
                ) : null}
                {menu === 'deactivated' ? (
                    <Box sx={{
                        display: 'flex',
                        padding: '1rem',
                        width: '100%'
                    }}>
                        <List
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '0.5rem',
                                width: '100%',
                            }}
                            subheader={<ListSubheader>Category 1</ListSubheader>}
                        >
                            {blips.map((blip) => {
                                if (!blip.currentState) {
                                    return (
                                        <ListItemMod data={blip}/>
                                    )
                                }
                            })}
                        </List>
                    </Box>
                ) : null}
            </Box>
        </div>
    )
}

export default AppWrapper
