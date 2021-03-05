import PostPreview from '../components/post-preview'
import { Header, Box } from '@fluentui/react-northstar'

export default function MoreStories({ posts }) {
  return (
    <section>
       <Header
        as="h2"
        content="More Stories"
  
        description={{
          content: 'Work and Life both have deadlines',
          as: 'span',
        }}
        />
        <Box>
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
