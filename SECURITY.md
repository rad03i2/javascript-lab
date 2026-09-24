# Security Policy

JavaScript Lab is a local educational/reference project. It has no backend and requires no credentials.

## Supported version
Security fixes target the current `main` branch.

## Reporting
Please report suspected vulnerabilities privately through GitHub's available private security reporting channel when enabled. Do not publish secrets, exploit data, or sensitive user information in a public issue.

## Scope and data handling
The expense tracker stores entries in browser localStorage and does not transmit them. localStorage is not encrypted; do not store passwords, tokens, card data, or highly sensitive records. The project intentionally avoids third-party runtime scripts and network services.
