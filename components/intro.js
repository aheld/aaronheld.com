import { CMS_NAME } from '../lib/constants'
import { Header } from '@fluentui/react-northstar'

export default function Intro() {
  return (
        <Header
        as="h1"
        content={CMS_NAME}
  
        description={{
          content: 'Work and Life both have deadlines',
          as: 'span',
    }}
  />
  )
}
