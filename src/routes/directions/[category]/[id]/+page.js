import articlesData from "$lib/content/articles.json";

export async function load({ params }) {
  const category = articlesData.zine.categories[params.category];

  if (!category) {
    throw new Error("Category not found");
  }

  const article = category.articles.find((article) => article.id === params.id);

  if (!article) {
    throw new Error("Article not found");
  }

  return { article };
}
