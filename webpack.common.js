const path = require("path");

module.exports = {
  mode: process.env.NODE_ENV,
  entry: "./src/client/client.tsx",
  
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader', 
          }
        ]
      }
    ],
    
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  }
}
