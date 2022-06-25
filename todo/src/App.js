
import './App.css';
import { useState, useEffect } from 'react'
import apiRequest from './apiRequest';
import NavBar from './NavBar';
import Main from './Main';
import Footer from './Footer';

function App() {

  const API_URL = 'http://localhost:3500/items';

  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [querySearch, setQuerySearch] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if(!response.ok) throw Error('Did not receive expected data');
        const fetchedItems = await response.json();
        setItems(fetchedItems);
      } catch(err) {
        console.log(err.stack);
      }
    }
    setTimeout(() => fetchItems(), 200);
  }, []);

  const checkingHandler = async (id) => {
    const updatedItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
    setItems(updatedItems);

    const singleItem = updatedItems.filter(item => item.id === id);
    const updateOptions = {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({checked: singleItem[0].checked})
    }
    const reqUrl = `${API_URL}/${id}`;
    await apiRequest(reqUrl, updateOptions);
  }

  const addHandler = async (item) => {
    const itemId = items.length > 0 ? items[items.length - 1].id + 1 : 1;
    const checked = false;
    const addedItem = {id: itemId, checked: checked, name: item}
    const listItems = [...items, addedItem];
    setItems(listItems);

    const postOptions = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(addedItem)
    }
    await apiRequest(API_URL, postOptions);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    if(!newItem) return;
    addHandler(newItem);
    setNewItem('');
  }

  const handlerDelete = async (id) => {
    const listItems = items.filter((item) => item.id !== id)
    setItems(listItems);
    
    const deletedItem = items.filter((item) => item.id === id)

    const deleteOptions = {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(deletedItem)
    }
    const reqUrl = `${API_URL}/${id}`;
    await apiRequest(reqUrl, deleteOptions);
  }

  return (
    <div className="App">
      <NavBar />
      <Main 
        items={items.filter((item) => ((item.name).toLowerCase()).startsWith(querySearch.toLowerCase()))}
        checkingHandler={checkingHandler}
        newItem={newItem}
        setNewItem={setNewItem}
        submitHandler={submitHandler}
        handlerDelete={handlerDelete}
        querySearch={querySearch}
        setQuerySearch={setQuerySearch}
      />
      <Footer />
    </div>
  );
}

export default App;
