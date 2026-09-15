import { Component, HostBinding } from '@angular/core';

interface Producto {
  nombre: string;
  descripcion: string;
}

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html'
})
export class ListaComponent {
  @HostBinding('class.d-block')
  mostrarComoBloque = true;

  productos: Producto[] = [
    {
      nombre: 'Laptop',
      descripcion: 'Equipo para estudiar y trabajar.'
    },
    {
      nombre: 'Teclado',
      descripcion: 'Teclado para uso diario.'
    },
    {
      nombre: 'Mouse',
      descripcion: 'Mouse inalámbrico.'
    }
  ];

  agregarProducto(nombre: string, descripcion: string): void {
    const nombreLimpio = nombre.trim();
    const descripcionLimpia = descripcion.trim();

    if (!nombreLimpio || !descripcionLimpia) {
      return;
    }

    this.productos.push({
      nombre: nombreLimpio,
      descripcion: descripcionLimpia
    });
  }
}