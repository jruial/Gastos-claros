# Gastos Claros · Versión 1.1

Primera versión de una aplicación sencilla de control de gastos mensuales para móvil, hecha en HTML, CSS y JavaScript sin librerías externas. El objetivo es registrar gastos de forma rápida, ver su distribución por categorías y comparar meses.

## Funciones actuales

- Vista de resumen de gastos, ingresos y saldo mensual de consumo.
- Registro rápido escribiendo, por ejemplo, `Mercadona 37,50`.
- Alta, modificación y eliminación de gastos, ingresos, traspasos y aportaciones de inversión. Las aportaciones se contabilizan como salidas de liquidez, sin considerarse gasto de consumo; los traspasos ordinarios no se incluyen en las salidas de este resumen.
- Clasificación inicial de comercios por categorías, que puedes corregir.
- Gráfico circular mensual con categorías de consumo e inversiones, y leyenda con importes y porcentajes.
- Gráfico comparativo de los últimos seis meses y gráfico anual con consumo e inversiones diferenciados.
- Indicadores de gastos de consumo, ingresos, inversiones y liquidez libre estimada.
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
- **Liquidez libre estimada:** ingresos menos gastos de consumo menos inversiones registradas. No es necesariamente el saldo bancario ni una medida de patrimonio; no incluye saldo inicial ni transferencias entre cuentas.
- **Inversión:** se resta de la liquidez y se refleja en gráficas de salidas de efectivo, pero no se suma al gasto de consumo.
- **Traspaso:** operación entre cuentas, excluida de las métricas principales para evitar doble contabilización.
- **Media mensual en evolución:** promedio de los meses con movimientos, según el año elegido.

## Estructura

- `index.html`: aplicación web.
- `style.css`: diseño adaptable a móvil.
- `app.js`: almacenamiento local, cálculos y controles.
- `manifest.webmanifest`, `sw.js` e `icons/`: recursos para instalar como PWA.

Desarrollado como prototipo de uso personal, sin garantías de disponibilidad ni de compatibilidad con los CSV de todos los bancos. Antes de confiar plenamente en sus resúmenes, conviene comparar un mes con el extracto bancario.

## Actualizar de la v0.1 a la v1.1 sin perder movimientos

1. **Antes de cambiar archivos**: abre la aplicación instalada en el móvil y descarga **Ajustes y datos → Copia de seguridad JSON**; guárdala fuera de la aplicación (Archivos/iCloud).
2. Reemplaza únicamente el código estático en el mismo repositorio y bajo la **misma dirección web**; evita borrar datos del navegador o desinstalar la aplicación.
3. La clave de almacenamiento **`gastos-claros-v1`** se mantiene exactamente igual; las operaciones existentes se siguen leyendo, sin conversión ni borrado.
4. Al volver a abrir, verifica importes y número de movimientos. Si faltaran datos, usa **Restaurar JSON** con la copia de seguridad. Atención: restaurar **sustituye** todos los movimientos por los de esa copia.
5. GitHub Pages publica el **código**, no tus operaciones bancarias privadas. **No subas archivos JSON/CSV personales** al repositorio.

> La fórmula de liquidez libre *ingresos − consumo − inversiones* es una estimación del mes. No incluye fondos existentes antes del mes ni traspasos entre cuentas, por lo que no sustituye a una conciliación bancaria.
