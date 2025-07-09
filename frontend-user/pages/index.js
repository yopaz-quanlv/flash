import Head from 'next/head'

export async function getStaticProps() {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/api/posts')
  const posts = await res.json()
  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Posts</title>
      </Head>
      <h1>Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.ID}>{post.Title}</li>
        ))}
      </ul>
    </div>
  )
}
