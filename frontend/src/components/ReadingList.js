import React from 'react';
import { List, ListItem, ListItemAvatar, Avatar, Button, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const ReadingList = ({ readingList, removeBookFromList, onClose }) => (
  <div style={{ border: '1px solid #ccc', zIndex: 1, width: '30rem' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px' }}>
      <Typography variant="h6">My Reading List</Typography>
      <IconButton onClick={onClose}>
        <CloseIcon />
      </IconButton>
    </div>
    <List>
      {readingList.map((book) => (
        <ListItem key={book.title}>
          <ListItemAvatar>
            <Avatar src={book.coverPhotoURL} />
          </ListItemAvatar>
          {book.title} by {book.author}
          <Button onClick={() => removeBookFromList(book.title)}>Remove</Button>
        </ListItem>
      ))}
    </List>
  </div>
);

export default ReadingList;
