import './SuccessStory.css';
import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const SuccessStory = (props) => {
  const {itemData} = props
  return (
    <div className="success-story-container">
        <div className="success-story-imagelist">
            <ImageList sx={{
        width: '90%',
        display: 'grid',
        gap: '16px', // Adjust gap as needed
        gridTemplateColumns: 'repeat(4, minmax(200px, 1fr)) !important', // Default value for larger screens
        '@media (max-width: 825px)': {
          gridTemplateColumns: 'repeat(3, minmax(175px, 1fr)) !important',
        },
        '@media (max-width: 540px)': {
          gridTemplateColumns: 'repeat(2, minmax(150px, 1fr)) !important', // Adjust values for smaller screens
        },
      }}
      cols={4}>
            {itemData.map((item) => (
                <ImageListItem key={item.img}>
                <img
                    src={`${item.img}?w=200&h=200&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=200&h=200&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                />
                </ImageListItem>
            ))}
            </ImageList>
        </div>
    </div>
  );
}

export default SuccessStory;