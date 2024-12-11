<script>
    export let articleData;
</script>

<section class="article-content">
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