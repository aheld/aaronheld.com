import DateFormatter from '../components/date-formatter'
import CoverImage from '../components/cover-image'
import Link from 'next/link'
import { Button, Flex, Image, Text, Card, Avatar, Box } from '@fluentui/react-northstar'


export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  if (!coverImage) coverImage = 'https://fabricweb.azureedge.net/fabric-website/assets/images/wireframe/square-image.png'
  return (
       <Flex gap="gap.medium" padding="padding.medium" debug>
        <Card
            fluid
            centered
            horizontal
            elevated
            aria-roledescription="The Main Story on my Blog"
          >
          <Card.Header>
      <Flex gap="gap.small" column hAlign="center">
        <Avatar
          image={author.picture}
          name={author.name}
          size='largest'
        />
        <Text content={title} weight="bold" />
        <DateFormatter dateString={date} />
        <Text content={author.name} size="small" />
      </Flex>
    </Card.Header>
    <Card.Body>
      {excerpt}
      <Text content="Read More" />
    </Card.Body>
  </Card>
  </Flex>
  )
}
