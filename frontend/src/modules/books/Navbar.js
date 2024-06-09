import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import SearchBar from './SearchBar';
import BookListIcon from '@mui/icons-material/MenuBook';
import ReadingList from './ReadingList';
import Drawer from '@mui/material/Drawer';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';

const Navbar = ({ query, setQuery, books, readingList, setReadingList, removeBookFromList }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    if (readingList.length === 0) {
      setDrawerOpen(false);
    }
  }, [readingList]);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <AppBar 
      position="static" 
      elevation={0} 
      sx={{ 
        backgroundColor: 'transparent', 
        marginBottom: '1%', 
        borderBottom: '1px solid #ccc' 
      }}
    >
      <Toolbar sx={{ marginTop: '1%', marginBottom: '1%', justifyContent: 'space-between' }}>
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ color: '#5ACCCC' }}>
          <img src="assets/logo/ello-logo.png"alt="logo" className='w-[5rem]'/>

        </IconButton>
        <Box sx={{ flexGrow: 5, display: 'flex', justifyContent: 'center' }}>
          <SearchBar query={query} setQuery={setQuery} books={books} addToReadingList={setReadingList} />
          <IconButton edge="end" color="inherit" onClick={toggleDrawer(true)}           
          sx={{ 
            color: '#5ACCCC', 
            '&:hover': {
              backgroundColor: 'transparent'
            } 
          }} className='ml-[5%]'>
          <Badge badgeContent={readingList.length} color="secondary">
            <BookListIcon />
          </Badge>
        </IconButton>
        </Box>
      </Toolbar>
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <div style={{ width: '30rem' }} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
         <div className='flex justify-between m-4'>
          <h1 className='font-light text-[#335c6e] text-xl'>My Reading List</h1>
          <IconButton onClick={toggleDrawer(false)} sx={{ color: '#5ACCCC' }}>
            <CloseIcon />
          </IconButton>
         </div>
          <ReadingList readingList={readingList} removeBookFromList={removeBookFromList} />
        </div>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
