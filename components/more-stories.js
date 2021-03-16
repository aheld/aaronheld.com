import PostPreview from '../components/post-preview'
import { AppBar, Toolbar, IconButton, Typography, Grid, Button } from '@material-ui/core'

export default function MoreStories({ posts }) {
  return (
    <section>
<Typography component="h2" variant="h2">
  More Stories
</Typography>

         <Grid container spacing={3}>
        {posts.map((post) => (
          <Grid item md={4} sm={12} key={post.slug}>

          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
          </Grid>
        ))}
      </Grid>
      </section>
  )
}
