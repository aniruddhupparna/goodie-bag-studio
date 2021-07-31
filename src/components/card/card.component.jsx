import React from 'react'
import './card.styles.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PlaceholderImg from '../../assets/images/image-placeholder.jpg';

const useStyles =  makeStyles({
  root: {fontWeight: 'bold'}
});

export default function DetailsCard({title, details, cardLinks=[], image}) {
  const classes = useStyles();
  return (
    <Card className="card">
      <CardActionArea>
        <CardMedia
          className="card-media"
          image={image || PlaceholderImg}
          src={image || PlaceholderImg}
          title={image}
        />
        <CardContent >
          <Typography gutterBottom variant="h5" component="h2" className={classes.root}>
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" >
            {details}
          </Typography>
        </CardContent>
      </CardActionArea>
     
      <CardActions>
      { 
        cardLinks.map(link => (<a href={link.url} target="_blank" rel="noreferrer">
          <Button color="primary">{link.url ? link.text : ''}</Button>
          </a>))
      }
      </CardActions>
    </Card>
  );
}