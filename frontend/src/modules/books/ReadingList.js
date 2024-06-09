import React from 'react';
import { List, ListItem, ListItemAvatar, Avatar, Button, Box, Typography } from '@mui/material';
import SearchOffIcon from '@mui/icons-material/SearchOff';

const ReadingList = ({ readingList, removeBookFromList }) => (
  <div style={{ border: '1px solid #ccc', zIndex: 1, padding: '1rem' }}>
    {readingList.length === 0 ? (
      <div className='text-center'>
        <SearchOffIcon className='text-[10rem] text-[#F76434]'/>
          <h1 className='font-light text-lg'>No data available</h1>
          <h1 className='font-light text-lg mt-2'>Return to main page to add books to your reading list</h1>
          <Button onClick={() => removeBookFromList()}  className='mt-2'>
              Back
            </Button>

      </div>
    ) : (
      <List>
        {readingList.map((book) => (
          <ListItem key={book.title} sx={{ display: 'flex', alignItems: 'center' }}>
            <ListItemAvatar>
              <Avatar src={book.coverPhotoURL} />
            </ListItemAvatar>
            <Box sx={{ flexGrow: 1, marginLeft: '1rem', marginRight: '1rem' }}>
              <Typography variant="subtitle1">{book.title}</Typography>
              <Typography variant="body2" color="textSecondary">{book.author}</Typography>
            </Box>
            <Button onClick={() => removeBookFromList(book.title)} variant="outlined" color="secondary">
              Remove
            </Button>
          </ListItem>
        ))}
      </List>
    )}
  </div>
);

export default ReadingList;
