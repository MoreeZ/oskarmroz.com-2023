const path = require(`path`);
const fs = require("fs");

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

// Process text files to create PlainText nodes
exports.onCreateNode = async ({ node, actions, createNodeId, createContentDigest }) => {
  const { createNode, createParentChildLink } = actions;

  if (node.internal.type === "File" && node.extension === "txt") {
    const filePath = node.absolutePath;
    const content = fs.readFileSync(filePath, "utf8");

    const textNode = {
      id: createNodeId(`${node.id} >>> PlainText`),
      parent: node.id,
      children: [],
      internal: {
        type: "PlainText",
        mediaType: "text/plain",
        content: content,
        contentDigest: createContentDigest(content),
      },
      name: path.basename(filePath, ".txt"),
      relativePath: node.relativePath,
      relativeDirectory: node.relativeDirectory,
      content: content,
    };

    createNode(textNode);
    createParentChildLink({ parent: node, child: textNode });
  }
};
