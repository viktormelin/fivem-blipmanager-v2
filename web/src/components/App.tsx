import './App.css'
import {Box, List, ListSubheader, ThemeProvider} from "@mui/material";
import {grey} from "@mui/material/colors";
import React, {useState} from "react";
import {IBlipData, ICategory, IFetchedData} from "../../../types/types";
import {theme} from "../theme/theme";
import ListItemMod from "./ListItemMod";
import {useNuiEvent} from "../hooks/useNuiEvent";
import {fetchNui} from "../utils/fetchNui";

/*const MockData = [
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
  {
    id: 4,
    blips: [12399, 123798],
    category: "Category2",
    label: "I'm a Blip label",
    description: "I'm a Blip description",
    currentState: true,
  },
  {
    id: 5,
    blips: [12399, 123798],
    category: "Category2",
    label: "I'm a Blip label",
    description: "I'm a Blip description",
    currentState: true,
  },
  {
    id: 6,
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


debugData([
  {
    action: 'setData',
    data: {blips: MockData, categories: MockCategories}
  },
])

debugData([
  {
    action: 'setVisible',
    data: true
  },
])*/


const AppWrapper: React.FC = () => {
  return (
      <ThemeProvider theme={theme}>
        <App/>
      </ThemeProvider>
  )
}

const App: React.FC = () => {
  const [blips, setBlips] = useState<IBlipData[]>([])
  const [categories, setCategories] = useState<ICategory[]>([])
  
  useNuiEvent<IFetchedData>('setData', ({categories, blips}) => {
    setBlips(blips)
    setCategories(categories)
  })
  
  const toggleHandler = (data: IBlipData) => {
    fetchNui('toggleBlip', data).then(r => {
      setBlips(blips.map((blip) =>
          blip.unique === data.unique ? {...blip, currentState: !data.currentState} : blip
      ))
    })
  }
  
  return (
      <div className="App">
        <Box sx={{
          display: 'flex',
          width: '50rem',
          height: '30rem',
          overflowY: 'scroll',
          backgroundColor: grey[900],
          borderRadius: '0.5rem',
          '&::-webkit-scrollbar': {
            width: '0.5rem'
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'primary.main',
            borderRadius: '0.5rem'
          },
        }}>
          {/*<Sidebar/>*/}
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            padding: '1rem',
            width: '100%'
          }}>
            {categories.map((category) => (
                <List
                    key={category.name}
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.5rem',
                      width: '100%',
                    }}
                    subheader={<ListSubheader>{category.label}</ListSubheader>}
                >
                  {blips.map((blip) => {
                    if (blip.category === category.name) {
                      return (
                          <ListItemMod key={blip.unique} data={blip} toggleHandler={toggleHandler}/>
                      )
                    }
                  })}
                </List>
            ))}
          </Box>
        </Box>
      </div>
  )
}

export default AppWrapper
