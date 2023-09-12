// Testimonials.js

export default {
  name: 'testimonials',
  type: 'document',
  title: 'Testimonials',
  fields: [
    {
      name: 'company',
      type: 'string',
      title: 'Company',
    },
    {
      name: 'author',
      type: 'string',
      title: 'Author',
      description: 'First Name, Last Initial (John D.)',
    },
    {
      name: 'position',
      type: 'string',
      title: 'Job Position',
    },
    {
      name: 'rating',
      type: 'number',
      title: 'Rating',
      options: {
        list: [1, 2, 3, 4, 5],
      },
    },
    {
      name: 'content',
      type: 'text',
      title: 'Testimonial Content',
    },
  ],
}
