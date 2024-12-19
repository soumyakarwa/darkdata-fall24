import articles from "$lib/content/articles.json";

export async function load() {
  return {
    articles, // Provide data required by layout
  };
}
