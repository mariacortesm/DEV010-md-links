**PROYECTO MDLINKS CON NODE.JS**

**PREÁMBULO**

**MdLinks** es una librería en **Node.js** que permite leer, extraer y analizar archivos *Markdown*.

**CONTENIDO**
1. Ejecución de hitos.
2. Diagrama de flujo.
3. Creación de Github Project: issues y milestones.
4. Código.
5. Test unitarios.
6. Tecnologías utilizadas.
7. Links útiles.

**1 . EJECUCIÓN DE HITOS**

**Hito 1**

-   Creación de la promesa de  **mdLinks**.
    
-   Transformar la ruta ingresada a absoluta.
    
-   Verificar que la ruta ingresada exista en el computador.
    
-   Validar que la extensión del archivo sea *Markdown*.
    
-   Leer y retornar el contenido del archivo.
    
-   Extraer los enlaces en un array de objetos.
    
-   Crear tests unitarios para cada una de las funciones.
    

**Hito 2**

-   Verificar si se desea verificar o no los enlaces.
    
-   En caso de que se verifiquen, extraer el status en un array de objetos.
    
-   Obtener el código HTTP de respuesta para el status del enlace.
    
-   Crear test unitarios para la función implementada con Axios.
    

**DESARROLLO
2 . DIAGRAMA DE FLUJO**
    

En el diagrama de flujo encontramos la resolución de la promesa, si se resuelve o se rechaza. En este caso, dependiendo de la pregunta se ejecuta la promesa resolviéndose o rechazándose, esta nos retorna el contenido del archivo *Markdown*, nos extrae los links y verifica su estado.
<a href="https://ibb.co/Mp5fJG1"><img src="https://i.ibb.co/zbHFt72/Diagrama-de-flujo-md-links.png" alt="Diagrama-de-flujo-md-links" border="0"></a>

**3. CREACIÓN DE GITHUB PROJECT: ISSUES Y MILESTONES**

En este proyecto se usó la herramienta de Github, *Github  project*, que permite organizar, planificar y personalizar las tareas de cada hito, agrupándolas en progreso, nuevas y hechas. Lo que permite tener una visión clara del proceso y desarrollo del proyecto.
<a href="https://ibb.co/Yy3k05v"><img src="https://i.ibb.co/3M7NRxt/Github-project.png" alt="Github-project" border="0"></a>
<a href="https://ibb.co/68Mfw58"><img src="https://i.ibb.co/0K7d23K/github-project-hito1y2.png" alt="github-project-hito1y2" border="0"></a>

**4. CÓDIGO**

**-   CONTENTMD:**
    

`ContentMd` es una función que retorna una nueva promesa con el método `fs.readfile` que devuelve un array con el contenido del archivo *Markdown* o un error en caso de que no exista tal contenido. La función `readFile` de `fs` es asíncrona, por lo que se utiliza una promesa para manejar el resultado cuando la lectura del archivo se completa o falla.
<a href="https://ibb.co/GnFnvGL"><img src="https://i.ibb.co/JmCmR84/contentmd.png" alt="contentmd" border="0"></a>

-   **EXTRACTLINKS:**
    

La función `extractFile` utiliza una expresión regular para buscar coincidencias (un texto entre corchetes seguido por una URL entre paréntesis) en el archivo *Markdown*, además se usa el buble `while` para ejecutar la expresión regular y extraer cada enlace encontrado. Después de la extracción de estos enlaces, los guarda en un objeto con las claves `text`, `href` y `file`. Finalmente, esta función retorna un nuevo array de objetos con las claves y valores correspondientes.
<a href="https://ibb.co/k457fYM"><img src="https://i.ibb.co/T4YfSzr/extract-Links.png" alt="extract-Links" border="0"></a>

-   **FILEMARKDOWN:**
    

La función `fileMarkdown` verifica si un archivo tiene una extensión que corresponda a un archivo *Markdown*. Para ello, se define un array que contiene una lista de extensiones de archivos *Markdown*, luego se verifica si la extensión de la ruta proporcionada en el parámetro coincide con tales extensiones, devolviendo `true`, en caso contrario, devolviendo `false`.
<a href="https://ibb.co/7JXG0Mh"><img src="https://i.ibb.co/gM3DcqY/file-Markdown.png" alt="file-Markdown" border="0"></a>

-   **VALIDATELINKS:**
    

Esta función recibe un array de objetos y valida su estado en cada enlace usando la librería `Axios`, que permite hacer peticiones `HTTP` desde Javascript. De esta manera, la función retorna un array de promesas para esperar a que todas las solicitudes se completen antes de devolver los resultados. Así, verifica el estado de cada enlace `HTTP` en un array de objetos y actualiza cada link con su respectiva información de estado.
<a href="https://ibb.co/jyw9VB2"><img src="https://i.ibb.co/QPH78zR/validate-Links.png" alt="validate-Links" border="0"></a>

