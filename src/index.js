const github = require('@actions/github');
const core = require('@actions/core');

async function run() {
  const token = core.getInput('token');
  const action_id = core.getInput('action_id');
  const octokit = github.getOctokit(token);

  await octokit.rest.actions.deleteActionsCacheById({
    per_page: 100,
    owner: github.context.repo.owner,
    repo: github.context.repo.repo,
    cache_id: action_id,
  });
}

run();