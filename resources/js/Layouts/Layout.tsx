import { Link } from '@inertiajs/react'
import React from 'react'

export default function Layout({ children }: {children:any}) {
  return (
    <main>
      <header>
        <Link href="/">Home</Link>
      </header>
      <article>{children}</article>
    </main>
  )
}