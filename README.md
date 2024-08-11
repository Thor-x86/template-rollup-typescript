# Roll-Up Library Template with Typescript

These are the reasons why this repo was created

- 🌐 Download n' go, you don't have to create all of the configs from scratch
- 📦 Targets multiple module systems: [CJS][1], [ESM][1], and [Browser (IIFE)][2]
- ✔️ Full [Typescript][3] support for your source code
- 🛑 Complete, ready-to-use [.gitignore][4] and [.npmignore][5]
- 🧪 Example tests for example source code, modify (or remove) them as you want
- ⚙️ CI for auto testing with [GitHub Workflows][6]
- 🗺️ Test coverage check
- 💻 Tested on Ubuntu, Windows, and MacOS
- 🎨 Code formatting for editors with Editorconfig or Prettier support

[1]: https://yuzu.health/blog/cjs-vs-esm
[2]: https://developer.mozilla.org/en-US/docs/Glossary/IIFE
[3]: https://www.typescriptlang.org/
[4]: https://docs.github.com/en/get-started/getting-started-with-git/ignoring-files
[5]: https://www.npmjs.com/package/npmignore
[6]: https://docs.github.com/en/actions/using-workflows/about-workflows

## How to use?

Easy... just download [here](https://github.com/Thor-x86/template-rollup-typescript/archive/refs/heads/stable.zip), extract, then it yours now 😊

## Common Checklist

### Tools for editor

- ☑️ Install required plugin for your IDE: [Visual Studio Code][7] / [Vim][8] / [emacs][9]

[7]: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
[8]: https://github.com/editorconfig/editorconfig-vim#readme
[9]: https://github.com/editorconfig/editorconfig-emacs#readme

### Project information

- ☑️ Modify project information in `package.json`, you **must** change the name, version, author, and keywords
- ☑️ Choose your [license option][10] then modify `LICENSE` file according to your chosen license
- ☑️ Change the `**INPUT YOUR EMAIL HERE**` in `CODE_OF_CONDUCT.md` to your official email
- ☑️ Tailor `CONTRIBUTING.md` for your project
- ☑️ After everything (including source code) modified, you can replace this `README.md` file

[10]: https://opensource.org/licenses

### Source code modification

> You can use plain NPM or Yarn, but we're focusing on PNPM here

- ☑️ [Install PNPM][11]
- ☑️ Run `pnpm install` to initiate **node_modules**
- ☑️ Open [original template repo][12] in your browser, just in case you need to see the deleted files
- ☑️ Delete anything inside `src` folder except `index.ts` then start write your own source code
- ☑️ Delete anything inside `test` folder then start write the code for testing
- ☑️ Check your source code formatting with `pnpm run lint` command. If fail, run `pnpm run format`
- ☑️ Build the source code with `pnpm run build` command
- ☑️ Test the source code with `pnpm run test` command

[11]: https://pnpm.io/installation
[12]: https://github.com/Thor-x86/template-rollup-typescript

## Question & Answer

### Why is the formatting weird? I don't like tabs!

You can freely modify the `.prettierrc` and `.editorconfig` files to suit your style. To update all of your files, run this command

```bash
pnpm run format
```

### Why several files won't show on Git server?

Check `.gitignore` file and do commit the changes with git

### Some of files are missing after being downloaded to NPM server

Check `.npmignore` file and do publish again

### NPM/PNPM said that the version is not supported

Go to `package.json` and modify the "engines" part to your intended minimum NodeJS & NPM version

### How to modify GitHub Workflows behavior?

Go to `.github/workflows/ci.yaml` then change according to the [documentation][13]

[13]: https://docs.github.com/en/actions/writing-workflows/quickstart
