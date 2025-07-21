// services/github.js
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN; // Optional for higher rate limits
const GITHUB_USERNAME = "Njoxpy"; // Replace with your username

export const fetchGitHubRepos = async () => {
  try {
    const response = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=10`,
      {
        headers: GITHUB_TOKEN
          ? {
              Authorization: `token ${GITHUB_TOKEN}`,
            }
          : {},
      }
    );

    if (!response.ok) throw new Error("Failed to fetch repos");

    const repos = await response.json();
    return repos.filter((repo) => !repo.fork); // Filter out forked repos
  } catch (error) {
    console.error("Error fetching GitHub repos:", error);
    return [];
  }
};

export const fetchGitHubStats = async () => {
  try {
    const response = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}`,
      {
        headers: GITHUB_TOKEN
          ? {
              Authorization: `token ${GITHUB_TOKEN}`,
            }
          : {},
      }
    );

    if (!response.ok) throw new Error("Failed to fetch stats");

    return await response.json();
  } catch (error) {
    console.error("Error fetching GitHub stats:", error);
    return null;
  }
};
