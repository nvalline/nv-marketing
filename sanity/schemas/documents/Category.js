// Category.js

export default {
  name: 'category',
  type: 'document',
  title: 'Categories',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Category Title',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
      },
    },
  ],
}
