const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query getAllBlogs {
      allMdx {
        nodes {
          frontmatter {
            title
            slug
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `);
  const postTemplate = path.resolve("./src/templates/blog-template.js");
  data.allMdx.nodes.forEach((node) => {
    actions.createPage({
      path: "/blogs/" + node.frontmatter.slug,
      component: `${postTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
      context: { slug: node.frontmatter.slug },
    });
  });
};
