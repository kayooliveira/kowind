<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <main
    className="flex h-screen w-screen items-center justify-center bg-kowind-primary/30"
  >
    <div className="flex h-2/4 flex-col items-center justify-evenly ">
      <header>
        <a
          href="https://github.com/kayooliveira/kowind"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="../assets/logo.svg"
            className="my-4 w-60"
            alt="kowind logo"
          />
        </a>
        <h1
          className="text-4xl font-bold text-transparent bg-clip-text from-kowind-light via-kowind-primary to-kowind-secondary bg-gradient-to-r "
        >
          KOWIND APP
        </h1>
      </header>
      <section className="text-center">
        <span>
          Thanks for using
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
        <p className="my-4">
          Edit
          <code>components/HelloWorld.vue</code> to test hot module replacement.
        </p>
      </section>
      <footer>
        <button
          className="block rounded-lg bg-gradient-to-r from-kowind-light via-kowind-primary to-kowind-secondary px-12 py-2 font-bold text-white transition-all hover:-translate-y-1 hover:shadow-md"
          @click="count++"
        >
          count is ({{ count }})
        </button>
        <span className=" text-xs text-gray-400">
          click on button to increase count
        </span>
      </footer>
    </div>
  </main>
</template>

<style scoped></style>
