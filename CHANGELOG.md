## [Unreleased]

## 1.0.0 (May 26, 2020)

- Fork [tabnine-vscode](https://github.com/codota/tabnine-vscode) (2.8.2).
- Overall project cleanup.
- Replace npm with Yarn.
- Update `tsconfig.json` to target newer version.
- Update `README` and create `CHANGELOG`.
- Refactor whole `src` directory, basically rewritten extension from scratch.
- Update all dependencies and delete unnecessary dependencies.
- Remove vscode dependency and add `@types/vscode`, this is a new approach for extension usage [#70175](https://github.com/microsoft/vscode/issues/70175).
- Update `.gitignore` and add `.vscodeignore`.
- Remove `tabnine.disable_line_regex` and `tabnine.disable_file_regex` configs.
- Add `tabnine.debug`, `tabnine.maxNumberOfResults` and `tabnine.disabledLanguagesIds` configs.
- Remove restriction to show only 1 result if end of the word is `.` or `::`.
- Always show correct suggestion detail which is for e.g. `41%`, in case detail is empty just show `TabNine` so it would be easier to identify which suggestions are from TabNine.
- Don't preselect TabNine suggestions and de-prioritize them to be at the end of the list whenever it's possible.
- Change suggestions kind from `property` to `text` in order to avoid misunderstanding which suggestions are from TabNine.
- Trigger suggestion list if suggestion ends with `.` or `::`.
- Include postfix in suggestions for e.g. instead of `console.log(` it will show `console.log()`.
- Add `TabNine::restart`, `TabNine::sem` and `TabNine::no_sem` commands in command palette.
- Add status bar item at the right which on hover shows current status of TabNine.
- Update TabNine binaries to 2.8.2 version and create script for updating binaries.
- Update GitHub issue templates for easier bug report and feature request.