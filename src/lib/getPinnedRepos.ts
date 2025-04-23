export type PinnedRepo = {
  id?: string;
  name: string;
  description: string | null;
  url: string;
  homepageUrl?: string | null;
  openGraphImageUrl?: string | null;
  languages?: { nodes: { name: string }[] };
  primaryLanguage?: { name: string; color?: string } | null;
};

export async function getPinnedRepos(): Promise<PinnedRepo[]> {
  // Load pinned repos from static JSON generated at build time
  const response = await fetch('/data/pinnedRepos.json');
  if (!response.ok) {
    throw new Error('Failed to load pinned repos data.');
  }
  return response.json();
}

