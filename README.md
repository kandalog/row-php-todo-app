## リポジトリの説明

- 素の PHP を勉強したので、アウトプットとして認証機能付き TODO アプリを作成してみる
- Laravel へ移る前の手慣らし的なアプリ開発

## 環境スタート

```
1 .envを作成 (compose.ymlを参照) ※1
2 docker compose up -d
3 open http://localhost:8080
```

※1 環境変数 (php, db 両コンテナの.env ファイルに設定してください)

```shell
MYSQL_ROOT_PASSWORD=
MYSQL_DATABASE=
MYSQL_USER=
MYSQL_PASSWORD=
```

---

## 作成するアプリ

- TODO アプリ

## 要件

- TODO の CRUD が可能
- 認可認証機能付き
  - セッション方式
  - セッションストアはファイル(デフォルト)
  - email, password 方式(hash 化)
- 表示は縦に 3 つに分ける - 開始前 - 進行中 - 完了
  制限
- CRUD は自分の TODO のみ

## 非機能要件

- 最低限のセキュリティ対策
  - XSS
  - CSRF
  - 2 重送信

## 使用技術

- PHP
- MySql
- Laravel

## リンク

[『Qiita』Docker 環境に関してはこちらで解説しています](https://qiita.com/kandalog/items/af8611479f3936064179)
