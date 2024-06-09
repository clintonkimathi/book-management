import React, { useState, useEffect } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import ReadingList from './ReadingList';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';


const SearchBar = ({ query, setQuery, books }) => {
  const [readingList, setReadingList] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const addToReadingList = (book) => {
    setReadingList([...readingList, book]);
  };

  const removeBookFromList = (bookTitle) => {
    setReadingList(readingList.filter(book => book.title !== bookTitle));
  };

  const handleAddToReadingList = (option) => {
    addToReadingList(option);
    setQuery('');
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  useEffect(() => {
    console.log(readingList);
    if (readingList.length === 0) {
      setDrawerOpen(false);
    }
  }, [readingList]);

  return (
    <section className='mt-6 text-center flex justify-between'>
      <Autocomplete
        options={books.map((book) => (book))}
        getOptionLabel={(option) => option.title}
        value={null}
        inputValue={query || ''}
        onInputChange={(event, newInputValue) => {
          setQuery(newInputValue);
        }}
        sx={{
          width: '90%' 
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
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              {option.title}
              <Button onClick={() => handleAddToReadingList(option)}>Add</Button>
            </div>
          </li>
        )}
      />
      <IconButton onClick={() => setDrawerOpen(true)}>
        <Typography variant="">
        <span className='font-rubik font-normal text-base mr-1'>Reading List</span>
        <Badge badgeContent={readingList.length} color="success">
        <MailIcon color="action" className='text-base'/>
      </Badge>
        </Typography>
        <ExpandMoreIcon />
      </IconButton>
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerClose}
      >
        <ReadingList readingList={readingList} removeBookFromList={removeBookFromList} onClose={handleDrawerClose} />
      </Drawer>
    </section>
  );
};

export default SearchBar;
