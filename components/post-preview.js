import DateFormatter from '../components/date-formatter'
import CoverImage from './cover-image'
import Link from './link'

import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box'
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    // display: 'flex',
    minWidth: 240,
    width:240
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
}));

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  const classes = useStyles()
  slug = "/posts/" + slug
  return (
      <Card variant="outlined" className="elevation4">
        {coverImage && <CardMedia
          className={classes.cover}
          image={coverImage}
          height={150}
          width={150}
        />}
    <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {title}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Written by {author.name} <br/>
            on <DateFormatter dateString={date}/>
          </Typography>
        </CardContent>
        <CardActions>
        <Button size="medium" color="primary" href={slug}>
          Read
        </Button>
        </CardActions>
      </div>
      </Card>
  )
}
