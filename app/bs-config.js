module.exports = {
  proxy: {
    target: "localhost:8080",
    ws: true, // WebSocketを有効化
  },
  files: [
    {
      match: ["./**/*.php", "./**/*.css", "./**/*.js"],
      fn: function (event, file) {
        this.reload(); // 強制的にリロード
      },
    },
  ],
  watchOptions: {
    usePolling: true, // ポーリングを使用してファイル変更を検知
    interval: 500, // ポーリング間隔（ミリ秒）
  },
  open: false, // 自動でブラウザを開かない
  notify: true,
};
