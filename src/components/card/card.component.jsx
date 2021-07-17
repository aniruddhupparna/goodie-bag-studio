import React from 'react'
import './card.styles.css';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



export default function DetailsCard({title, details, cardLinks=[], image}) {
  return (
    <Card className="card">
      <CardActionArea>
        <CardMedia
          className="card-media"
          image={image}
          src={image}
          title="Member"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
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