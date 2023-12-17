{
    test: /\.(mov|mp4)$/,
    use; [
      {
        loader: 'file-loader',
        options: {
          name: '[name].[ext]'
        }  
      }
    ]
  }