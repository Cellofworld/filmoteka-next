/** @type {import('next').NextConfig} */
const path = require('path');
const nextConfig = {
    images: {
      domains: ['kinopoiskapiunofficial.tech', 'avatars.mds.yandex.net'],
      },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
      },


}

module.exports = nextConfig
