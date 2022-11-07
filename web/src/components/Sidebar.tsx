import React from "react";
import {Box, Button} from "@mui/material";
import {CheckBox, Close, IndeterminateCheckBox} from "@mui/icons-material";
import {useAtom} from "jotai";
import {menuStore} from "../stores/menuStore";

const Sidebar: React.FC = () => {
    const [menu, setMenu] = useAtom(menuStore)

    return (
        <Box sx={{
            display: 'flex',
            gap: '2rem',
            height: '100%',
            flexDirection: 'column',
            justifyContent: 'center',
            width: 'fit-content',
            paddingLeft: '1rem',
        }}>
            <Button onClick={() => setMenu('activated')} variant="contained" startIcon={<CheckBox/>}>
                Activated
            </Button>
            <Button onClick={() => setMenu('deactivated')} variant="contained" startIcon={<IndeterminateCheckBox/>}>
                Deactivated
            </Button>
            <Button color='error' variant="contained" startIcon={<Close/>}>
                Close
            </Button>
        </Box>
    )
}

export default Sidebar