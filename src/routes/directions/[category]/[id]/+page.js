// [id]/+page.js
import articles from "$lib/content/articles.json";

export async function load({ params }) {
  console.log(params);
  const { category, id } = params;

  // Find the relevant category and article
  const categoryData = articles[category]; // Assume `articles.json` is structured by category
  if (!categoryData) {
    throw error(404, "Category not found");
  }

  const articleData = categoryData.find((article) => article.slug === id);
  if (!articleData) {
    throw error(404, "Article not found");
  }

  return {
    articleData,
  };
}
