import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const postsDirectory = join(process.cwd(), 'posts')

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

export function getPostBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'date') {
      if (typeof(data.date) === 'object') {
        items[field] = data.date.toJSON() 
        return
      }
    }
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (data[field]) {
      items[field] = data[field]
    }
  })
  items.author = {name: 'Aaron Held', picture:'/assets/blog/authors/aheld_headshot.jpg'}
  if (items.excerpt === undefined) {
    let periodPos = content.indexOf('.')
    let excerpt = content.substring(0, periodPos + 1)
    periodPos = content.indexOf('.', periodPos)
    if (periodPos > 0) excerpt = content.substring(0, periodPos + 1)
    items.excerpt = excerpt
  }
  return items
}

export function getAllPosts(fields = []) {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return posts
}
