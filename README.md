# What is this

This repository holds the shared commitlint configuration, across all projects. Basically, instead of having to copy paste `.commitlint.config.js` across different repositories 
and having to copy paste the same workflow, this repository hosts both of these. 

# How to use
1. You need a GitHub repository, where you want to lint the PR titles
2. Add it via GitHub UI
- Press Actions
- Press "New Workflow"
- Find "Taptap Send - Default PR Linting Workflow"
- Commit
 ![CleanShot 2024-01-18 at 16 40 32](https://github.com/taptapsend/commitlint-config/assets/3404751/ec6f6088-72c2-4e85-8e6e-a29fd649f2f3)
3. OR add it manually by creating a workflow and adding:
  ```
  jobs:
  call-workflow:
    uses: taptapsend/commitlint-config/.github/workflows/pr-title-lint.yml@main
  ```

# How to contribute
If you want to improve the commitlint rules, just update `.commitlint.config.js`. You can then test by installing commit lint and testing: 
1. `npm install commitlint @commitlint/config-conventional`
2. `echo "[TTS-123123] Title I'm testing" | npx commitlint --config .commitlint.config.js`
