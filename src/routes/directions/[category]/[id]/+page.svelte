<script>
    export let data;
  </script>
  
  <article>
    <h1>{data.article.title}</h1>
    <p>By {data.article.author.name}</p>
    <div>{data.article.content.body}</div>
  </article>
  
  <style>
    article {
      padding: 1rem;
      max-width: 800px;
      margin: 0 auto;
    }
  </style>
  