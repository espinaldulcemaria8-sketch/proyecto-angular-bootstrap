# Angular Bootstrap Listado

Proyecto SPA básico realizado con Angular, TypeScript y Bootstrap.

## Ejecutar

1. Instalar Node.js.
2. Abrir esta carpeta en VS Code.
3. En la terminal ejecutar:
   npm install
4. Luego:
   npm start
5. Abrir http://localhost:4200

## Evidencias de la consigna

1. Bootstrap aparece en package.json.
2. Bootstrap se importa en src/styles.css.
3. Se utilizan clases Bootstrap en app.component.html y lista.component.html.
4. Se utiliza {{ }} para mostrar variables TypeScript.
5. ListaComponent contiene un array de productos.
6. lista.component.html tiene UL, LI y *ngFor.
7. ListaComponent utiliza @HostBinding.
8. El formulario utiliza variables de plantilla #nombreControl y #descripcionControl.
9. El submit llama a agregarProducto().
10. agregarProducto() agrega un objeto al array productos y Angular actualiza la lista.
