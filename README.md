Projeto do nanoDegre da Udacity
## Inicializando a aplicação
- npm install
- npm start

## Rodar testes da applição
- npm test

## Rodar coverage
- npm run coverage

## Structure of the project
```bash
├── README.md - This file.
├── .editorconfig
├── .eslintrc
├── .gitignore
├── package.json # npm package manager file.
├── coverage
│   ├── lcov-report
│   └── clover.xml
│   └── coverage-final.json
│   └── lcov.info
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html
│   └── manifest.json
├── scripts
│   ├── build.js
│   └── start.js
│   └── test.js
└── src
    ├── atoms
    │   ├──
    ├── molecules
    │   ├──
    ├── organisms
    │   ├── Aside
    │       └── Asside.css
    │       └── Asside.js
    │       └── Asside.test.js
    ├── pages
    │   ├── index.js
    │   └── index.test.js
    ├── templates
    │   ├── index.js
    │   └── template.css
    │   └── template.test.js
    ├── index.css # Global styles. You probably won't need to change anything here.
    ├── logo.svg
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```

## Coverage
![Coverage](public/coverage.png)
