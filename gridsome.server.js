// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const axios = require('axios')
const fs = require('fs')
const parseMD = require('./utils/parseMD')
module.exports = function (api) {
  api.chainWebpack((config, { isServer }) => {
    if (isServer) {
      // config.externals([
      //   nodeExternals({
      //     whitelist: [/^bulma/,/^vuetify/]
      //   })
      // ])
    }
  })

  api.loadSource( async store => {
    // put github data from 
    const { GITHUB_API_TOKEN, GITHUB_USERNAME } = process.env
    // get all repos, only public ones
    const { data: github_data = [] } = await axios.get(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`, {
        headers: { 'Authorization': `token ${GITHUB_API_TOKEN}` }
    }).then(function(response) {
      return response
    }).catch(function(err) {
      console.log(err)
    })
    github_data.forEach(project =>  {
      if ( project.stargazers_count > 1 ) {
        const contentType = store.addCollection({
          typeName: 'GithubProject'
        })
        // figure out how to pull badges somehow
        // dump all data inside, subfilter later
        const { id, name, node_id, html_url, created_at, updated_at, language, forks, stargazers_count, description = 'Default Description' } = project

        // get markdown file if exists
        var contents = parseMD(`project/${name}/index.md`)
        contentType.addNode({
          name, name,
          id: id,
          title: name,
          contents: contents,
          created_at: created_at,
          updated_at: updated_at,
          html_url: html_url,
          language: language,
          forks: forks,
          stargazers_count: stargazers_count,
          description: description,
          data: project
        })
      }
    })
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api
  })
}
