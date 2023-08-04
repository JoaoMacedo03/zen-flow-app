# Zen Flow App

[![Run Tests](https://github.com/Coaktion/zen-flow-app/actions/workflows/test.yml/badge.svg)](https://github.com/Coaktion/zen-flow-app/actions/workflows/test.yml)
[![Close stale issues and PRs](https://github.com/Coaktion/zen-flow-app/actions/workflows/stale.yml/badge.svg)](https://github.com/Coaktion/zen-flow-app/actions/workflows/stale.yml)
[![Publish Zendesk Application](https://github.com/Coaktion/zen-flow-app/actions/workflows/publish.yml/badge.svg)](https://github.com/Coaktion/zen-flow-app/actions/workflows/publish.yml)

An app to create zendesk ticket flow action

## Getting Started

1. Clone this repository
2. Run `npm install`
3. Run `npm run dev`

## Zendesk App

### Zendesk App CLI

This project uses the [Zendesk App CLI](https://developer.zendesk.com/apps/docs/developer-guide/zat) to manage the Zendesk app.

### Zendesk App Tools (ZAT) installation

```bash
gem install zendesk_apps_tools
```

reference: [Zendesk App Tools (ZAT) installation](https://developer.zendesk.com/documentation/apps/zendesk-app-tools-zat/installing-and-using-zat/)

### Zendesk App Manifest

The Zendesk app manifest is located at `manifest.json`.

### Zendesk App Development

```bash
cd zendesk && zat server
```

### Zendesk App CI/CD

This project uses [GitHub Actions](https://github.com/Coaktion/zen-flow-app/actions/workflows/publish.yml) to build and deploy the Zendesk app.

[![](https://drive.google.com/thumbnail?authuser=0&sz=w1280&id=18rw2LxsGsMugZDadKTgwxic7cyt9qCkT)](https://drive.google.com/file/d/18rw2LxsGsMugZDadKTgwxic7cyt9qCkT)

## Dependencies

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Zendesk App CLI](https://developer.zendesk.com/apps/docs/developer-guide/zat)
- [Coaktion Client Core](https://github.com/Coaktion/client-core)
- [Cokation Aktie Client](https://github.com/Coaktion/aktie-clients)
- [Coaktion Zendesk Client React](https://github.com/Coaktion/zendesk-clients-react)

## Contributing

See [CONTRIBUTING.md](./.github/CONTRIBUTING.md).

## Full Documentation

See [docs](https://coaktion.drozbase.cx/).
