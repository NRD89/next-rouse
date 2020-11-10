const withPlugins = require("next-compose-plugins")
const optimizedImages = require("next-optimized-images")
const withVideos = require("next-videos")

const nextConfig = {
  // Target must be serverless
  target: "serverless",
}

module.exports = withPlugins(
  [
    [
      optimizedImages,
      {
        // these are the default values so you don't have to provide them if they are good enough for your use-case.
        // but you can overwrite them here with any valid value you want.
        inlineImageLimit: 8192,
        imagesFolder: "images",
        imagesName: "[name]-[hash].[ext]",
        handleImages: ["jpeg", "png", "svg", "webp", "gif"],
        removeOriginalExtension: false,
        optimizeImages: true,
        optimizeImagesInDev: true,
        mozjpeg: {
          quality: 80,
        },
        optipng: {
          optimizationLevel: 3,
        },
        pngquant: false,
        gifsicle: {
          interlaced: true,
          optimizationLevel: 3,
        },
        svgo: {
          // enable/disable svgo plugins here
        },
        webp: {
          preset: "default",
          quality: 90,
        },
        responsive: {
          adapter: require("responsive-loader/sharp"),
          sizes: [100, 320, 640, 960, 1200, 1800, 2400],
          placeholder: true,
          placeholderSize: 20,
        },
      },
    ],
    [withVideos],
  ],
  nextConfig
)
