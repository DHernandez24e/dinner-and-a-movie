// PWA setup 
const path = require("path");
const webpack = require("webpack");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const WebpackPwaManifest = require("webpack-pwa-manifest");

console.log(path.join(__dirname, './'));

module.exports = { 
    entry: 
      './client/public/index.html',
        
    output: {
        path: __dirname + './client/public/js',
        filename: 'index.bundle.js'
      },
      mode: 'development',
      plugins: [
  
    new WebpackPwaManifest({
      name: "Dinner and a Movie",
      short_name: "dinnermovie",
      description: "Takeout and a movie with friends remotely.",
      background_color: "#01579b",
      theme_color: "#ffffff",
      fingerprints: false,
      inject: false,
      icons: [{
        src: path.resolve('./client/public/icons/android-chrome-512x512.png'),
        sizes: [96, 128, 192, 256, 384, 512],
        destination: path.join('./client/public/icons')
      }]
    })
  ], 
};