import { useState } from 'react'
import DeleteModal from './DeleteModal'

export default function PostTable({ posts, onDelete }) {
  const [selected, setSelected] = useState(null)
  return (
    <>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-2 text-left text-xs font-bold text-gray-500">ID</th>
            <th className="px-4 py-2 text-left text-xs font-bold text-gray-500">Title</th>
            <th className="px-4 py-2 text-left text-xs font-bold text-gray-500">CreatedAt</th>
            <th className="px-4 py-2 text-left text-xs font-bold text-gray-500">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {posts.map((p) => (
            <tr key={p.id}>
              <td className="px-4 py-2 whitespace-nowrap">{p.id}</td>
              <td className="px-4 py-2">{p.title}</td>
              <td className="px-4 py-2">{p.createdAt}</td>
              <td className="px-4 py-2 space-x-2">
                <button className="px-2 py-1 text-white bg-blue-500 rounded">Edit</button>
                <button onClick={() => setSelected(p)} className="px-2 py-1 text-white bg-red-500 rounded">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <DeleteModal
        open={!!selected}
        onClose={() => setSelected(null)}
        onConfirm={() => {
          onDelete(selected.id)
          setSelected(null)
        }}
      />
    </>
  )
}
