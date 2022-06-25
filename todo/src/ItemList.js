import React from 'react'

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Checkbox from '@mui/material/Checkbox';

function ItemList({items, checkingHandler, handlerDelete}) {

  return (
    
    <Box
    pb={5}
    pt={5}
    sx={{
        bgcolor: '#F89344',
        borderRadius: '5px',
        width: '50vw',
        height: 'auto',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',

    }}    
>

    <List sx={{ width:'70%' }}>
        {items.map((item) => (
                <ListItem key={item.id} sx={{marginBottom:'15px',  bgcolor: '#F4F4F4', borderRadius:'10px', color:'#585959'}}>
                    <Checkbox checked={item.checked} onChange={() => checkingHandler(item.id)}/>

                    {item.checked === true ? <ListItemText sx={{textDecoration:'line-through'}} primary={item.name} /> : <ListItemText primary={item.name}/> }
                    <IconButton onClick={() => handlerDelete(item.id)}>    
                        <DeleteIcon sx={{color:'#585959', fontSize:'1.4em' }}/>
                    </IconButton>
                </ListItem>
        ))}
    </List>


</Box>

  )
}

export default ItemList