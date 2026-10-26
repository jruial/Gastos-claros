# Gastos Claros · Versión 0.1

Primera versión de una aplicación sencilla de control de gastos mensuales para móvil, hecha en HTML, CSS y JavaScript sin librerías externas. El objetivo es registrar gastos de forma rápida, ver su distribución por categorías y comparar meses.

## Funciones actuales

- Vista de resumen de gastos, ingresos y saldo mensual de consumo.
- Registro rápido escribiendo, por ejemplo, `Mercadona 37,50`.
- Alta, modificación y eliminación de gastos, ingresos, traspasos y aportaciones de inversión. Los traspasos y las aportaciones no se contabilizan como gasto de consumo.
- Clasificación inicial de comercios por categorías, que puedes corregir.
- Gráfico de los últimos seis meses y gráfico anual para ver los meses de mayor y menor gasto.
- Búsqueda y filtros en movimientos.
- Importación de movimientos bancarios CSV (archivo, no conexión bancaria): selección de columnas, signo de los importes, revisión previa y avisos por posibles duplicados.
- Exportación CSV y copia/restauración JSON.
- Datos de ejemplo separados de tus registros reales. Al pulsar **Usar mis datos** se entra en modo personal vacío.
- Interfaz móvil y funcionamiento sin conexión una vez instalada en un servidor HTTPS compatible con PWA.

## Cómo probar ahora

Abre `Gastos_Claros_Probar.html` en un navegador compatible (incluido junto al paquete). Incluye todos los archivos de código en una sola página para facilitar las pruebas. Si se abre directamente como archivo, algunos navegadores —en especial en iOS— pueden no guardar los datos de forma persistente. No lo uses como archivo definitivo de tus cuentas: utiliza la versión alojada e instalada y exporta una copia.

## Cómo instalarlo como app en el iPhone

1. Publica el contenido **de esta carpeta** (`index.html`, `app.js`, `style.css`, `manifest.webmanifest`, `sw.js` e `icons/`) en un alojamiento HTTPS de archivos estáticos, por ejemplo GitHub Pages o Netlify. Al publicarlo, comprueba que la URL sirve `index.html` y que los archivos conservan sus rutas relativas.
2. Abre la URL HTTPS publicada desde **Safari** en el iPhone.
3. Pulsa **Compartir → Añadir a pantalla de inicio**.
4. Abre la app desde el icono. Después de cargar por primera vez, los recursos de la app pueden quedar disponibles sin conexión.
5. Exporta periódicamente una **copia JSON** desde Ajustes. Los datos reales permanecen en el almacenamiento local del navegador/dispositivo, no en un servidor; podrían perderse al borrar datos del sitio, cambiar de dispositivo, utilizar navegación privada o por restricciones del navegador.

**Privacidad:** la app no pide claves bancarias y no envía movimientos a ningún servidor. La importación CSV se procesa en el navegador. Publicar el código de la app no publica las operaciones personales que se registren después en ella. Los archivos CSV/JSON exportados contienen información financiera sensible; guárdalos con precaución.

## Cómo importar un CSV bancario

1. Desde tu banco, exporta los movimientos a CSV. Si los obtienes en Excel, usa la opción **Guardar como CSV**.
2. Abre `Importar CSV`. Elige las columnas de **fecha, concepto e importe**.
3. Comprueba cómo maneja el signo de los importes: un banco puede marcar los cargos como negativos, otro como positivos.
4. Revisa las filas identificadas como **posibles duplicados** (por seguridad quedan desmarcadas), decide si deben importarse y confirma.
5. Comprueba y corrige las categorías y los movimientos que no sean gastos de consumo, como traspasos o aportaciones a fondos.

**Limitaciones iniciales:** no hay sincronización entre dispositivos, conexión bancaria automática, reconocimiento de archivos XLSX, presupuestos automáticos, gastos periódicos programados ni módulo específico de inversiones y beneficios Saveback/Waylet. Esas funciones podrán añadirse después; el foco inicial es el control de gastos.

## Conceptos de los indicadores

- **Gastos:** operaciones de tipo «Gasto» (consumo).
- **Ingresos:** operaciones de tipo «Ingreso».
- **Saldo sin gastar:** ingresos menos gastos de consumo registrados. No es necesariamente el saldo bancario ni una medida de patrimonio.
- **Inversión / traspaso:** movimientos informativos que no se suman al gasto de consumo.
- **Media mensual en evolución:** promedio de los meses con movimientos, según el año elegido.

## Estructura

- `index.html`: aplicación web.
- `style.css`: diseño adaptable a móvil.
- `app.js`: almacenamiento local, cálculos y controles.
- `manifest.webmanifest`, `sw.js` e `icons/`: recursos para instalar como PWA.

Desarrollado como prototipo de uso personal, sin garantías de disponibilidad ni de compatibilidad con los CSV de todos los bancos. Antes de confiar plenamente en sus resúmenes, conviene comparar un mes con el extracto bancario.
