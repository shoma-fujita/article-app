export default {
  ci: {
    collect: {
      staticDistDir: './.output/public',
      url: [
        'http://localhost:3000/',
      ],
      numberOfRuns: 3,
    },
    upload: {
      target: 'temporary-public-storage',
    },
    "assert": {
        "assertions": {
          "first-contentful-paint": ["error", { "minScore": 0.6 }]
        }
      }
  },
};