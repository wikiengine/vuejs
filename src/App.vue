<template>
	<nav>
		<a href="/">{{ CONFIG.logo_text }}</a>
		<a href="/RecentChanges">최근 변경</a>
		<a href="/RecentDiscuss">최근 토론</a>
	</nav>
	<main>
		<div v-html="{{ contentHtml }}"/>
	</main>
	<footer>
		<a href="//testwiki.hyonsu.com">the tree</a>
	</footer>
</template>