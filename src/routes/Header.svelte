<script>
	import { page } from '$app/stores';
	let activeNavId = ''; // Variable to store the active item's id

	function handleNavClick(id) {
		activeNavId = id;
	}
</script>

<header>
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div id="banner" 
		class:active={activeNavId === ''}
		on:click={() => handleNavClick('')}> 
		<a href="/">
		<div class="title grain-filter">	
			<div id="title-pt-1">DARK</div>
			<div id="title-icon"><img id="header-image" src="/Favicon_Large.png" alt="Dark Data Icon" /></div>
			<div id="title-pt-2">DATA</div>
		</div>
		</a>
		
		<div class="subtitle grain-filter">
			<div id="volume">VOLUME SIX</div>
			<span class="separator">—</span>
			<div id="theme">UNMASKING TECH'S VEIL</div>
			<span class="separator">—</span>
			<div id="edition">FALL 2024</div>
		</div>
	</div>
	<nav id="navigation" class="grain-filter">
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
		<ul>
			<li 
				id="nav-digital-misogyny" 
				aria-current={$page.url.pathname.includes('/directions') ? 'page' : undefined}
				class:active={activeNavId === 'nav-digital-misogyny'}
				on:click={() => handleNavClick('nav-digital-misogyny')}>
				<a href="/directions/digital-misogyny/the-problem-with-incomplete-data">DIGITAL MISOGYNY</a>
			</li>
			<li 
				id="nav-surveillance"
				class:active={activeNavId === 'nav-surveillance'}
				aria-current={$page.url.pathname.includes('/directions/surveillance-and-the-media') ? 'page' : undefined}
				on:click={() => handleNavClick('nav-surveillance')}>
				<a href="/directions/surveillance-and-the-media">SURVEILLANCE & THE MEDIA</a>
			</li>
			<li 
				id="nav-hidden-narratives"
				class:active={activeNavId === 'nav-hidden-narratives'}
				aria-current={$page.url.pathname.includes('/directions/hidden-narratives') ? 'page' : undefined}
				on:click={() => handleNavClick('nav-hidden-narratives')}>
				<a href="/directions/hidden-narratives">HIDDEN NARRATIVES</a>
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
		padding:  var(--subtitle-padding); 
		box-sizing: border-box;    
		transition: background-color 0.5s ease;
	}

	li:hover{
		background-color: var(--red); 
	}

	nav ul li.active {
		background-color: var(--red); 
		width: 100%; 
	/* color: white;
	font-weight: bold;
	border: 1px solid white; */
	}

	.title {
		display: flex; 
		flex-direction: row;
		align-items: flex-end;
		justify-content: center;
		/* padding: 0 var(--subtitle-padding) 0 var(--subtitle-padding);  */
		gap: var(--gap); 
		height: auto; 
	}

	#title-pt-1, #title-pt-2 {
		font-size: var(--title);
		letter-spacing: var(--title-letter-spacing);
		line-height: var(--line-height);
	}

	.title #header-image{
		width: calc(var(--title)/1); 
		height: calc(var(--title)/1.5); 
		display: inline-block;
		/* padding-top: calc(var(--title)/1.5); */
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
