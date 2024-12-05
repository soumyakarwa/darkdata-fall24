import articles from "$lib/content/articles.json";

async function load({ params }) {
  // Find the article based on the ID in the URL
  const article = articles.find((article) => article.id === params.id);

  // Handle 404 if the article is not found
  if (!article) {
    throw new Error("Article not found");
  }

  return { article };
}
