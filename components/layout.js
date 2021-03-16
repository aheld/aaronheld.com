import BlogAlert from './blogalert'
import Footer from '../components/footer'
import Meta from '../components/meta'
import Link from '../components/link'
import { AppBar, Toolbar, IconButton, Typography, makeStyles, Button } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import { CMS_NAME } from '../lib/constants'

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  root: {
    // flexGrow: 1,
    margin: 25
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}));

export default function Layout({ preview, children }) {
  const classes = useStyles();
  const title = CMS_NAME
  return (
    <>
      <Meta/>
      <Box className={classes.root}>
        <BlogAlert preview={preview} />

        <Toolbar>
        <Button size="small" ><Link href="/">Home</Link></Button>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
        >
          {title}
        </Typography>
        {/* <IconButton>
          <SearchIcon />
        </IconButton> */}
      </Toolbar>
      {/* <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
        {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={CMS_NAME}
            variant="body2"
            href={section.url}
            className={classes.toolbarLink}
          >
            {CMS_NAME}
          </Link>
        ))
      </Toolbar> */}


       
    
        <main>{children}</main>
      </Box>
      <Footer />
    </>
  )
}
