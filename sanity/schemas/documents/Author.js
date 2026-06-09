// Author.js

export default {
  name: 'author',
  type: 'document',
  title: 'Authors',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'bio',
      type: 'text',
      title: 'Bio',
      description: 'Short credentials summary shown in the author bio box on blog posts.',
    },
    {
      name: 'url',
      type: 'url',
      title: 'Author URL',
      description: 'Optional link to an about or profile page for this author.',
    },
  ],
}
