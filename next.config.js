const isGithub = process.env.GITHUB_ACTIONS === 'true';

module.exports = {
  output: 'export',
  basePath: isGithub ? '/portfolio' : '',
  assetPrefix: isGithub ? '/portfolio/' : '',
  eslint: { ignoreDuringBuilds: true },
  images: { unoptimized: true },
};
