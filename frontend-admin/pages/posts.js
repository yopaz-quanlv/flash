import { useEffect, useState } from 'react'
import Layout from '../components/Layout'

export default function Posts() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_API_URL + '/api/posts')
      .then(res => res.json())
      .then(setPosts)
  }, [])

  return (
    <Layout>
      <h1 className="text-2xl font-semibold mb-4">Posts</h1>
      <table className="min-w-full border border-gray-200 bg-white">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="px-4 py-2 border-b">ID</th>
            <th className="px-4 py-2 border-b">Title</th>
          </tr>
        </thead>
        <tbody>
          {posts.map(p => (
            <tr key={p.ID} className="odd:bg-gray-50">
              <td className="px-4 py-2 border-b">{p.ID}</td>
              <td className="px-4 py-2 border-b">{p.Title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  )
}
