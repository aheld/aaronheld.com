import DateFormatter from '../components/date-formatter'
import PostTitle from '../components/post-title'
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

export default function PostHeader({ title, coverImage, date, author }) {
  return (
    <>
<Typography component="h1" variant="h1">
  {title}
</Typography>
      <Avatar
        src={author.picture}
        alt={author.name}
        />
        <DateFormatter dateString={date} />
    </>
  )
}
