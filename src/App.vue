<template>
  <header>
    <nav>
      <a href="/">{{ window.CONFIG.logo_text }}</a>
    </nav>
  </header>
  <main>
    <div v-html="window.contentHtml"></div>
  </main>
  <footer>
    <p>{{ window.CONFIG.copyright_text }}</p>
    <a href="//testwiki.hyonsu.com">the tree</a>
  </footer>
</template>

<style scoped>
header {
  height: 64px;
  background-color: blue;
}
nav {
  display: flex;
}
main {
  margin: 5px;
}
</style>
