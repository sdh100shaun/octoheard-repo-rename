# script-octoherd-repo-rename


> Renames a repository using find and replace 


## Usage

Note: Your GitHub account must have owner or admin permission in order to rename the repository

*WARNING* Can do a partial rename across multiple repositories if find is matched.

Minimal usage

```js
npx @sdh100shaun/script-octoherd-repo-rename
```

Pass all options as CLI flags to avoid user prompts

```js
npx @octoherd/script-octoherd-repo-rename \
  -T ghp_0123456789abcdefghjklwxyzA \
  -R "sdh100shaun/*"
  --find 'old-repo-name'
  --replace 'new-repo-name'
  --octoherd-bypass-confirms true
```

## Options

| option                       | type             | description                                                                                                                                                                                                                                 |
| ---------------------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--octoherd-token`, `-T`     | string           | A personal access token ([create](https://github.com/settings/tokens/new?scopes=repo)). Script will create one if option is not set                                                                                                         |
| `--octoherd-repos`, `-R`     | array of strings | One or multiple space-separated repositories in the form of `repo-owner/repo-name`. `repo-owner/*` will find all repositories for one owner. `*` will find all repositories the user has access to. Will prompt for repositories if not set |
| `--find` |string |  text to find in repository name |
| `--replace` |string |  text to replace in repository name |
| `--octoherd-bypass-confirms` | boolean          | Bypass prompts to confirm mutating requests                                                                                                                                                                                                 |

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md)

## About Octoherd

[@octoherd](https://github.com/octoherd/) is project to help you keep your GitHub repositories in line.

## License

[MIT](LICENSE.md)
