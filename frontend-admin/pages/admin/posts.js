import { useState } from 'react'
import PostTable from '../../components/PostTable'

const dummyPosts = [
  { id: 1, title: 'First Post', createdAt: '2023-01-01' },
  { id: 2, title: 'Second Post', createdAt: '2023-01-02' },
  { id: 3, title: 'Third Post', createdAt: '2023-01-03' },
]

export default function AdminPosts() {
  const [posts, setPosts] = useState(dummyPosts)
  const [showSidebar, setShowSidebar] = useState(false)

  const handleDelete = (id) => {
    setPosts(posts.filter((p) => p.id !== id))
  }

  return (
    <div className="min-h-screen flex">
      {/* Mobile sidebar overlay */}
      {showSidebar && (
        <div
          className="fixed inset-0 bg-black/50 md:hidden"
          onClick={() => setShowSidebar(false)}
        />
      )}
      <aside
        className={`fixed inset-y-0 left-0 w-64 bg-gray-800 text-white transform md:relative md:translate-x-0 transition-transform ${showSidebar ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="p-4 text-xl font-bold">Admin</div>
        <nav className="p-4">
          <a href="/admin/posts" className="block py-2">
            Posts
          </a>
        </nav>
      </aside>
      <div className="flex-1 ml-0 md:ml-64">
        <header className="md:hidden p-4 bg-white shadow">
          <button onClick={() => setShowSidebar(true)} className="px-2 py-1 border rounded">
            Menu
          </button>
        </header>
        <main className="p-4">
          <h1 className="text-xl font-bold mb-4">Posts</h1>
          <div className="overflow-x-auto">
            <PostTable posts={posts} onDelete={handleDelete} />
          </div>
        </main>
      </div>
    </div>
  )
}
