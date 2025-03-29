module.exports = {
  ci: {
    collect: {
      staticDistDir: '.output/public',
      url: [
        'http://localhost:3000/',
      ],
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
