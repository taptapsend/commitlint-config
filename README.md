# What is this

This repository holds the shared commitlint configuration, across all projects. Basically, instead of having to copy paste `.commitlint.config.js` across different repositories 
and having to copy paste the same workflow, this repository hosts both of these. 

# How to use
You need a to create a GitHub Workflow for the repository, where you want to lint the PR titles. You have two ways:
1. Add it manually by creating a workflow and adding:
  ```
  jobs:
  call-workflow:
    uses: taptapsend/commitlint-config/.github/workflows/pr-title-lint.yml@main
  ```

2. OR Add it via GitHub UI
- Press Actions
- Press "New Workflow"
- Find "Taptap Send - Default PR Linting Workflow"
- Commit


# How to contribute
If you want to improve the commitlint rules, just update `.commitlint.config.js`. You can then test by installing commit lint and testing: 
1. `npm install commitlint @commitlint/config-conventional`
2. `echo "[TTS-123123] Title I'm testing" | npx commitlint --config .commitlint.config.js`
