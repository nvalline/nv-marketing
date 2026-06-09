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
      type: 'reference',
      title: 'Author',
      to: [{ type: 'author' }],
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
      name: 'category',
      type: 'reference',
      title: 'Category',
      to: [{ type: 'category' }],
    },
    {
      name: 'tags',
      type: 'array',
      title: 'Tags',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    },
    {
      name: 'caption',
      type: 'array',
      title: 'Caption',
      of: [{type: 'block'}],
    },
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [{type: 'block'}],
    },
  ],
}
