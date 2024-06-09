import React, { useState } from 'react';
import { List, ListItem, ListItemText, Button } from '@mui/material';
import './styles/BookList.css';



const BookList = ({ books, addBookToList }) => {
  const [visibleBooks, setVisibleBooks] = useState(8);

  const handleLoadMore = () => {
    setVisibleBooks(prevVisibleBooks => prevVisibleBooks + 8);
  };

  return (
    <>
    <div className='w-[90%] mt-5 m-auto'>
    <h1 className='font-light'>All Books</h1>
      <List className='flex flex-wrap justify-center'>
        {books.slice(0, visibleBooks).map((book) => (
          <ListItem key={book.title} className='book-item !pl-0 !pr-0'>
            <div className='book-details'>
              <img src={book.coverPhotoURL} alt={book.title}/>
              <ListItemText
                primary={<span className="book-title">{book.title}</span>}
                secondary={<span className="book-author">{`by ${book.author}`}</span>}
              />
            </div>
          </ListItem>
        ))}
      </List>
      {visibleBooks < books.length && (
        <div className="text-center">
          <Button onClick={handleLoadMore}>Load More</Button> 
        </div>
      )}
    </div>
    </>
  );
};

export default BookList;
