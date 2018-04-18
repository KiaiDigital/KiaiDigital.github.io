module.exports = {
  siteMetadata: {
    title: 'Kiai Digital'
  },
  pathPrefix: 'https://github.com/KiaiDigital/KiaiDigital.github.io.git',
  plugins: [ 
    'gatsby-plugin-styled-components',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    }
  ]
}