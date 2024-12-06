<script>
    export let data;
  </script>
  
  <section>
    <!-- <h1>{data.category.sectionTitle}</h1>
    <p>{data.category.description}</p> -->
  
    <ul>
      {#each data.category.articles as article}
        <li>
          <a href={`/directions/${data.category.id}/${article.id}`}>
            {article.title} - By {article.author.name}
          </a>
        </li>
      {/each}
    </ul>
  </section>

<style>
    section {
        padding: var(--gap); 
        box-sizing: border-box;  
        display: flex; 
        flex-direction: column; 
        justify-content: center;
        align-items: center;
        gap: var(--gap); 
    }
</style>