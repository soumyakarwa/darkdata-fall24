<script>
    export let data;
    import { onMount } from 'svelte';
    
    $: {
      if (data) {
        console.log(data.category);
      }
    }


    // const currArticle = data.category.articles[0]; 
    // console.log(currArticle.content.images[0].url); 
</script>
  
<section>
  <div id="article-nav">
    <div id="article-title-content">
      <div id="article-title">{data.category.articles[0].title}</div> 
      <div class="ellipse-bullet"></div>
      <div id="article-author">{data.category.articles[0].author.name}</div> 
    </div>
    <span id="title-arrow" class="material-icons">
      arrow_forward
     </span>
  </div>
 
  <!--
  Below the article title, there is an article image and article content. 
  On the right of the article title there should be an arrow. When the user clicks on the arrow, a carousel effect should shift the content and image (below the title) to the next one. These articles should exist on their own url. For instance, when the page loads "directions/digital-misogyny/article-1" then the user clicks on the arrow, the header, navbar and article title div remain in place and then article image and content, with a carousel effect,slides onto the next article. The path changes to "directions/digital/misogyny"
  -->



  <!-- <img id="article-title-img" src={currArticle.content.images[0].url} alt={currArticle.content.images[0].alt_text} />
  <ul>
    {#each data.category.articles as article}
      <li>
        <a href={`/directions/${data.category.id}/${article.id}`}>
          {article.title} - By {article.author.name}
        </a>
      </li>
    {/each}
  </ul> -->
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
      /* display: inline-block;  */
      /* transform: translateY(calc(var(--nav)/10)); */
    }
    
    #article-title-img{
      width: 100%; 
    }

    #title-arrow {
      font-size: var(--nav); 
      color: var(--white); 
      margin-right: calc(var(--gap)/2); 
      /* transform: translateY(var(--nav)/2); */
    }

</style>