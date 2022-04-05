/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  rules: {
    '@next/next/no-css-tags': false
  },
  env: {
    // baseURL: 'http://localhost:1998/',
    baseURL: 'https://blog-tth.herokuapp.com/',
    navLink: [
      {
        href: '/',
        name: 'Home'
      },
      {
        href: '/blog',
        name: 'Blog'
      },
      {
        href: '/about',
        name: 'About'
      }
    ]
  },
}
