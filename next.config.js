const nextConfig = {
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
};
