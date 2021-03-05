import { Avatar, Header } from '@fluentui/react-northstar'
import DateFormatter from '../components/date-formatter'
import PostTitle from '../components/post-title'

export default function PostHeader({ title, coverImage, date, author }) {
  return (
    <>
        <Header
        as="h1"
        content={title}
        />
      <Avatar
        image={author.picture}
        name={author.name}
        size='medium'
        />
        <DateFormatter dateString={date} />
    </>
  )
}
