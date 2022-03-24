import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, AlertController } from '@ionic/angular';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-agregar-alimento',
  templateUrl: './agregar-alimento.page.html',
  styleUrls: ['./agregar-alimento.page.scss'],
})
export class AgregarAlimentoPage implements OnInit {

  comida: any;

  inputArticulo: any;
  inputTipo: any;
  inputPrecio: any;
  inputCantidad: any;
  inputImagen: any;

  constructor(private dataService: DataService, public navCtrl: NavController, public alertCtrl: AlertController, private router: Router) {
   }

  ngOnInit() {
  }

  async agregar(){

    const nombre = this.inputArticulo;
    const tipo = this.inputTipo;
    const precio = this.inputPrecio;
    const cantidad = this.inputCantidad;
    const url = this.inputImagen;

    if(nombre != undefined &&
      tipo != undefined &&
      precio != undefined &&
      cantidad != undefined &&
      url != undefined){

        const jsonComida = {
          nombre: nombre,
          precio: precio,
          tipo: tipo,
          url: url,
          cantidad: cantidad,
          deleted: false
        }

        this.dataService.addComida(jsonComida);

        let alert = await this.alertCtrl.create({
          header: 'Comida insertada',
          message: 'La comida ha sido insertada exitosamente.',
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



    }else {

      let alert = await this.alertCtrl.create({
        header: 'Advertencia datos inválidos',
        message: 'Por favor revise que todos los campos hayan sido llenados.',
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


  regresar(){
    this.router.navigateByUrl('/alimentos-menu-admin', { replaceUrl: true});
  }

}
