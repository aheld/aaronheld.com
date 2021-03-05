import DateFormatter from '../components/date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'
import { Button, Flex, Image, Text, Card, Avatar, Box } from '@fluentui/react-northstar'


export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
      <Card
    aria-roledescription="Story Preview"
    horizontal
    styles={{
      float:'left',
      width: '400px',
      height: '200px'
    }}
    >
    <Card.Preview horizontal>
      <Flex column>
        <Avatar
        image={author.picture}
        name={author.name}
        size='large'
        />

        <DateFormatter dateString={date} />
        </Flex>
    </Card.Preview>
    <Card.Body>
        <Flex column>
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <Text content={title} size="large" weight="bold" />
          </Link>
        <Image src={coverImage} />
        <Text content={excerpt}  size="small"  />
        </Flex>
      </Card.Body>
  </Card>
    // <div>
    //   <div className="mb-5">
    //     {coverImage && <CoverImage
    //       slug={slug}
    //       title={title}
    //       src={coverImage}
    //       height={278}
    //       width={556}
    //     />}
    //   </div>
    //   <h3 className="text-3xl mb-3 leading-snug">
    //     <Link as={`/posts/${slug}`} href="/posts/[slug]">
    //       <a className="hover:underline">{title}</a>
    //     </Link>
    //   </h3>
    //   <div className="text-lg mb-4">
    //     <DateFormatter dateString={date} />
    //   </div>
    //   <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
    //   <Avatar name={author.name} picture={author.picture} />
    // </div>
  )
}
