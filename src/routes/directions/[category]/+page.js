import articlesData from "$lib/content/articles.json";

export async function load({ params }) {
  const category = articlesData.zine.categories[params.category];

  if (!category) {
    throw new Error("Category not found");
  }

  return { category };
}
