import React, { useEffect } from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import { storeEvents } from './store/redux';
import ListContainer from './components/ListContainer';
import { getEvents } from './api/api-fetcher';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getEvents();
                if (Array.isArray(result)) {
                    dispatch(storeEvents(result));
                }
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);


    return (
        <ListContainer></ListContainer>
    );
}

export default App;
