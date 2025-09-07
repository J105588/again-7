# 保護者席申込システム

## 概要
2日間6公演分（12個）のスプレッドシートに対応した保護者席申込システムです。
- フロントエンド: GitHub Pages
- サーバー: Google Apps Script (GAS)
- 通信: JSONP
- 時間帯情報: フロントエンドで直接管理

## ファイル構成
- `timeslot.html` - 時間帯選択ページ
- `parent_multi.html` - 座席申込ページ
- `index.html` - エントリーポイント（timeslot.htmlにリダイレクト）
- `main.gs` - GASメインスクリプト
- `初期化_ログ.gs` - ログシート初期化
- `初期化_本体.gs` - 座席シート初期化

## セットアップ手順

### 1. Google Apps Scriptの設定
1. `main.gs`の`PERFORMANCE_SHEETS`オブジェクトで各公演のスプレッドシートIDを設定
2. GASプロジェクトをデプロイ（Webアプリとして）
3. デプロイURLを取得

### 2. フロントエンドの設定
1. `timeslot.html`と`parent_multi.html`の`GAS_URL`を実際のデプロイURLに変更
2. GitHub Pagesにファイルをアップロード

### 3. スプレッドシートの準備
1. 各公演用のスプレッドシートを作成
2. `initializeSeats()`と`initializeLogSheet()`を実行してシートを初期化

## 公演設定（2日間6公演）
- `day1_performance1`: 1日目 第1公演 (9:00-10:00)
- `day1_performance2`: 1日目 第2公演 (11:00-12:00)
- `day1_performance3`: 1日目 第3公演 (14:00-15:00)
- `day2_performance1`: 2日目 第1公演 (9:00-10:00)
- `day2_performance2`: 2日目 第2公演 (11:00-12:00)
- `day2_performance3`: 2日目 第3公演 (14:00-15:00)

## 使用方法
1. ユーザーは`timeslot.html`で公演を選択
2. 選択した公演に応じて`parent_multi.html`で座席申込
3. 申込データは対応するスプレッドシートに保存

## 技術的特徴
- 時間帯情報はフロントエンドで直接管理（スプレッドシートから取得しない）
- JSONP通信によるクロスオリジン対応
- スクリプトタグの重複防止機能
- エラーハンドリングの強化
- 座席データのバリデーション

## 注意事項
- 各公演のスプレッドシートIDは必ず設定してください
- GASのデプロイURLは適切に設定してください
- ライセンスキーの設定も必要に応じて確認してください
