// scripts/fetchPinnedRepos.ts
// Usage: ts-node scripts/fetchPinnedRepos.ts
// Requires process.env.GITHUB_TOKEN

import * as fs from 'fs';
import * as path from 'path';
import { fetch } from 'undici';


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

type GraphQLResponse = {
  data: {
    user: {
      pinnedItems: {
        nodes: PinnedRepo[];
      };
    };
  };
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

  const json = (await res.json()) as GraphQLResponse;
  const repos: PinnedRepo[] = json.data.user.pinnedItems.nodes;
  const outPath = path.join(__dirname, '../public/data/pinnedRepos.json');
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, JSON.stringify(repos, null, 2));
  console.log('Pinned repos data written to', outPath);
}

fetchPinnedRepos();
