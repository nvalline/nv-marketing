// Service Description Items

export default {
  name: 'serviceItem',
  type: 'object',
  title: 'Service Description Item',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Item Title',
      description: 'Bold service highlight',
    },
    {
      name: 'content',
      type: 'text',
      title: 'Service Item Content',
    },
  ],
}
