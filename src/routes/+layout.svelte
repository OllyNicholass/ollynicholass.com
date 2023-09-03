<script lang="ts">
	// Theme
  // import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	import '../theme.postcss';
  // Skeleton Core (inc Tailwind)
  import '@skeletonlabs/skeleton/styles/skeleton.css';
  import '../app.postcss';
	import Header from '$lib/components/header/+header.svelte';
	import SkipContent from '$lib/components/header/+skip-content.svelte';
	let footerDateYear = new Date().getFullYear();
</script>

<svelte:head>
	<title>olly | web development services</title>
	<meta name="description" content="Enhance your online success with a seasoned freelance web developer, adept at crafting high-performance small business websites and handling complex commercial projects. With over a decade of experience, we specialize in top-notch hosting services and bespoke website building solutions to propel your online ventures to the forefront.">
	<meta name="keywords" content="Freelance web developer, small business websites, experienced web developer, commercial web applications, larger-scale projects, hosting specialist, website building expert, online success, web development services">
</svelte:head>

<SkipContent anchorId="main" />
<Header />

<div id="main" class="mb-4">
	<slot />
</div>

<footer class="flex justify-center">
	<span class="badge variant-soft font-medium">Copyright © {footerDateYear} olly nicholass</span>
</footer>

<style lang="scss">
	@import 'https://fonts.googleapis.com/css?family=Roboto&display=swap';
	@import 'https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;700&display=swap';
	:global(html) {
		scroll-behavior: smooth;
	}
	
	:global(body) {
		// font-family: 'Roboto', sans-serif;
		font-family: 'Rubik', sans-serif;
		margin: 0;
	}
	
</style>