<script>
  export let data;
  import ArticleContent from './[id]/+page.svelte'; // Import the component

  let currentArticleIndex = 0;
  let articleData = data.category.articles[currentArticleIndex];
  let animationClass = ''; // Animation class for swishing

  $: articleData = data.category.articles[currentArticleIndex]; // Update articleData reactively

  function nextArticle() {
    animationClass = 'swish-exit';
    setTimeout(() => {
      currentArticleIndex = (currentArticleIndex + 1) % data.category.articles.length;
      animationClass = 'swish-enter';
    }, 500); // Match the duration of the animation
  }

  function prevArticle() {
    animationClass = 'swish-exit';
    setTimeout(() => {
      currentArticleIndex =
        (currentArticleIndex - 1 + data.category.articles.length) % data.category.articles.length;
      animationClass = 'swish-enter';
    }, 500); // Match the duration of the animation
  }
</script>


<section>
  <div id="category-article-nav-top" class="article-nav">
    <button on:click={prevArticle} aria-label="Previous Article" class="carousel-button">
      <span class="material-icons">arrow_back</span>
    </button>

    <div id="category-article-nav-top-content" class="article-title-content">
      <div class="article-title grain-filter">{articleData.title}</div>
      <div class="ellipse-bullet"></div>
      <div class="article-author grain-filter">{articleData.author.name}</div>
    </div>

    <button on:click={nextArticle} aria-label="Next Article" class="carousel-button">
      <span class="material-icons">arrow_forward</span>
    </button>
  </div>

  <div class="{animationClass}">
    <ArticleContent articleData={articleData} />
  </div>

  <div id="category-article-nav-bottom" class="article-nav">
    <button on:click={prevArticle} aria-label="Previous Article" class="carousel-button">
      <span class="material-icons">arrow_back</span>
    </button>

    <div id="category-article-nav-bottom-content" class="article-title-content">
      <div class="article-title grain-filter">{articleData.title}</div>
      <div class="ellipse-bullet"></div>
      <div class="article-author grain-filter">{articleData.author.name}</div>
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
</style>
