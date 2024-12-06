<script>
    export let articleData;
</script>

<section>
    <div>
        {#if articleData.content.images && articleData.content.images.length > 0}
            {#each articleData.content.images as image}
                <img class="article-img" src={image.url} alt={image.description || 'Article Image'} />
            {/each}
        {/if}
        <p>{articleData.content.body}</p>
    </div>
</section>

<style>
    .article-img{
      width: 100%; 
    }
</style>