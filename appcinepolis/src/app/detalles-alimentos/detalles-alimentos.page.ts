import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, AlertController } from '@ionic/angular';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-detalles-alimentos',
  templateUrl: './detalles-alimentos.page.html',
  styleUrls: ['./detalles-alimentos.page.scss'],
})
export class DetallesAlimentosPage implements OnInit {

  comida: any;
  cantidad: any;

  constructor(private dataService: DataService, public navCtrl: NavController, public alertCtrl: AlertController, private router: Router) { 
    this.comida = this.dataService.getComidaLocal();
  }

  ngOnInit() {
  }

  regresar() {
    this.router.navigateByUrl('/alimentos-menu', { replaceUrl: true});
  }

  async agregarCarrito(){
    const cantidadStock = this.comida.cantidad;

    const nombreComida = this.comida.nombre;
    const cantidadSeleccionada = this.cantidad;
    const precioUnitario = this.comida.precio;
    const precioTotal = cantidadSeleccionada*precioUnitario;
    const url = this.comida.url;

    if(cantidadStock == 0){

      let alert = await this.alertCtrl.create({
        header: 'Stock Inexistente',
        message: 'No se puede agregar al carrito debido a que no hay cantidad disponible.',
        buttons: [
          {
            text: 'Ok',
            handler: () => {
              console.log('Confirm Ok');
            }
          }
        ]
      })
      await alert.present();

    } else if((cantidadSeleccionada <= cantidadStock) && (cantidadSeleccionada > 0)){

      const numRD = Math.floor(Math.random()*10000000000);

      const jsonComidaCarrito = {
        nombre: nombreComida,
        cantidad: cantidadSeleccionada,
        precioUnitario: precioUnitario,
        precioTotal: precioTotal,
        url: url,
        numOrden: numRD
      }
      this.dataService.setComidasCarrito(jsonComidaCarrito);
      let alert = await this.alertCtrl.create({
        header: 'Reserva realizada',
        message: 'Su compra ha sido añadida con éxito al carrito',
        buttons: [
          {
            text: 'Ok',
            handler: () => {
              console.log('Confirm Ok');
            }
          }
        ]
      })
      await alert.present();
      this.actualizarStock();
      this.router.navigateByUrl('/alimentos-menu', { replaceUrl: true});
    } else {
      let alert = await this.alertCtrl.create({
        header: 'Advertencia datos inválidos',
        message: 'Por favor revise que los datos ingresados sean correctos.',
        buttons: [
          {
            text: 'Ok',
            handler: () => {
              console.log('Confirm Ok');
            }
          }
        ]
      })
      await alert.present();
    }

  }

  actualizarStock(){
    const stock = this.comida.cantidad - this.cantidad;
    this.dataService.updateStock({id: this.comida.id, nombre: this.comida.nombre, tipo: this.comida.tipo, precio: this.comida.precio, url: this.comida.url, deleted: this.comida.deleted, cantidad: stock});
  }

}
