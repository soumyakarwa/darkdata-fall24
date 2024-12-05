<script>
    export let data; 
</script>

<section>
    <div>{data.article.title}</div>
    <div>{data.article.content}</div>
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