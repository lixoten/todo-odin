project-folder/
│
├── README.md
│
├── src/
│   ├── index.html
│   ├── css/
│   │   └── styles.css
│   └── js/
│       └── script.js
│
├── assets/
│   └── images/
│       └── logo.png
│
└── dist/
    └── index.html

=====================================================
`npm init`
`npm install webpack webpack-cli --save-dev`


`npm install --save-dev html-webpack-plugin`
`npm install --save-dev css-loader`
`npm install --save-dev mini-css-extract-plugin`
`npm install --save-dev file-loader`
`npx webpack`
Optional run if you want watch
`npx webpack --watch`

Optional Install if you want run server
`npm install --save-dev webpack-dev-server`
`npx webpack serve`
or in webpack 
note...... if you use "server" no need for "watch". "server" also watches
```json
{
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack --progress --mode=development",
    "watch": "webpack --progress --watch",
    "server": "webpack-dev-server --open"
  }
}
```

```json
{
  "main": "src/js/index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack --progress --mode=development",
    "watch": "webpack --progress --watch",
    "server": "webpack-dev-server --open"
  }
}
```

`npm install --save-dev gh-pages`

before: "deploy": "gh-pages -d dist",
after: below, it tries to comment out /dist/ in .gitignore, pust and then uncomment it again. We do not wannt track dist files, but it needs to be removed so deploy can work correctly. there is always the manual way...
```json
{
  "scripts": {
    "deploy": "sed -i 's|^/dist/|#/dist/|' .gitignore && gh-pages -d dist && sed -i 's|^#/dist/|/dist/|' .gitignore"
  }
}
```

* Things to do 
  * Make sure to remove
    * ---script tag
    * ---css tag ------ DEPENDS on how we want to implement
  * add index.js
  * modify applicable files for image imports
    * do not forget index.html if any images are used
  * update .gitignore file if needed


================================================================================
================================================================================
================================================================================
================================================================================
### Note:  It can generate an HTML file for you, or you can provide your own template. we use template
npm install webpack webpack-cli --save-dev

```javascript
const path = require('path');

module.exports = {
  mode: "development",
  //entry: './path/to/my/entry/file.js',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    //filename: 'my-first-webpack.bundle.js'
    filename: 'main.js',
  },
  // optional helps with debugging as in making line numnbers match  
  devtool: "source-map",
  // devServer: {
  //     // contentBase: path.join(__dirname, 'dist'), 
  //     // use statics... newer version
  //     static: {
  //         directory: path.join(__dirname, 'dist'),
  //     },
  //
  //     port: 3000,
  //     open: true,
  // },
  // module: {
  //   rules: [
  //     {
  //       test: /\.txt$/,
  //       use: 'raw-loader'
  //     }
  //   ]
  // }
};
```



================================================================================
================================================================================
================================================================================
================================================================================
### Note:  It can generate an HTML file for you, or you can provide your own template. we use template
npm install --save-dev html-webpack-plugin

`const HtmlWebpackPlugin = require('html-webpack-plugin');`
```javascript

module.exports = {
  // ...
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: 'body',
      minify: false
    }),
  ],
  // ...
};
```



================================================================================
================================================================================
================================================================================
================================================================================
### Note: This allows you to import CSS files directly in your JavaScript files.
npm install --save-dev css-loader
in your main entry js u will need
`import './styles.css';`

```javascript
module.exports = {
  // ...
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['css-loader'],
      },
    ],
  },
  // ...
};
```

================================================================================
================================================================================
================================================================================
================================================================================
### Note: extracts CSS into separate files. It is useful for when you want to separate your CSS styles from your JavaScript bundles
npm install --save-dev mini-css-extract-plugin

`const MiniCssExtractPlugin = require('mini-css-extract-plugin');`

```javascript
module.exports = {
  // ...
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
  // ...
};
```



================================================================================
================================================================================
================================================================================
================================================================================
### Note:  import files directly in your JavaScript files
npm install --save-dev file-loader
example:
```javascript
import image1 from './assets/images/bolinho.jpg';
import image2 from './assets/images/farofa.jpg';

const item1 = menuItem(image1, "Bolinho de Bacalahu", "$3.00 Each");
const item2 = menuItem(image2, "Farofa Dish", "$12.00");
//or 
<img src=image1 alt="poop">
```



```javascript
module.exports = {
  // ...
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images',
            },
          },
        ],
      },
    ],
  },
  // ...
};
```


```javascript
            // Tag-C CSS becomes pard of js bundle file, no need for css-loader.. alternate wat of doing it
            // npm install --save-dev style-loader
            // {
            //     test: /\.css$/,
            //     use: ['style-loader', 'css-loader'],
            // },

```