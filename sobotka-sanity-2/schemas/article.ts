export default {
    name: 'article',
    type: 'document',
    title: 'Article',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title'
      },
      {
        name: 'picture',
        type: 'image',
        title: 'Picture'
      },
      {
        name: 'author',
        type: 'string',
        title: 'Author'
      },
      {
        name: 'category',
        type: 'string',
        title: 'Category'
      },
      {
        name: 'intro',
        type: 'string',
        title: 'Intro'
      },
      {
        name: 'text',
        type: 'array',
        title: 'Text',
        of: [
          {
            type: 'block'
          }
        ]
      },
      {
        name: 'date',
        type: 'string',
        title: 'Date'
      },
      {
        name: 'main',
        type: 'boolean',
        title: 'Main'
      },
    ]
  }