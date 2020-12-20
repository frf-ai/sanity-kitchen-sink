export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fdf1198ea9c78423c0ce391',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-tgzhx6cy',
                  apiId: 'f498a671-0b87-453c-9b9b-3e95e892a243'
                },
                {
                  buildHookId: '5fdf119879b527d5034e89e3',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-gvcph4tf',
                  apiId: 'c461e4b2-0339-4529-b96a-bfe688542200'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/frf-ai/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-gvcph4tf.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
