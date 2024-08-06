# Piano App

Piano App es una aplicación de piano virtual que permite a los usuarios tocar el piano utilizando su teclado. Los usuarios pueden cambiar el sonido del instrumento por defecto (piano) a otros instrumentos como guitarra eléctrica, trompeta y saxofón.

## Características

- Toca el piano virtual utilizando tu teclado.
- Cambia el sonido del instrumento entre piano, guitarra eléctrica, trompeta y saxofón.
- Interfaz de usuario amigable y responsiva.

## Tecnologías Utilizadas

- **React**: Biblioteca de JavaScript para construir interfaces de usuario.
- **Redux**: Contenedor de estado predecible para aplicaciones JavaScript.
- **Soundfont-Player**: Biblioteca para reproducir sonidos de instrumentos musicales.
- **Vite**: Herramienta de construcción rápida para proyectos de front-end.
- **Jest**: Marco de pruebas para JavaScript.
- **ESLint**: Herramienta de análisis de código estático para identificar patrones problemáticos.

## Requisitos Previos

- Node.js (versión 14 o superior)
- npm (versión 6 o superior)

## Instalación

1. Clona el repositorio:

    ```bash
    git clone https://github.com/tu-usuario/piano-app.git
    cd piano-app
    ```

2. Instala las dependencias:

    ```bash
    npm install
    ```

## Scripts Disponibles

- `dev`: Inicia el servidor de desarrollo.
    ```bash
    npm run dev
    ```
- `build`: Construye la aplicación para producción.
    ```bash
    npm run build
    ```
- `lint`: Ejecuta ESLint para analizar el código.
    ```bash
    npm run lint
    ```
- `preview`: Previsualiza la aplicación construida.
    ```bash
    npm run preview
    ```
- `test`: Ejecuta las pruebas con Jest.
    ```bash
    npm run test
    ```

## Estructura del Proyecto

```plaintext
piano-app/
├── src/
│   ├── components/
│   │   ├── Piano.js
│   │   ├── PianoKey.js
│   │   ├── PianoKeyBlack.js
│   │   └── ...
│   ├── hooks/
│   │   └── usePianoStore.js
│   ├── store/
│   │   ├── slices/
│   │   │   └── pianoSlice.js
│   │   └── ...
│   ├── App.js
│   └── main.js
├── public/
│   └── index.html
├── package.json
└── README.md
