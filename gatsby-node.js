const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query getAllBlogs {
      allMdx {
        edges {
          node {
            frontmatter {
              slug
            }
            internal {
              contentFilePath
            }
          }
        }
      }
    }
  `);
  const postTemplate = path.resolve("./src/templates/blogs.js");
  data.allMdx.edges.forEach((edge) => {
    actions.createPage({
      path: "/blogs/" + edge.node.frontmatter.slug,
      component: `${postTemplate}?__contentFilePath=${edge.node.internal.contentFilePath}`,
      context: { slug: edge.node.frontmatter.slug },
    });
  });
};
