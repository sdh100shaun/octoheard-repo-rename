

export async function script(octokit, repository, {find, replace}) {
    if (!find || !replace) {
        octokit.log.error("Both --find and --replace are required");
        process.exit(1);
      }
      
        if (repository.name.includes(find)) {
          const newRepoName = repository.name.replace(find, replace);
          await octokit.request('PATCH /repos/{owner}/{repo}', {
            owner: repository.owner.login,
            repo: repository.name,
            name: newRepoName
          });
            octokit.log.info(`Renamed ${repository.name} to ${newRepoName}`);
        }

  }