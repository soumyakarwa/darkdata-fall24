<script>
  export let data;
  import ArticleContent from './[id]/+page.svelte'; // Import the component

  let currentArticleIndex = 0;
  let articleData = data.category.articles[currentArticleIndex];  

  $: {
    articleData = data.category.articles[currentArticleIndex];
  }

  // Function to move to the next article
  function nextArticle() {
    if (currentArticleIndex < data.category.articles.length - 1) {
      currentArticleIndex++;
    } else {
      currentArticleIndex = 0; // Loop back to the first article
    }
    console.log(currentArticleIndex); 
  }

  // Function to move to the previous article (optional)
  function prevArticle() {
    if (currentArticleIndex > 0) {
      currentArticleIndex--;
    } else {
      currentArticleIndex = data.category.articles.length - 1; // Loop to the last article
    }
  }
</script>

<section>
  <div id="article-nav">
    <button on:click={prevArticle} aria-label="Previous Article" class="carousel-button">
      <span class="material-icons">arrow_back</span>
    </button>

    <div id="article-title-content">
      <div id="article-title">{articleData.title}</div>
      <div class="ellipse-bullet"></div>
      <div id="article-author">{articleData.author.name}</div>
    </div>

    <button on:click={nextArticle} aria-label="Next Article" class="carousel-button">
      <span class="material-icons">arrow_forward</span>
    </button>
  </div>

  {#if articleData}
    <ArticleContent articleData={articleData} />
  {/if}
</section>

<style>
    section {
        /* padding: var(--gap);  */
        display: flex; 
        flex-direction: column; 
        justify-content: center;
        align-items: center;
        gap: var(--gap); 
        font-family: var(--font-header)
    }

    .carousel-button{
      background: none;
      color: var(--white); 
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      padding: calc(var(--gap)/2); 
    }

    #article-nav{
      display: flex; 
      flex-direction: row; 
      align-items: center;
      padding: var(--subtitle-padding) 0; 
      width: 100%; 
      background-color: var(--black); 
      color: var(--white); 
      font-size: var(--nav); 
    }

    #article-title-content {
      margin: auto;
      display: flex; 
      flex-direction: row; 
      align-items: center; 
      gap: calc(var(--gap)/2); 
    }

    .ellipse-bullet {
      width: calc(var(--nav)/4);          
      height: calc(var(--nav)/4);         
      background-color: var(--white); 
      border-radius: 50%;    
    }

</style>