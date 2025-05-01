const postcssConfig = ctx => ({
  map: {
    inline: false,
    annotation: true,
    sourcesContent: true
  },
  plugins: {
    autoprefixer: {
      cascade: false
    },
    rtlcss: ctx.env === 'RTL' ? {} : false
  }
})

export default postcssConfig
