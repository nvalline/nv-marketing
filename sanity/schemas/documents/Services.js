// Services.js

export default {
  name: 'services',
  type: 'document',
  title: 'Services',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Service Name',
    },
    {
      name: 'icon',
      type: 'image',
      title: 'Icon',
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt Text',
        },
      ],
    },
    {
      name: 'image',
      type: 'image',
      title: 'Service Main Image',
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt Text',
        },
      ],
    },
    {
      name: 'excerpt',
      type: 'text',
      title: 'Excerpt',
    },
    {
      name: 'title',
      type: 'string',
      title: 'Page Detail Service Name',
    },
    {
      name: 'description',
      type: 'array',
      title: 'Services Description',
      of: [{type: 'serviceItem'}],
    },
  ],
}
