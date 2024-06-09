import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Navbar from './modules/books/Navbar';
import BookList from './modules/books/BookList';
import { gql, useQuery } from '@apollo/client';
import './styles/tailwind.styles.css';
import { GET_BOOKS } from './modules/books/services/books-api';


const App = () => {
  const [query, setQuery] = useState('');
  const [readingList, setReadingList] = useState([]);
  const { data, loading, error } = useQuery(GET_BOOKS);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error fetching data: {error.message}</div>;

  const addToReadingList = (book) => {
    setReadingList([...readingList, book]);
  };

  const removeBookFromList = (bookTitle) => {
    setReadingList(readingList.filter(book => book.title !== bookTitle));
  };

  return (
    <Box>
      <Navbar
        query={query}
        setQuery={setQuery}
        books={data ? data.books : []}
        readingList={readingList}
        setReadingList={addToReadingList}
        removeBookFromList={removeBookFromList}
      />
      <Box padding={2}>
        <BookList books={data ? data.books : []} />
      </Box>
    </Box>
  );
};

export default App;
