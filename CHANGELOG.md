# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/).

## [0.3.0] - 2025-09-03
### Fixed
- Fixed issue where `{ \"error\":0 }` could not be unescaped by adding a fallback to normalize escaped quotes before parsing.
- Escape/Unescape functions now recursively process nested objects and arrays instead of only top-level strings.
- Ensured symmetric conversion:
  - `escapeUnicode` converts all non-ASCII characters into `\uXXXX`.
  - `unescapeUnicode` correctly restores them, allowing repeated round-trip conversion without errors.

### Changed
- Extended `escapeUnicode` to optionally encode object keys as Unicode (`"error"` → `"\u0065\u0072\u0072\u006f\u0072"`), fixing the issue where objects without string values showed no effect.

## [0.2.0] - 2025-09-03
### Changed
- Added **Unicode button state control**:
  - Buttons are now disabled by default and only enabled when input contains Chinese, `\uXXXX`, `\"`, or `\\`.
  - Disabled state: white background, blue text, half opacity, not clickable.
  - Active state: theme-colored background, white text, hover shadow.
  - Dark mode supported.
- Improved **escapeUnicode**:
  - Added handling for quotes (`"`), backslashes (`\`), newline (`\n`), carriage return (`\r`), and tab (`\t`).
  - Non-ASCII characters still convert to `\\uXXXX`.
- Improved **unescapeUnicode**:
  - Added decoding for escaped quotes (`\"`) and backslashes (`\\`).
  - Now fully symmetric with `escapeUnicode`.
- Moved **Unicode tools (Escape/Unescape)** into the main JSON action buttons group instead of floating panel.

---

## [0.1.0] - 2025-09-02
### Added
- Initial release of **JSON Formatter Tool**.
- Features: JSON beautify, minify, validate, tree view, Unicode conversion, copy to clipboard, responsive UI.
