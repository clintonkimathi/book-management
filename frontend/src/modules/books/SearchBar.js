import React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const SearchBar = ({ query, setQuery, books, addToReadingList }) => {
  const handleAddToReadingList = (option) => {
    addToReadingList(option);
    setQuery('');
  };

  return (
    <Autocomplete
      options={books.map((book) => ({ title: book.title, author: book.author, coverPhotoURL: book.coverPhotoURL }))}
      getOptionLabel={(option) => option.title}
      inputValue={query}
      onInputChange={(event, newInputValue) => {
        setQuery(newInputValue);
      }}
      sx={{
        width: '50%'
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search Books"
          fullWidth
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: '20px',
              boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
            },
          }}
        />
      )}
      renderOption={(props, option) => (
        <li {...props}>
          <div className="flex items-center justify-between w-full">
            {option.title}
            <Button onClick={() => handleAddToReadingList(option)}>Add to Reading List</Button>
          </div>
        </li>
      )}
    />
  );
};

export default SearchBar;
