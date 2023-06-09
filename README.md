# purge-cache-by-id

This action allows the cache of GitHub Actions to be automatically purged

## Basic usage
See [action.yml](action.yml)

```yaml
steps:
# Do other steps like checkout, install, compile, etc.
- uses: not-dhanraj/purge-cache-by-id
  with:
    max-age: 604800 # Cache max 7 days since last use (this is the default)
```

## Other options

### Debug

Output debug data (defaults to `false`)

- Number of caches
- Skipped caches
- Deleted caches

```yaml
steps:
# Do other steps like checkout, install, compile, etc.
- uses: not-dhanraj/purge-cache-by-id
  with:
    debug: true # Set to true to output debug info
```

### Token

Set a GitHub token, will default to `${github.token}`. This will probably not be nessesary as the default token should be sufficient

```yaml
steps:
# Do other steps like checkout, install, compile, etc.
- uses: not-dhanraj/purge-cache-by-id
  with:
    token: $GITHUBTOKEN # Set a GitHub token
```
