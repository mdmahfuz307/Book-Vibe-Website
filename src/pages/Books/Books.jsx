import React, { useState, useEffect } from 'react';
import booksData from '../../booksData.json';

const Books = () => {
    const [allbooks, setAllBooks] = useState([]);

    useEffect(() => {
        fetch('booksData.json')
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    }, []);
    return (
        <div>
            <h1>Hello ami Books</h1>
        </div>
    );
};

export default Books;