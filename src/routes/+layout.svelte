<script lang="ts">
	import '../app.postcss';
	import Header from '$lib/components/header/+header.svelte';
	import SkipContent from '$lib/components/header/+skip-content.svelte';
	import CookieConsent from '$lib/components/shared/CookieConsent.svelte';
	let footerDateYear = new Date().getFullYear();
</script>

<svelte:head>
	<title>olly | web development services</title>
	<meta
		name="description"
		content="Enhance your online success with a seasoned freelance web developer, adept at crafting high-performance small business websites and handling complex commercial projects. With over a decade of experience, we specialize in top-notch hosting services and bespoke website building solutions to propel your online ventures to the forefront."
	/>
	<meta
		name="keywords"
		content="Freelance web developer, small business websites, experienced web developer, commercial web applications, larger-scale projects, hosting specialist, website building expert, online success, web development services"
	/>
</svelte:head>

<SkipContent anchorId="main" />
<Header />
<CookieConsent />

<main id="main" class="mb-4">
	<slot />
</main>

<footer class="flex justify-center">
	<span class="badge variant-soft font-medium"
		><span>Copyright © {footerDateYear} olly nicholass</span>
		<a href="/privacy-policy">Privacy Policy</a></span
	>
</footer>

<style lang="scss">
	:global(html) {
		scroll-behavior: smooth;
	}

	:global(body) {
		margin: 0;
	}
</style>
