# Tecnicatura Superior en Desarrollo de Software - IFTS29
## Trabajo Práctico Grupal 1<br>Proyecto Web en Equipo<br>

**Materia:** Desarrollo de Sistemas Web (Front End)  
**Profesor:** LUCIANO ARIEL MARTINEZ  
**Comisión:** A  


- Rodrigues, Carina. 
- Mendiola, Eduardo E. 
- Herrera, Neuyin.  
- Integrante 4  
- Integrante 5  

## **Grupo 6 (Codebolts Six):**  
| Nombre              | Página individual     |
|---------------------|-----------------------|
| Rodrigues, Carina   | [crc.html](juan.html) |
| Mendiola, Eduardo E.| [eduardo.html](maria.html) |
| Herrera, Neuyin     | [neuyin.html](neuyin.html) |
| Integrante 4        | [integrante4.html](int4.html) |
| Integrante 5        | [integrante5.html](int5.html) |


**Fecha:** 19-09-2025  

---

## Enlace al Proyecto Desplegado
- Repositorio GitHub: [https://github.com/CariRodrigues/Frontend2025](https://github.com/CariRodrigues/Frontend2025)
- Proyecto en Vercel: [https://frontend2025-codebolts-Six.vercel.app](https://frontend2025-Codebolts-Six.vercel.app) !!!Cambiar por el link definitivo!!!

## Descripción del Proyecto
Este trabajo práctico consiste en desarrollar un sitio web que sirva como presentación del equipo de trabajo “Codebolts Six”.  
El objetivo del proyecto es crear un portfolio web individual y colectivo, donde cada integrante presenta su perfil profesional y personal de manera organizada. Cada miembro tuvo libertad para diseñar su propia tarjeta de presentación, eligiendo la información y la forma de mostrarla, incluyendo habilidades, intereses y otros datos relevantes.


El proyecto incluye:
- **Portada (index.html):** Presentación del equipo y listado de integrantes con enlaces a sus páginas individuales.
- **Páginas individuales:** Cada integrante tiene su página de presentación con foto, habilidades, películas y música favorita.
- **Sección de bitácora (bitacora.html):** Documentación del proceso de desarrollo, decisiones de diseño y dificultades resueltas.
- **Diseño responsive:** Adaptable a móviles, tablets y escritorio (breakpoints: 400px, 900px, 1200px).
- **Interacciones dinámicas:** JavaScript aplicado para mejorar la experiencia del usuario.

## Tecnologías Utilizadas
- HTML5
- CSS3 (tipografías de Google Fonts)
- JavaScript (Vanilla JS)
- Git y GitHub
- ChatGPT utilizado como soporte en el desarrollo.
- Imágenes y avatares generados con IA o ilustraciones

## Estructura de Archivos
```

/ (directorio raíz)
├── index.html             # Portada del proyecto
├── bitacora.html          # Sección de bitácora
├── crc.html               # Página individual de 
├── porfolios/
│   ├── crc.html           # Página individual de Carina Rodrigues
│   ├── eduardo.jpg        # Página individual de Eduardo Mendiola
│   ├── neuyin.html        # Página individual de Neuyin Herrera
│   ├── int4.html          # Página individual del integrante 4
│   └── int5.html          # Página individual del integrante 5
├── css/
│   └── styles.css         # Hoja de estilos principal
├── js/
│   ├── crc.js             # JS individual de Carina Rodrigues
│   ├── eduardo.js         # JS individual de Eduardo Mendiola
│   ├── neuyin.js          # JS individual de Neuyin Herrera
│   ├── int4.js            # JS individual del integrante 4
│   ├── int5.js            # JS individual del integrante 5
│   └── main.js            # Funciones dinámicas generales
├── img/
|   ├── screenshots
|   |       ├── carina_screenshot.png     
│   |       ├── eduardo_screenshot.png   
│   |       ├── neuyin_screenshot.png       
│   |       ├── int4_screenshot.png       
│   |       └── int5_screenshot.png       
│   ├── car.jpg
│   ├── eduardo.jpg
|   ├── neuyin.png
│   ├── logo.jpg
│   └── portada.png
└── README.md               # Este archivo

```

## Contenido en Páginas Individuales
Cada integrante tiene un porfolio con:
- **Foto**
- **Nombre completo**
- **Ubicación actual**: Ciudad
- **Edad**
- **Habilidades**: (mínimo 4)
- **Películas favoritas**: (mínimo 3)
- **Música favorita / discos**: (mínimo 3)
- Botones de navegación para volver a la portada o moverse entre integrantes.

## Capturas de Pantalla de los porfolios

### Carina Rodrigues
![Captura Carina Rodrigues](img/screenshots/carina_screenshot.png)

### Eduardo Mendiola
![Captura Eduardo Mendiola](img/screenshots/eduardo_screenshot.png)

### Neuyin Herrera
![Captura Neuyin Herrera](img/screenshots/neuyin_screenshot.png)

### Int 3
![Captura Int 3](img/screenshots/int3_screenshot.png)

### Int 3
![Captura Int 3](img/screenshots/int3_screenshot.png)


## Funciones JavaScript Implementadas
### Portada (index.html)
- **Mensaje de bienvenida**: Al hacer clic en el botón “Conocer al equipo”, aparece un modal con un mensaje de bienvenida.  
- **Hover sobre integrantes**: Al pasar el mouse sobre cada nombre de integrante, se aplica una animación de subrayado y cambio de color.

### Páginas individuales (eduardo.html)
- **Desplegar información extra**: Botón “Mostrar más” despliega o oculta datos adicionales del integrante.
- **Cambio de colores**: Botón “Cambiar tema” alterna entre dos esquemas de colores en la tarjeta.
- **Alertas de interés**: Al hacer clic en una película o disco, se muestra una alerta con un comentario adicional.

### Bitácora (bitacora.html)
- Listado cronológico de decisiones de diseño, dificultades y cómo se resolvieron.

```

05/09/25: Se definió el esquema de colores y tipografía.
07/09/25: Implementadas animaciones en la portada.
12/09/25: Ajustes de responsive en tablet (900px) y móvil (400px).
18/09/25: Creación de páginas individuales de cada integrante.

```

## Diseño Responsive
- Breakpoints implementados en CSS:
- 400px: móviles pequeños
- 900px: tablets y pantallas medianas
- 1200px: pantallas de escritorio grandes
- Todos los elementos se adaptan correctamente evitando desbordes o superposiciones.

---

> Nota: Este README debe actualizarse en TP2 y TP3 incorporando mejoras, capturas de pantalla y cambios realizados, reflejando la evolución del proyecto.
