# GoodPeople Castelldefels

Sitio web estático de **GOODPEOPLE-SURFSKATE**, una escuela de surf y surfskate en Castelldefels y Barcelona.

La web presenta la propuesta de la escuela, sus sesiones de surf y surfskate, información sobre el equipo y diferentes formas de contacto, incluido WhatsApp e Instagram.

## Tecnologías

- HTML5
- CSS3
- JavaScript
- jQuery (incluido localmente en `lib/jquery.js`)
- Font Awesome y Google Fonts mediante CDN

## Estructura del proyecto

```text
.
├── index.html       # Página principal
├── styles.css       # Estilos y diseño responsive
├── main.js          # Interacciones del menú, scroll y modal de imágenes
├── lib/jquery.js    # Librería jQuery
└── imgs/            # Imágenes, logotipo e iconos
```

## Ejecutarlo en local

Al ser una web estática no necesita un servidor de aplicaciones. Puede abrirse directamente haciendo doble clic en `index.html`. Para una vista más fiel al entorno de producción también puede servirse con cualquier servidor HTTP local, por ejemplo mediante la extensión **Live Server** de Visual Studio Code.

## Publicarlo en GitHub Pages

El proyecto está preparado para publicarse como una página estática. En el repositorio de GitHub:

1. Entra en **Settings → Pages**.
2. En **Build and deployment**, selecciona **Deploy from a branch**.
3. Selecciona la rama `master` y la carpeta `/ (root)`.
4. Pulsa **Save**.

GitHub generará una dirección similar a:

```text
https://adrian-san-lop.github.io/GoodPeopleCasteldefells/
```

La página principal debe llamarse `index.html` y estar en la raíz, condiciones que ya cumple este proyecto. Cada `push` posterior a `master` actualizará automáticamente la web, normalmente después de unos minutos.

