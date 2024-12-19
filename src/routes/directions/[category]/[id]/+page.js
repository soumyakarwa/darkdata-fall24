// [id]/+page.js
import articles from "$lib/content/articles.json";

export async function load({ params }) {
  const { category, id } = params;
  console.log(id);

  // Find the relevant category and article
  const categoryData = articles.zine.categories[category]; // Assume `articles.json` is structured by category
  console.log(categoryData);
  if (!categoryData) {
    throw error(404, "Category not found");
  }

  console.log(categoryData.articles);
  const articleData = categoryData.articles.find(
    (article) => article.slug === id
  );
  if (!articleData) {
    throw error(404, "Article not found");
  }
  console.log(articleData);

  return {
    articleData,
  };
}
