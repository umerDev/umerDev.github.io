// scripts/fetchPinnedRepos.ts
// Usage: ts-node scripts/fetchPinnedRepos.ts
// Requires process.env.GITHUB_TOKEN

import fs from 'fs';
import path from 'path';
import fetch from 'node-fetch';

const GITHUB_USERNAME = 'umerDev';
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

if (!GITHUB_TOKEN) {
  console.error('GITHUB_TOKEN not set in environment.');
  process.exit(1);
}

const query = `
  query {
    user(login: "${GITHUB_USERNAME}") {
      pinnedItems(first: 6, types: REPOSITORY) {
        nodes {
          ... on Repository {
            name
            description
            url
            stargazerCount
            forkCount
            primaryLanguage {
              name
              color
            }
          }
        }
      }
    }
  }
`;

type PinnedRepo = {
  name: string;
  description: string | null;
  url: string;
  stargazerCount: number;
  forkCount: number;
  primaryLanguage: {
    name: string;
    color: string;
  } | null;
};

async function fetchPinnedRepos() {
  const res = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${GITHUB_TOKEN}`,
    },
    body: JSON.stringify({ query }),
  });

  if (!res.ok) {
    console.error('Failed to fetch pinned repos:', res.status, await res.text());
    process.exit(1);
  }

  const json = await res.json();
  const repos: PinnedRepo[] = json.data.user.pinnedItems.nodes;
  const outPath = path.join(__dirname, '../src/data/pinnedRepos.json');
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, JSON.stringify(repos, null, 2));
  console.log('Pinned repos data written to', outPath);
}

fetchPinnedRepos();
