<script>
    import {onMount} from 'svelte'; 
    import { goto } from '$app/navigation';
    export let data;

    let articles = data.articles; 
    let categoryData = data.categoryData;
    let currentArticleData = data.articleData;

    $: categoryData = data.categoryData
    $: currentArticleData = data.articleData;
    
   
    let animationClass = ''; 


    function scrollToTopNav() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function nextArticle() {
		// Apply swish-out animation
		animationClass = 'swish-exit';

		setTimeout(() => {
			// Navigate to the next article after the animation completes
			const currentIndex = categoryData.articles.findIndex(
				(article) => article.slug === currentArticleData.slug
			);
			const nextIndex = (currentIndex + 1) % categoryData.articles.length;
			const nextArticle = categoryData.articles[nextIndex];

			// Use goto to navigate to the new article
			goto(`/directions/${categoryData.id}/${nextArticle.slug}`).then(() => {
				// After navigation, apply swish-in animation
				animationClass = 'swish-enter';

				// Reset animationClass after the swish-in animation completes
				setTimeout(() => {
					animationClass = '';
				}, 500); // Match the swish-in animation duration
			});
		}, 500); // Match the swish-out animation duration
	}

	function prevArticle() {
		// Apply swish-out animation
		animationClass = 'swish-exit';

		setTimeout(() => {
			// Navigate to the previous article after the animation completes
			const currentIndex = categoryData.articles.findIndex(
				(article) => article.slug === currentArticleData.slug
			);
			const prevIndex =
				(currentIndex - 1 + categoryData.articles.length) % categoryData.articles.length;
			const prevArticle = categoryData.articles[prevIndex];

			// Use goto to navigate to the new article
			goto(`/directions/${categoryData.id}/${prevArticle.slug}`).then(() => {
				// After navigation, apply swish-in animation
				animationClass = 'swish-enter';

				// Reset animationClass after the swish-in animation completes
				setTimeout(() => {
					animationClass = '';
				}, 500); // Match the swish-in animation duration
			});
		}, 500); // Match the swish-out animation duration
	}
</script>

<section class="article-content">
	<div id="category-article-nav-top" class="article-nav">
		<button on:click={prevArticle} aria-label="Previous Article" class="carousel-button">
			<span class="material-icons">arrow_back</span>
		</button>

		<div id="category-article-nav-top-content" class="article-title-content">
			<div class="article-title grain-filter">{currentArticleData.title || "no-title-found"}</div>
			<div class="ellipse-bullet"></div>
			<div class="article-author grain-filter">{currentArticleData.author.name}</div>
		</div>

		<button on:click={nextArticle} aria-label="Next Article" class="carousel-button">
			<span class="material-icons">arrow_forward</span>
		</button>
	</div>

	<!-- Apply animation class to the content -->
	<div class={`article-body ${animationClass}`}>
		{#if currentArticleData.content.images && currentArticleData.content.images.length > 0}
			{#each currentArticleData.content.images as image}
				<img class="article-img" src={image.url} alt={image.description || 'Article Image'} />
			{/each}
		{/if}
		{#if currentArticleData.subtitle}
			<h3>{@html currentArticleData.subtitle}</h3>
		{/if}
		<p>{@html currentArticleData.content.body}</p>

		{#if currentArticleData.content["works-cited"] &&  currentArticleData.content["works-cited"].length > 0}
			<ol>
				Works Cited<br>
				{#each currentArticleData.content["works-cited"] as cite}
				<li>{@html cite}</li>
			{/each}
			</ol>
		{/if}
	</div>
    <div id="category-article-nav-bottom" class="article-nav">
		<button on:click={prevArticle} aria-label="Previous Article" class="carousel-button">
			<span class="material-icons">arrow_back</span>
		</button>

		<div id="category-article-nav-bottom-content" class="article-title-content">
			<div class="article-title grain-filter">{currentArticleData.title || "no-title-found"}</div>
			<div class="ellipse-bullet"></div>
			<div class="article-author grain-filter">{currentArticleData.author.name}</div>
		</div>

		<button on:click={nextArticle} aria-label="Next Article" class="carousel-button">
			<span class="material-icons">arrow_forward</span>
		</button>
	</div>
</section>


<style>
    section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: var(--gap);
        font-family: var(--font-header);
    }

    .carousel-button {
        background: none;
        color: var(--white);
        border: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        padding: calc(var(--gap)/2);
    }

    .article-nav {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: var(--subtitle-padding) 0;
        width: 100%;
        background-color: var(--black);
        color: var(--white);
        font-size: var(--nav);
    }

    .article-title-content {
        font-family: var(--font-header);
        margin: auto;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: calc(var(--gap)/2);
    }

    .article-title, .article-author{
        letter-spacing: var(--nav-letter-spacing);
    }

    .ellipse-bullet {
        width: calc(var(--nav)/4);
        height: calc(var(--nav)/4);
        background-color: var(--white);
        border-radius: 50%;
    }

    .article-img{
      width: 100%; 
    }

    .article-content{
        font-family: var(--font-body); 
    }

    p {
        margin-bottom: 0; 
    }

    h3 {
        text-align: center; 
    }

    ol {
        padding: 0 0 0 2%; 
        font-size: var(--caption); 
    }

</style>