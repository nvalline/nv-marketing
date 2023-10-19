// Call To Action Items

export default {
  name: 'callToActions',
  type: 'document',
  title: 'Call to Actions',
  fields: [
    {
      name: 'page',
      type: 'array',
      title: 'Web Page Location',
      description: 'Which page the CTA will be injected.',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'home', value: 'home'},
          {title: 'about', value: 'about'},
          {title: 'services', value: 'services'},
          {title: 'contact', value: 'contact'},
        ],
      },
    },
    {
      name: 'header',
      type: 'string',
      title: 'Header',
    },
    {
      name: 'subHeader',
      type: 'string',
      title: 'Sub-Header',
    },
    {
      name: 'btnText',
      type: 'string',
      title: 'Button Text',
    },
  ],
}
