# Vídeo 3
## Caminhos Relativos no ReactJS

## Pacotes utilizados:
- `yarn add react-app-rewired`
- `yarn add babel-plugin-root-import`
- `yarn add customize-cra`

### `package.json` foi modificado
#### de:

```
"scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
```
#### para:

```
"scripts": {
    "start": "react-app-rewired start",
    "build": "react-app-rewired build",
    "test": "react-app-rewired test",
    "eject": "react-scripts eject"
  },
  ```