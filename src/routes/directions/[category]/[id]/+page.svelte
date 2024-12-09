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
        <p>{@html articleData.content.body}</p>
    </div>
</section>

<style>
    .article-img{
      width: 100%; 
    }

    .article-content{
        font-family: var(--font-body); 
    }
</style>