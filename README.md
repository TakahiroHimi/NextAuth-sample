# NextAuth を使用して GitHub OAuth Application で認証＆アクセストークンを取得するサンプル

## 実行手順

### 事前準備

1. [こちら](https://docs.github.com/ja/developers/apps/creating-an-oauth-app)を参考に GitHub OAuth Application を作成する。  
   OAuth Application 　設定値

   - **Application name**：任意の名前　例）NextAuth-sample
   - **Homepage URL**：`http://localhost:3000/`
   - **Application description**：任意の description 　例）Sample App for NextAuth
   - **Authorization callback URL**：`http://localhost:3000/`

2. `.env.sample`をコピーしてファイル名を`.env.local`にリネームし、ファイル内容を編集する。
   ```.env.local
   GITHUB_ID=作成したOAuth ApplicationのClientID
   GITHUB_SECRET=作成したOAuth ApplicationのClient secrets
   ```

<br />

## 実行手順

1. パッケージインストール・アプリ実行
   ```bash
   yarn install
   yarn dev
   ```
1. http://localhost:3000/ にアクセス