**-   MDLINKS:**
    

La función `mdLinks` busca archivos *Markdwon* en una ruta específica, lee, extrae su contenido y analiza los enlaces de forma asíncrona.
<a href="https://ibb.co/vdcSbyP"><img src="https://i.ibb.co/QHJ4ZSN/mdLinks1.png" alt="mdLinks1" border="0"></a>
<a href="https://ibb.co/yR894vG"><img src="https://i.ibb.co/1n9gzyh/mdLinks2.png" alt="mdLinks2" border="0"></a>

**-   INDEX:**
    

Esta función recibe toda la información de la función `mdLinks` y retorna una promesa, cuando esta se resuelve correctamente se muestra la información, de lo contrario se rechaza.
<a href="https://ibb.co/jvr7t4s"><img src="https://i.ibb.co/zh4KdfD/indexjs.png" alt="indexjs" border="0"></a>

**5. TEST UNITARIOS**

Se realizaron tests unitarios a las siguientes funciones: 

 - `contentMd:`

<a href="https://ibb.co/K7t61Zk"><img src="https://i.ibb.co/gw0yn1p/contentmd-Test.png" alt="contentmd-Test" border="0"></a>

 - `extractLinks:`

<a href="https://ibb.co/Tt8yCZx"><img src="https://i.ibb.co/x6jZ4yt/extract-Links-Test.png" alt="extract-Links-Test" border="0"></a>

 - `fileMarkdown:`

<a href="https://ibb.co/zFtkjc3"><img src="https://i.ibb.co/9hdMzXx/file-Markdown-Test.png" alt="file-Markdown-Test" border="0"></a>

 - `validateLinks:`

<a href="https://ibb.co/d4B9B6Q"><img src="https://i.ibb.co/N2xhxpL/validate-Links-Test1.png" alt="validate-Links-Test1" border="0"></a>
<a href="https://ibb.co/DtTq65m"><img src="https://i.ibb.co/PN0SbwJ/Validate-Links-Test2.png" alt="Validate-Links-Test2" border="0"></a>
<a href="https://ibb.co/C5Z4NVD"><img src="https://i.ibb.co/LzWBb9H/Validate-Links-Test3.png" alt="Validate-Links-Test3" border="0"></a>

**COVERAGE:**

En los anteriores tests unitarios tenemos el siguiente coverage: 

<a href="https://ibb.co/bJ6Wb7h"><img src="https://i.ibb.co/hfg7YC5/resultadotests.png" alt="resultadotests" border="0"></a>

<a href="https://ibb.co/YBQdQB6"><img src="https://i.ibb.co/23hMh3w/coverage.png" alt="coverage" border="0"></a>

**6. TECNOLOGÍAS UTILIZADAS**
- **JavaScript:** Implementa la funcionalidad para analizar el texto ingresado y mostrar los resultados.  
- **Node.js:** Es un entorno de ejecución para JavaScript del lado del servidor.  
- **CommonJS:** Los módulos son una forma de organizar y estructurar código en archivos separados en JS. Por otro lado, `module.exports` se utiliza para exportar las funciones y variables del módulo; en tanto que `require('./modulo')` se utiliza para importar el módulo en otro archivo.  
- **Módulo fs:** Para interactuar con el sistema de archivos.  
- **Módulo path:** Para trabajar con rutas de archivos y directorios.  
- **Axios:** Biblioteca para realizar solicitudes **HTTP**.  
- **EsLint:** Herramienta de *linting* para JavaScript.  
- **Jest:** Marco de pruebas para JavaScript.

## 7. *Links* útiles
[Promesas – JavaScript hecho fácil](https://www.youtube.com/watch?v=ZTC0Gfhdzfc&t=156s)
[Arrays, map, forEach, reduce y mucho más!](https://www.youtube.com/watch?v=J9vUZu6edBA)
[Así funcionan las Promesas y async/await en JavaScript](https://www.youtube.com/watch?v=6O8ax3JYboc)
[Node.js v6.17.1 Documentation](https://nodejs.org/dist/latest-v6.x/docs/api/fs.html)
[Node.js v21.2.0 documentation](https://nodejs.org/docs/latest/api/modules.html)
[Promise](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise)
[How to Write a JavaScript Promise](https://www.freecodecamp.org/news/how-to-write-a-javascript-promise-4ed8d44292b8/)
[Tests de código asíncrono](https://jestjs.io/es-ES/docs/asynchronous)
[Introducción al testing desde cero con Jest](https://www.youtube.com/watch?v=_DzBez4qMi0&ab_channel=midudev)
[Aprende cómo aplicar Jest Mock paso a paso fácil y sin dolor](https://developero.io/blog/jest-mock-module-function-class-promises-axios-y-mas)
[Cómo crear pruebas unitarias con JEST](https://4geeks.com/es/lesson/how-to-create-unit-testing-with-Javascript-and-Jest-es)
