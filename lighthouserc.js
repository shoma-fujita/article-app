export default {
  ci: {
    collect: {
      staticDistDir: '.output/public',
    },
    assert: {
      assertions: {
        // パフォーマンススコアが最低でも80以上であることを要求
        'categories:performance': ['error', { minScore: 0.8 }],
        // First Contentful Paintは3秒以内
        'first-contentful-paint': ['error', { maxNumericValue: 3000 }],
        // Time to Interactiveは5秒以内
        'interactive': ['error', { maxNumericValue: 5000 }],
        // Largest Contentful Paintは2.5秒以内
        'largest-contentful-paint': ['error', { maxNumericValue: 2500 }],
        // Cumulative Layout Shiftは0.25以下
        'cumulative-layout-shift': ['error', { maxNumericValue: 0.25 }],
      },
    },
    upload: {
      // 結果をGitHub上に保存
      target: 'temporary-public-storage',
    },
  },
};