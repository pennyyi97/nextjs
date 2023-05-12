/** @type {import('next').NextConfig} */
const API_KEY = "0ab38429f0e1a6919828c21e75f7408d";

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/old-blog/:path*",
        destination: "/new-sexy-blog/:path*",
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
      {
        source: "/api/movies/:id",
        destination:`https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`, //위와 아래의 id 변수명이 같아야 함.
      }
    ];
  },
}

module.exports = nextConfig
