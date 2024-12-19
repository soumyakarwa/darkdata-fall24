export async function load({ params, parent }) {
  // Access parent data from the layout
  const parentData = await parent();
  const { articles } = parentData;

  if (!articles) {
    throw new Error("Articles not found in parent data");
  }

  // Extract category and article IDs from the URL
  const { category, id } = params;

  // Find the relevant category
  const categoryData = articles.zine.categories[category];
  if (!categoryData) {
    throw error(404, "Category not found");
  }

  // Find the relevant article within the category
  const articleData = categoryData.articles.find(
    (article) => article.slug === id
  );
  if (!articleData) {
    throw error(404, "Article not found");
  }

  return {
    categoryData,
    articleData,
  };
}
