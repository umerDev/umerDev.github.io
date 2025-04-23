
export type PinnedRepo = {
  id: string;
  name: string;
  description: string | null;
  url: string;
  homepageUrl: string | null;
  openGraphImageUrl: string | null;
  languages: { nodes: { name: string }[] };
};

export async function getPinnedRepos(username: string): Promise<PinnedRepo[]> {
  const token = localStorage.getItem('GITHUB_TOKEN');
  if (!token) {
    throw new Error(
      "GitHub token not found in localStorage. Please add your token: localStorage.setItem('GITHUB_TOKEN', '<YOUR_TOKEN>') and refresh."
    );
  }

  const query = `
    query {
      user(login: "${username}") {
        pinnedItems(first: 6, types: REPOSITORY) {
          nodes {
            ... on Repository {
              id
              name
              description
              url
              homepageUrl
              openGraphImageUrl
              languages(first: 4, orderBy: {field: SIZE, direction: DESC}) {
                nodes {
                  name
                }
              }
            }
          }
        }
      }
    }
  `;

  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ query }),
  });

  if (!res.ok) {
    throw new Error("Failed to fetch GitHub pinned repos. Check your token and rate limits.");
  }

  const data = await res.json();
  if (!data.data?.user?.pinnedItems?.nodes) {
    throw new Error("No pinned repositories found for this user.");
  }
  return data.data.user.pinnedItems.nodes;
}
