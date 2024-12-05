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
		FOOTER PLACEHOLDER
	</footer>
</div>

<style>
	.app {
		flex: 0.5; 
		display: flex;
		flex-direction: column;
		gap: var(--gap); 
		min-height: 80vh;
		max-width: var(--app-width); 
		margin: var(--app-margins);  
	}
	
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
