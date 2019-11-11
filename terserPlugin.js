const TerserPlugin = require("terser-webpack-plugin");

module.exports.terserPlugin = new TerserPlugin({
  test: /\.(js|jsx|ts|tsx)$/i,

  parallel: true,
  cache: true,
  sourceMap: false,
  terserOptions: {
    warnings: false,
    // ecma: 5,
    keep_classnames: false,
    keep_fnames: false,
    // ie8: false,
    parse: {
      ecma: 8
    },
    mangle: {
      // keep_classnames: true,
      // keep_fnames: true,
      // properties: {
      //   builtins: true,
      //   // domprops : true,
      // },
    },
    output: {
      ecma: 7
    },
    compress: {
      drop_console: true,
      hoist_funs: true,
      hoist_props: true,
      toplevel: true,
      passes: 4,
      keep_fargs: false,
      // ecma: 5,
      // keep_classnames: true,
      // keep_fnames: true,
      // keep_infinity : true,
      unsafe: true
      // unsafe_arrows  : true,
      // unsafe_comps   : false,
      // unsafe_Func    : false,
      // unsafe_math    : true,
      // unsafe_methods : true,
      // unsafe_proto   : false,
      // unsafe_regexp  : true,
      // toplevel: true,
    },
    comments: false,
    sourceMap: false,
    toplevel: true
  }
});
