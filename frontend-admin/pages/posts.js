import { useEffect, useState } from 'react'

export default function Posts() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_API_URL + '/api/posts')
      .then(res => res.json())
      .then(setPosts)
  }, [])

  return (
    <div>
      <h1>Posts</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {posts.map(p => (
            <tr key={p.ID}>
              <td>{p.ID}</td>
              <td>{p.Title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
