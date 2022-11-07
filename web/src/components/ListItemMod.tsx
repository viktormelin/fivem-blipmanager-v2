import React from "react";
import {ListItem, ListItemText, Switch} from "@mui/material";
import {IBlipData} from "../../../types/types";
import {useAtom} from "jotai";
import {configStore} from "../stores/configStore";

const ListItemMod: React.FC<{ data: IBlipData, toggleHandler: (data: IBlipData) => void }> = ({
                                                                                                  data,
                                                                                                  toggleHandler
                                                                                              }) => {
    const [config] = useAtom(configStore)
    const id = `item-${data.id}`
    const label = config.showBlipCount ? `${data.label} | ${data.blips.length} blips` : data.label

    return (
        <ListItem sx={{
            backgroundColor: 'primary.main',
            borderRadius: '0.5rem',
        }}>
            <ListItemText id={id} primary={label}
                          secondary={data?.description}/>
            <Switch color='secondary' edge='end' checked={data.currentState} onChange={() => toggleHandler(data)}/>
        </ListItem>
    )
}

export default ListItemMod