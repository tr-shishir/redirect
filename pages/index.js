export async function getStaticProps({ preview = false }) {
    const allPosts = await getAllPostsForHome(preview)
  
    return {
      props: { allPosts, preview },
      revalidate: 10,
    }
}

export async function getAllPostsFromWordPress(preview) {
const data = await fetchAPI(`
    query AllPosts {
    posts(first: 20, where: { orderby: { field: DATE, order: DESC } }) {
        edges {
        node {
            title
            excerpt
            slug
            date
        }
        }
    }
    }
`)

return data.posts
}