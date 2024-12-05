<script>
	import { page } from '$app/stores';
</script>

<header>
	<div id="banner"> 
		<div class="title"><a href="/">DARK DATA</a></div>
		<div class="subtitle">
			<div id="volume">VOLUME SIX</div>
			<div id="theme">"THEME OR TAGLINE"</div>
			<div id="edition">FALL 2024</div>
		</div>
	</div>
	<nav>
		<ul>
			<li aria-current={$page.url.pathname.includes('/directions') ? 'page' : undefined}>
				<a href="/directions/direction1">DIGITAL MISOGYNY</a>
			</li>
			<li aria-current={$page.url.pathname.includes('/directions') ? 'page' : undefined}>
				<a href="/directions/direction2">SURVEILLANCE & THE MEDIA</a>
			</li>
			<li aria-current={$page.url.pathname.includes('/directions') ? 'page' : undefined}>
				<a href="/directions/direction3">HIDDEN NARRATIVES</a>
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
		padding: var(--banner-margins) 0;
    	color: var(--white);
    	gap: var(--title-subtitle-gap);
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
		background: var(--black);    
		font-size: var(--nav);
		letter-spacing: var(--body-letter-spacing); 
		line-height: var(--line-height); 
		padding:  var(--subtitle-padding) var(--subtitle-padding) var(--subtitle-padding) var(--subtitle-padding); 
		box-sizing: border-box;    
	}

	.title {
		font-size: var(--title);
		letter-spacing: var(--title-letter-spacing);
		line-height: var(--line-height);
	}

	.subtitle {
		font-size: var(--subtitle);
		letter-spacing: var(--subtitle-letter-spacing);
		line-height: var(--line-height);
		background-color: var(--white); 
		color: var(--black); 
		margin: 0 var(--banner-margins);
		padding: 0 var(--subtitle-padding) var(--subtitle-padding) var(--subtitle-padding); 
		display: flex; 
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}

</style>
