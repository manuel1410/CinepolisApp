import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, AlertController } from '@ionic/angular';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-modificar-alimento',
  templateUrl: './modificar-alimento.page.html',
  styleUrls: ['./modificar-alimento.page.scss'],
})
export class ModificarAlimentoPage implements OnInit {

  comida: any;

  inputArticulo: any;
  inputTipo: any;
  inputPrecio: any;
  inputCantidad: any;
  inputImagen: any;

  constructor(private dataService: DataService, public navCtrl: NavController, public alertCtrl: AlertController, private router: Router) { 

    this.comida = this.dataService.getComidaLocal();
  }

  ngOnInit() {
  }


  async modificar(){

    var nombre = this.inputArticulo;
    var tipo = this.inputTipo;
    var precio = this.inputPrecio;
    var cantidad = this.inputCantidad;
    var url = this.inputImagen;

    if(nombre == undefined){
      nombre = this.comida.nombre;
    }
    if(tipo == undefined){
      tipo = this.comida.tipo;
    }
    if(precio == undefined){
      precio = this.comida.precio;
    }
    if(cantidad == undefined){
      cantidad = this.comida.cantidad;
    }
    if(url == undefined){
      url = this.comida.url;
    }

    const jsonComida = {
      id: this.comida.id,
      cantidad: cantidad,
      deleted: false,
      nombre: nombre,
      precio: precio,
      tipo: tipo,
      url: url
    }

    this.dataService.updateComida(jsonComida);

    let alert = await this.alertCtrl.create({
      header: 'Modificación realizada',
      message: 'La modificación se ha registrado con éxito.',
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
    this.router.navigateByUrl('/alimentos-menu-admin', { replaceUrl: true});

  }



  regresar(){
    this.router.navigateByUrl('/alimentos-menu-admin', { replaceUrl: true});
  }

}
