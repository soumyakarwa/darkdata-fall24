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
	<footer>
		<div class="footer-content">
			<div class="grainy-text-low footer-team">
				<div>PUBLISHER</div>
				<div class="name">Professor David Caroll</div>
			</div>
			<div class="grainy-text-low footer-team">
				EDITORS
				<div class="name">Ariel Calver</div>
				<div class="name">Katya Danziger</div>
			</div>
			<div class="grainy-text-low footer-team">
				TECH DIRECTION
				<div class="name">Soumya Karwa</div>
			</div>
			<div class="grainy-text-low footer-team">
				ART DIRECTION
				<div class="name">Emily Li, BFA CD'25</div>
				<div class="name">Evelyn Gardner</div>
			</div>
		</div>
	</footer>
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
		background-color: var(--black); 
		height: 20vh; 
		flex: 0.5; 
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		box-sizing: border-box;
		color: var(--white); 
		font-family: var(--font-header); 
		/* min-height: 10vh;  */
		/* background-color: red;  */
	}

	.footer-content {
		width: var(--app-width); 
		font-size: var(--nav); 
		display: flex; 
		flex-direction: row;
		justify-content: space-evenly;
		align-items: flex-start;	
	}

	.footer-team {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
	}

	.name {
		font-family: var(--font-body); 
		font-size: var(--body); 
	}
</style>
