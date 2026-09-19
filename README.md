# engelsanchez.github.io

Personal site, built with Jekyll and served by GitHub Pages at
[www.engelsanchez.net](https://www.engelsanchez.net).

## Layout

| Path                   | What it is                                          |
| ---------------------- | --------------------------------------------------- |
| `index.md`             | The bio paragraph on the home page                  |
| `_config.yml`          | Site title, tagline, portrait path, links           |
| `_posts/`              | Blog entries, named `YYYY-MM-DD-slug.md`            |
| `assets/images/`       | Images, including `EngelHoldingMando.svg` for the home page |
| `assets/css/style.css` | All the styling                                     |
| `_layouts/`            | `home` (photo + bio + post list), `post`, `default` |

The home page puts the portrait to the left of the bio on screens wider than
46rem and stacks them (photo on top) below that. The post list sits underneath
in both cases.

## Running it locally

```sh
bundle install
bundle exec jekyll serve --livereload
```

Then open <http://localhost:4000>.

## Deploying

`.github/workflows/pages.yml` builds the site and deploys it on every push to
`master`. This needs **Settings → Pages → Build and deployment → Source** set to
**GitHub Actions** (not "Deploy from a branch").

The older `github-pages` gem is deliberately not used: it pins Ruby < 4.0, which
will not install on a current Ruby. The workflow pins Ruby 3.3 so CI matches a
known-good Jekyll 4 setup.

## Adding a post

Create `_posts/YYYY-MM-DD-some-slug.md`:

```markdown
---
title: "Post title"
date: 2026-09-19 12:00:00 -0400
description: "One line shown under the title on the home page."
---

Body goes here.
```
