module.exports = {
  ci: {
    collect: {
      // テスト対象となるURLを再追加
      url: ['http://localhost:3000/'],
      staticDistDir: '.output/public',
      // サーバーを自動的に起動するコマンド（プロジェクトに応じて変更）
      startServerCommand: 'npm run start',
      numberOfRuns: 3,
    },
    upload: {
      target: 'temporary-public-storage',
    },
    assert: {
      assertions: {
        // Web Vitalsに関する特定のアサーション
        'first-contentful-paint': ['warn', {maxNumericValue: 2000}],
        'largest-contentful-paint': ['error', {maxNumericValue: 2500}],
        'cumulative-layout-shift': ['error', {maxNumericValue: 0.1}],
        'total-blocking-time': ['warn', {maxNumericValue: 300}],
        'interactive': ['warn', {maxNumericValue: 3500}],
      },
    },
  },
};
