import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {
 
  transform( images: any[]): string{
    // Recibimos un parámetro de tipo arreglo.
 
    if ( !images ){ // Se comprueba que el parámetro no sea undefined o null, del contrario se retorna una imagen por defecto.
      return 'assets/img/noimage.png';
    } 
    
    if ( images.length > 0 ){ // Se comprueba que el arreglo sea mayor a 0, de esta manera se puede saber si posee un valor o no. 
      return images[0].url;
    } else {
      return 'assets/img/noimage.png';
      
    }
  }
 
}
