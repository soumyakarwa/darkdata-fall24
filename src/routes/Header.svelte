<script>
	import { page } from '$app/stores';
</script>

<header>
	<div id="banner"> 
		<div class="title">DARK DATA</div>
		<div class="subtitle">FALL 2024 EDITION</div>
	</div>
	<nav>
		<ul>
		  <li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
			<a href="/">EDITOR'S NOTE</a>
		  </li>
		  <li aria-current={$page.url.pathname.includes('/direction') ? 'page' : undefined}>
            <a href="/direction/direction1">DIR 1</a>
        </li>
        <!-- <li aria-current={$page.url.pathname.includes('/direction/page2') ? 'page' : undefined}>
            <a href="/direction/page2">DIR 2</a>
        </li> -->
		</ul>
	  </nav>
	  
</header>

<style>
	header {
		display: flex;
		flex-direction: column; 
		justify-content: center;
		align-items: center;
		gap: var(--gap); 
		width: 100%; 
	}

	#banner {
		display: flex;
		flex-direction: column;
		text-align: center;
		width: 100%; 
		background-color: var(--grey); 
		padding: 2vh 0;
	}

	.title {
		font-size: var(--title); 
		font-weight: 700;  
	}

	.subtitle {
		font-size: var(--subtitle); 
		font-weight: 400; 
	}

	nav {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	nav a{
		text-decoration: none;
		color: var(--color-text); 
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: var(--gap); 
		list-style: none;
		background-size: contain;
	}

	li {
		background: var(--grey);
		padding: 0 calc(var(--subtitle)/2); 
	}
</style>
