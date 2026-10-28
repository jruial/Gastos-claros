# Gastos Claros v1.2 — Evolución de ingresos y gastos

- **Pantalla inicial:** las barras comparan gastos de consumo (rojo) e ingresos (azul) de los últimos seis meses, en vez de consumo e inversiones.
- **Pantalla Evolución:** el histórico anual ahora utiliza dos líneas (roja para gastos de consumo y azul para ingresos). Puedes cambiar de año con las flechas, desplazarte por el gráfico en móvil y consultar los importes mensuales desplegando «Ver importes por mes».
- Los meses sin movimientos no se representan como ceros falsos; cuando solo existe un mes con información aparece el punto correspondiente, y se dibujan líneas a medida que hay varios meses consecutivos con datos.
- **Las inversiones siguen restando liquidez**, permanecen visibles en su indicador, en la gráfica circular mensual y en el resumen anual, pero no se confunden con gastos de consumo.
- La caché de la aplicación se actualiza para facilitar la llegada de mejoras sin perder funcionamiento sin conexión.
- Se conserva **sin cambios** la clave de almacenamiento local `gastos-claros-v1` y el formato de movimientos y copias de seguridad.

## Actualización segura

1. En la aplicación que ya usas: Ajustes y datos → Copia de seguridad JSON. Guarda ese archivo fuera de la app.
2. En tu repositorio `jruial/Gastos-claros` sustituye **solo** `app.js`, `style.css`, `sw.js`, `LEEME.md` y añade `CAMBIOS_v1.2.md`. **No borres** los archivos restantes ni desinstales la app.
3. Espera a que GitHub Pages publique los archivos, abre la app y ciérrala/reábrela si sigue mostrando la anterior versión.
4. Revisa el número y los importes de tus movimientos anteriores.

Los datos permanecen en el almacenamiento local del navegador del iPhone; GitHub almacena solo el código de la aplicación, no tus gastos.
