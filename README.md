# react-practice

1) npx create-react-app .     (инициализируем приложение)
     или
 1.2)  npx create-react-app my-app
 1.3) cd my-app       (открыть папку с проектом)
2) npm start
3) удаляем лишние папки
4) npm i prop-types    (сокращение написания для prop-types, например pts)
5) npm install --save-dev prettier eslint       (инициализируем линст, и хаски)
   выполняем команду
   npx mrm@2 lint-staged
6) Стилизация:
  6.1) Emotion
       npm install --save @emotion/react
  6.2) styled-components
       npm install --save styled-components   
7) добавим папку 
  7.1) .prettierrc.json 
        {
          "printWidth": 80,
          "tabWidth": 2,
          "useTabs": false,
          "semi": true,
          "singleQuote": true,
          "trailingComma": "es5",
          "bracketSpacing": true,
          "jsxBracketSameLine": false,
          "arrowParens": "avoid",
          "proseWrap": "always"
        }
  
  7.2) jsconfig.json            (что бы не прописывать путь ../../, поиск по паке)
            {
              "compilerOptions": {
                    "baseUrl": "src"
                },
                "include": [
                    "src"
                ]
            }
8) Deployment:
   https://create-react-app.dev/docs/deployment
