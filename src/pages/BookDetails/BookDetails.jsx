import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoreDB } from '../../addToDB';

const BookDetails = () => {
    const {id} = useParams();
    const bookId = parseInt(id);
    const data = useLoaderData();
    const singleBook = data.find(book => book.bookId === bookId);
    const { bookName, image} = singleBook || {};


    const handleMarkAsRead = (id) => {
        // Store with Id
        // Where to store
        // array or collection
        // if boll already exist the show a alart
        // if book not exist then push in the collction or array
        addToStoreDB(id);
    }


    return (
      <div className="w-2/3 mx-auto">
        <img className="w-48" src={image} alt="" />
        <h5>{bookName}</h5>
        <button onClick = {()=>handleMarkAsRead(id)} className="btn btn-accent m-2">Mark as Read</button>
        <button className="btn btn-info m-2">Add to WishList</button>
      </div>
    );
};

export default BookDetails;
