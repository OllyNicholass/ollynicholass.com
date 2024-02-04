<script lang="ts">
	import { CookieManager } from '@boxfish-studio/sveltekit-cookie-manager';
	import type { SKCMConfiguration } from '@boxfish-studio/sveltekit-cookie-manager';

	const configuration: SKCMConfiguration = {
		disclaimer: {
			title: 'This website uses cookies.',
			body: 'By using this site, you agree with our use of cookies',
			policyText: 'Read our privacy policy.'
		},
		services: {
			googleAnalytics4Id: 'G-2PT7XN73M5'
		},
		theme: {
			primary: '#fff',
			dark: '#fff',
			medium: '#b0bfd9',
			light: 'rgb(47, 63, 111)'
		}
	};
</script>

<CookieManager {configuration} />
