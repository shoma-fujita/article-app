module.exports = {
  ci: {
    collect: {
      // 静的サイトの場合
      // staticDistDir: './dist',
      // または実行中のサーバーの場合
      startServerCommand: 'npm run start',
      url: [
        'http://localhost:3000/',
        // 他に測定したいURLを追加
      ],
      numberOfRuns: 3, // 各URLに対して実行する回数
    },
    upload: {
      target: 'temporary-public-storage', // または独自のサーバー
    },
    assert: {
      preset: 'lighthouse:recommended',
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