import React from 'react'
import Inputs from './Inputs';
import Grid from '@mui/material/Grid';
import ItemList from './ItemList';



function Main({items, checkingHandler, newItem, setNewItem, submitHandler, handlerDelete, querySearch, setQuerySearch}) {
  return (

    <Grid
        container
        justify="center"
        alignItems="center"
        direction="column" 
    >
        <Inputs 
            newItem={newItem}
            setNewItem={setNewItem}
            submitHandler={submitHandler}
            querySearch={querySearch}
            setQuerySearch={setQuerySearch}
        />
        <ItemList 
            items={items}
            checkingHandler={checkingHandler}
            handlerDelete={handlerDelete}
        />


    </Grid>


  )
}

export default Main