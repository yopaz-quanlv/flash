import { Fragment } from 'react'
import { Disclosure } from '@headlessui/react'

export default function Layout({ children }) {
  const navigation = [
    { name: 'Dashboard', href: '/' },
    { name: 'Posts', href: '/posts' },
  ]
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-gray-800 text-white">
        <div className="p-4 text-xl font-bold">Admin</div>
        <nav>
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block px-4 py-2 hover:bg-gray-700"
            >
              {item.name}
            </a>
          ))}
        </nav>
      </aside>
      <main className="flex-1 p-6 bg-gray-50">{children}</main>
    </div>
  )
}
