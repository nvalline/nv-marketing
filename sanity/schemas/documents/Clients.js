// Clients.js

export default {
  name: 'clients',
  type: 'document',
  title: 'Clients',
  fields: [
    {
      name: 'clientName',
      type: 'string',
      title: 'Client Name',
    },
    {
      name: 'url',
      type: 'url',
      title: 'Client URL',
    },
    {
      name: 'logo',
      type: 'image',
      title: 'Client Logo',
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt Text',
        },
      ],
    },
    {
      name: 'mobileHeight',
      type: 'number',
      title: 'Mobile Height (px)',
    },
    {
      name: 'mobileWidth',
      type: 'number',
      title: 'Mobile Width (px)',
    },
    {
      name: 'desktopHeight',
      type: 'number',
      title: 'Desktop Height (px)',
    },
    {
      name: 'desktopWidth',
      type: 'number',
      title: 'Desktop Width (px)',
    },
  ],
}
