import React, { useState } from 'react'

import logo from './Assets/img/logo.svg'
export function App() {
  const [count, setCount] = useState(0)
  return (
    <main className="flex h-screen w-screen items-center justify-center bg-kowind-primary/30">
      <div className="flex h-2/4 flex-col items-center justify-evenly ">
        <header>
          <a
            href="https://github.com/kayooliveira/kowind"
            target="_blank"
            rel="noreferrer"
          >
            <img src={logo} className="my-4 w-60" alt="kowind logo" />
          </a>
          <h1 className="text-4xl font-bold ">KOWIND APP</h1>
        </header>
        <section className="text-center">
          <span>
            Thanks for using{' '}
            <a
              href="https://github.com/kayooliveira/kowind"
              target="_blank"
              rel="noreferrer"
              className="font-bold text-kowind-primary underline transition-colors hover:text-kowind-secondary"
            >
              kowind!
            </a>
          </span>
          <br />
          Edit&nbsp;
          <code className="overflow-x-scroll whitespace-pre">src/App.jsx</code>
          &nbsp;and save to reload.
        </section>
        <footer>
          <button
            className="block rounded-lg bg-gradient-to-r from-kowind-light via-kowind-primary to-kowind-secondary px-12 py-2 font-bold text-white transition-all hover:-translate-y-1 hover:shadow-md"
            onClick={() => setCount(count + 1)}
          >
            count is ({count})
          </button>
          <span className=" text-xs text-gray-400">
            click on button to increase count
          </span>
        </footer>
      </div>
    </main>
  )
}

