import PostPreview from '../components/post-preview'
import { AppBar, Toolbar, IconButton, Typography, Box, Button } from '@material-ui/core'

export default function MoreStories({ posts }) {
  return (
    <section>
<Typography component="h2" variant="h2">
  More Stories
</Typography>

        <Box display="flex"
        flexWrap="wrap">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </Box>
      </section>
  )
}
