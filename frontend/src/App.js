import React, { useState } from 'react';
import Container from '@mui/material/Container';
import SearchBar from './components/SearchBar';
import BookList from './components/BookList';
import { gql, useQuery } from '@apollo/client';
import './styles/tailwind.styles.css';

const GET_BOOKS = gql`
  query Books {
    books {
      author
      coverPhotoURL
      readingLevel
      title
    }
  }
`;

const App = () => {
  const [query, setQuery] = useState('');
  const { data, loading, error } = useQuery(GET_BOOKS);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error fetching data: {error.message}</div>;

  return (
    <Container className='flex w-full'>
      <section>
      <SearchBar query={query} setQuery={setQuery} books={data ? data.books : []}/>
      <BookList books={data ? data.books : []}/>    
      </section>
      <section>
      </section>
    </Container>
  );
};

export default App;
