import React from 'react'
import { useRef } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import AddIcon from '@mui/icons-material/Add';

function Inputs({newItem, setNewItem, submitHandler, querySearch, setQuerySearch}) {

    const inputRef = useRef();

  return (
    <Box
    mt={20}
    mb={10}
    sx={{
            bgcolor: '#F89344',
            width: '50vw',
            height: 'auto',
            borderRadius: '5px'

        }}    
>
    <TextField 
        sx={{ width: '50%', bgcolor: '#F4F4F4', margin:'15px' }}
        id="outlined-search"
        type='search'
        label="Search" 
        variant="filled" 
        margin="normal"
        onChange={(e) => {setQuerySearch(e.target.value)}}
        value={querySearch}
    />


        <form onSubmit={submitHandler}>
            <TextField 
                sx={{ width: '50%', bgcolor: '#F4F4F4', margin:'15px' }}
                id="add-item"
                type='text'
                ref={inputRef}
                onChange={(e) => {setNewItem(e.target.value)}}
                value={newItem}
                label="Add item" 
                variant="filled" 
                InputProps={{endAdornment:
                    
                    <Button
                        type="submit"
                        onClick={ () => { inputRef.current.focus() }}
                        > <AddIcon sx={{color:'#585959', fontSize:'25px' }} />
                    </Button>
                    }}
            />
        </form>

</Box>
  )
}

export default Inputs