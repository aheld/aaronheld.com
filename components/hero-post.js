import DateFormatter from '../components/date-formatter'
import CoverImage from '../components/cover-image'
import Link from '../components/link'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'


const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
}));

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  if (!coverImage) coverImage = '/assets/blog/unsplash/janis-beitins-NalJfNwE59I-unsplash.jpg'
  const classes = useStyles();

  return (
    <Paper className={classes.mainFeaturedPost} style={{ backgroundImage: `url(${coverImage})` }}>
       {/* Increase the priority of the hero background image */}
       {<img style={{ display: 'none' }} src={coverImage} alt="Story intro image" />}
       <div className={classes.overlay} />
      <Grid container>
        <Grid item md={6}>
          <div className={classes.mainFeaturedPostContent}>
            <Typography component="h1" variant="h4" color="inherit" gutterBottom>
              {title}
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              {excerpt}
            </Typography>
            <Button href={`/posts/${slug}`} variant="contained" color="primary">
              Read Post
            </Button>
          </div>
        </Grid>
      </Grid>
    </Paper>

       )
}
