// Commitments.js

export default {
  name: 'commitments',
  type: 'document',
  title: 'Our Commitments',
  fields: [
    {
      name: 'header',
      type: 'string',
      title: 'Commitment Header',
    },
    {
      name: 'position',
      type: 'number',
      title: 'Commitment Position',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Commitment Description',
    },
  ],
}
