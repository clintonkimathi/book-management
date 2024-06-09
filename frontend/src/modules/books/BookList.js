import React, { useState } from 'react';
import { List, ListItem, ListItemText, Button } from '@mui/material';
import './styles/BookList.css';

const BookList = ({ books }) => {
  const [visibleBooks, setVisibleBooks] = useState(10);

  const handleLoadMore = () => {
    setVisibleBooks((prevVisibleBooks) => prevVisibleBooks + 10);
  };

  return (
    <>
      <div className='w-[90%] mt-5 m-auto'>
        <h1 className='font-light text-[#335c6e] text-2xl'>All Books</h1>
        {books.length === 0 ? (
          <p className="text-center mt-[10%]">Sorry,No books available at the moment</p>
        ) : (
          <>
            <List className='flex flex-wrap justify-center m-6'>
              {books.slice(0, visibleBooks).map((book) => (
                <ListItem key={book.title} className='book-item !pl-0 !pr-0'>
                  <div className='book-details'>
                    <img src={book.coverPhotoURL} alt={book.title} />
                    <ListItemText
                      primary={<span className="book-title h-[4rem]">{book.title}</span>}
                      secondary={<span className="book-author">{`by ${book.author}`}</span>}
                    />
                  </div>
                </ListItem>
              ))}
            </List>
            {visibleBooks < books.length && (
              <div className="text-center">
                <Button onClick={handleLoadMore} className='text-[#335c6e]'>Load More</Button>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default BookList;
