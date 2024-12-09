<script>
	import Header from './Header.svelte';
	import '../app.css';
	import P5Sketch from './P5Sketch.svelte';

	let { children } = $props();
</script>

<!-- <section id="darkdata" class="grain-filter"> -->
	<div id="app-div" class="app">
		<P5Sketch />
		<Header />

		<main>
			{@render children()}
		</main>

		<footer>
			FOOTER PLACEHOLDER
		</footer>
		<svg width="0" height="0">
			<filter id="grainy-text-high">
			<feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" />
			<feDisplacementMap in="SourceGraphic" scale=4 />
			</filter>
		</svg>
		<svg width="0" height="0">
			<filter id="grainy-text-low">
			<feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" />
			<feDisplacementMap in="SourceGraphic" scale=2 />
			</filter>
		</svg>
	</div>
<!-- </section> -->

<style>
	.app {
		flex: 0.5; 
		display: flex;
		flex-direction: column;
		gap: var(--gap); 
		min-height: 100vh;
		max-width: var(--app-width); 
		margin: var(--app-margins);  
	}
	
	/* #darkdata{
		background-color: var(--black);
	} */

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 100%;
		margin: 0 auto;
		box-sizing: border-box;
		/* background-color: aqua */
	}

	footer {
		flex: 0.5; 
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		box-sizing: border-box;
		/* min-height: 10vh;  */
		/* background-color: red;  */
	}
</style>
