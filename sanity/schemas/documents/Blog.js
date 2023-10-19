// Blog.js

export default {
  name: 'posts',
  type: 'document',
  title: 'Blog Posts',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Blog Title',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
      },
    },
    {
      name: 'author',
      type: 'string',
      title: 'Author',
    },
    {
      name: 'date',
      type: 'date',
      title: 'Post Date',
    },
    {
      name: 'excerpt',
      type: 'text',
      title: 'Excerpt',
    },
    {
      name: 'coverImage',
      type: 'image',
      title: 'Cover Image',
    },
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [{type: 'block'}],
    },
  ],
}
