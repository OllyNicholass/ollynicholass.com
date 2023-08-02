<script lang="ts">
	// Theme
  import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
  // Skeleton Core
  import '@skeletonlabs/skeleton/styles/skeleton.css';
  import '../app.postcss';
	import Header from '$lib/components/header/+header.svelte';
	import SkipContent from '$lib/components/header/+skip-content.svelte';
	let footerDateYear = new Date().getFullYear();
</script>
<SkipContent />
<Header />

<div class="container mx-auto my-4">
	<slot />
</div>

<footer>
	<p>Copyright © {footerDateYear} AffirMotion</p>
</footer>

<style lang="scss">
	@import 'https://fonts.googleapis.com/css?family=Roboto&display=swap';
	:global(html) {
		scroll-behavior: smooth;
	}
	
	:global(body) {
		font-family: 'Roboto', sans-serif;
		background-color: #10101a;
		color: #84859c;

		margin: 0;
	}

	:global(a) {
		color: #fff;

		&:hover {
			text-decoration: underline;
		}
	}
</style>