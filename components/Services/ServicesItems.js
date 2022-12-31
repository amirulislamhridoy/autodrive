import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ServicesItem from './ServicesItem';

const SevicesItems = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3000/api/serviceItems')
            .then(function (response) {
                setItems(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])
    return (
        <section className='max-w-7xl mx-1 xl:mx-auto sm:grid grid-cols-2 lg:grid-cols-3 gap-5 my-7 sm:my-10'>
            {items.map(item => <ServicesItem key={item._id} item={item}></ServicesItem>)}
        </section>
    );
};

export default SevicesItems;