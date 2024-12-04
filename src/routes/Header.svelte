<script>
	import { page } from '$app/stores';
</script>

<header>
	<div id="banner"> 
		<div class="title"><a href="/">DARK DATA</a></div>
		<div class="subtitle">FALL 2024 EDITION</div>
	</div>
	<nav>
		<ul>
			<li aria-current={$page.url.pathname.includes('/directions') ? 'page' : undefined}>
				<a href="/directions/direction1">DIRECTION 1</a>
			</li>
			<li aria-current={$page.url.pathname.includes('/directions') ? 'page' : undefined}>
				<a href="/directions/direction2">DIRECTION 2</a>
			</li>
			<li aria-current={$page.url.pathname.includes('/directions') ? 'page' : undefined}>
				<a href="/directions/direction3">DIRECTION 3</a>
			</li>
			<li aria-current={$page.url.pathname.includes('/directions') ? 'page' : undefined}>
				<a href="/directions/direction4">DIRECTION 4</a>
			</li>
		</ul>
	  </nav>
	  
</header>

<style>
	header {
		font-family: var(--font-header);
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
		background-color: var(--black); 
		padding: 2vh 0;
		color: var(--white);
	}
	
	nav {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%; 
	}

	#banner a, nav a{
		text-decoration: none;
		color: var(--white); 
	}

	ul {
		display: flex;               
		justify-content: space-between; 
		align-items: center;         
		width: 100%;                 
		padding: 0;                  
		margin: 0;                   
		list-style: none;            
	}

	li {
		text-align: center;          
		background: var(--grey);     
		padding: 0 calc(var(--subtitle) / 2); 
		box-sizing: border-box;    
	}
</style>
