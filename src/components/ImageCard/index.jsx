import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles';
import { Collapse } from '@material-ui/core';


const ImageCard = ({ place, checked }) => {

  const classes = useStyles();
  console.log(place)
  return (
    <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})} >
      <Card className={classes.root}>
        <CardMedia
          component="img"
          alt=""
          image={place.imageUrl}
          className={classes.media}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h1" className={classes.title}>
            {place.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.desc}>
            {place.description}
          </Typography>
        </CardContent>
      </Card>
    </Collapse>

  );
}

export default ImageCard