'use client'

import React from 'react';
import { Grid2 as Grid, Button, Tooltip } from '@mui/material';
import { 
    Favorite as FavoriteIcon, 
    FavoriteBorder as FavoriteBorderIcon, 
    NorthEast as NorthEastIcon, 
    MoreVert as MoreVertIcon
} from '@mui/icons-material';

const ActionButtons = () => {
    const [isFavorite, setIsFavorite] = React.useState(false);
  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid>
        <Tooltip title="收藏">
          <Button variant="outlined" color="inherit" startIcon={isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          onClick={() => setIsFavorite(!isFavorite)}
          sx={{ 
            color: isFavorite ? 'red' : 'black',
            minWidth: 'auto',
            padding: '4px 20px'
          }}
          >
            收藏
          </Button>
        </Tooltip>
      </Grid>
      <Grid>
        <Tooltip title="分享">
          <Button variant="outlined" color="inherit" startIcon={<NorthEastIcon />}
          sx={{ 
            minWidth: 'auto',
            padding: '4px 20px'
          }}
          >
            分享
          </Button>
        </Tooltip>
      </Grid>
      <Grid>
        <Tooltip title="更多">
          <Button variant="outlined" color="inherit" startIcon={<MoreVertIcon />}
          sx={{ 
            minWidth: 'auto',
            padding: '4px 20px'
          }}
          >
            更多
          </Button>
        </Tooltip>
      </Grid>
    </Grid>
  );
};

export default ActionButtons;
