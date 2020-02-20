export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5e4ecaa1d652c7eaabc0444b',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-mridgfe3',
                  apiId: '2e009ec6-93c6-4d30-b394-bba8d68f12c2'
                },
                {
                  buildHookId: '5e4ecaa3453736da55478ee5',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-r7mhuhr9',
                  apiId: '6f139588-bade-48b3-8881-fdc3e1cdb663'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/DeveloperAdam-github/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-r7mhuhr9.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
