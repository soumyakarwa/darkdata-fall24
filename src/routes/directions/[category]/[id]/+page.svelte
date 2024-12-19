<script>
    export let articleData;
    // export let data;
    import {onMount} from 'svelte'; 
    import { goto } from '$app/navigation';
//   import ArticleContent from './[id]/+page.svelte'; // Import the component

  let currentArticleIndex = 0;
//   let articleData = data.category.articles[currentArticleIndex];
  let animationClass = ''; // Animation class for swishing

  console.log(articleData); 

  $: articleData = data.category.articles[currentArticleIndex]; // Update articleData reactively

  function scrollToTopNav() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function updateURL() {
    const articleId = data.category.articles[currentArticleIndex].id;
    const category = data.category.id; // Assuming `name` or some identifier is part of your data
    goto(`/directions/${category}/${articleId}`, { replaceState: true });
  }

  function nextArticle() {
    animationClass = 'swish-exit';
    setTimeout(() => {
      currentArticleIndex = (currentArticleIndex + 1) % data.category.articles.length;
      animationClass = 'swish-enter';
      // scrollToTopNav(); // Scroll to the top navigation
    }, 500); // Match the duration of the animation
  }

  function prevArticle() {
    animationClass = 'swish-exit';
    setTimeout(() => {
      currentArticleIndex =
        (currentArticleIndex - 1 + data.category.articles.length) % data.category.articles.length;
      animationClass = 'swish-enter';
      // scrollToTopNav(); // Scroll to the top navigation
    }, 500); // Match the duration of the animation
  }

  function nextArticleBottom(){
    animationClass = 'swish-exit';
    setTimeout(() => {
      currentArticleIndex = (currentArticleIndex + 1) % data.category.articles.length;
      animationClass = 'swish-enter';
      scrollToTopNav(); // Scroll to the top navigation
    }, 500); // Match the duration of the animation
  }

  function prevArticleBottom(){
    animationClass = 'swish-exit';
    setTimeout(() => {
      currentArticleIndex =
        (currentArticleIndex - 1 + data.category.articles.length) % data.category.articles.length;
      animationClass = 'swish-enter';
      scrollToTopNav(); // Scroll to the top navigation
    }, 500); // Match the duration of the animation
  }
</script>

<section class="article-content">
    <div id="category-article-nav-top" class="article-nav">
        <button on:click={prevArticle} aria-label="Previous Article" class="carousel-button">
          <span class="material-icons">arrow_back</span>
        </button>
    
        <div id="category-article-nav-top-content" class="article-title-content">
          <div class="article-title grain-filter">{articleData.title || "no-title-found"}</div>
          <div class="ellipse-bullet"></div>
          <div class="article-author grain-filter">{articleData.author.name}</div>
        </div>
    
        <button on:click={nextArticle} aria-label="Next Article" class="carousel-button">
          <span class="material-icons">arrow_forward</span>
        </button>
      </div>
    <div>
        {#if articleData.content.images && articleData.content.images.length > 0}
            {#each articleData.content.images as image}
                <img class="article-img" src={image.url} alt={image.description || 'Article Image'} />
            {/each}
        {/if}
        {#if articleData.subtitle}
            <h3>{@html articleData.subtitle}</h3>
        {/if}
        <p>{@html articleData.content.body}</p>

        {#if articleData.content["works-cited"] &&  articleData.content["works-cited"].length > 0}
            <ol>
                Works Cited<br>
                {#each articleData.content["works-cited"] as cite}
                <li>{@html cite}</li>
            {/each}
            </ol>
        {/if}
    </div>
</section>

<style>
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