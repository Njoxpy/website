// src/services/github.js (Alternative version)
const GITHUB_USERNAME = "Njoxpy";
const GITHUB_TOKEN = import.meta.env.REACT_APP_GITHUB_TOKEN;

const headers = {
  Accept: "application/vnd.github.v3+json",
  ...(GITHUB_TOKEN && { Authorization: `token ${GITHUB_TOKEN}` }),
};

export const fetchGitHubRepos = async () => {
  try {
    const response = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=50`,
      { headers }
    );

    if (!response.ok) {
      throw new Error(
        `GitHub API error: ${response.status} ${response.statusText}`
      );
    }

    const data = await response.json();

    return data.filter((repo) => !repo.fork);
  } catch (error) {
    console.error("Error fetching GitHub repos:", error);
    return [];
  }
};

export const fetchGitHubStats = async () => {
  try {
    const response = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}`,
      { headers }
    );

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching GitHub stats:", error);
    return null;
  }
};

export const fetchContributions = async () => {
  try {
    const response = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/events/public?per_page=50`,
      { headers }
    );

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const events = await response.json();

    const contributions = events
      .filter((event) =>
        [
          "PushEvent",
          "PullRequestEvent",
          "IssuesEvent",
          "CreateEvent",
        ].includes(event.type)
      )
      .slice(0, 10)
      .map((event) => ({
        repo: event.repo.name,
        action: getEventAction(event),
        date: new Date(event.created_at).toLocaleDateString(),
        link: `https://github.com/${event.repo.name}`,
        type: event.type,
      }));

    return contributions;
  } catch (error) {
    console.error("Error fetching contributions:", error);
    return [];
  }
};

const getEventAction = (event) => {
  switch (event.type) {
    case "PushEvent":
      return `Pushed ${event.payload.commits?.length || 1} commit(s)`;
    case "PullRequestEvent":
      return `${event.payload.action} pull request`;
    case "IssuesEvent":
      return `${event.payload.action} issue`;
    case "CreateEvent":
      return `Created ${event.payload.ref_type}`;
    default:
      return "Contributed";
  }
};
