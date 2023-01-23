# Minimal Angular

Angular プロジェクト、どこまで小さく作れるか挑戦。

以下の環境で動作確認しました。

- WSL2 Ubuntu v20.04.5 : Node.js v18.12.1 : npm v8.19.2
- macOS Monterey v12.4 : Node.js v18.12.1 : npm v8.19.2


## インストール

```bash
$ npm install
```


## 開発

```bash
$ npm start
```

- `http://localhost:4200/`


## ビルド

```bash
$ npm run build
$ npx sirv-cli ./docs/
```

- `http://localhost:8080/`
