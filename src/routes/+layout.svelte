<script>
	import Header from './Header.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<div class="app">
	<Header />

	<main>
		{@render children()}
	</main>

	<footer>
		tbd
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		gap: var(--gap); 
		min-height: 80vh;
		max-width: 60vw; 
		margin: 10vh 20vw;  
	}
	
	main {
		/* flex: 2; */
		display: flex;
		flex-direction: column;
		width: 100%;
		margin: 0 auto;
		box-sizing: border-box;
		background-color: aqua
	}

	footer {
		/* flex: 0.6;  */
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: red; 
	}
</style>
