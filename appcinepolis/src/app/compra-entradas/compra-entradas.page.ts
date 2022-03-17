import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, AlertController } from '@ionic/angular';
import { ValueAccessor } from '@ionic/angular/directives/control-value-accessors/value-accessor';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-compra-entradas',
  templateUrl: './compra-entradas.page.html',
  styleUrls: ['./compra-entradas.page.scss'],
})
export class CompraEntradasPage implements OnInit {

  pelicula: any;
  cantidadAdultosMayores: any;
  cantidadAdultos: any;
  cantidadNinos: any;
  salas: any;
  sala: any;
  salaLocal: any;
  colorsArray: Array<any>;

  selectedItem: any;

  constructor(private dataService: DataService, public navCtrl: NavController, public alertCtrl: AlertController, private router: Router) {
    this.colorsArray = [];
    this.pelicula = this.dataService.getPeliculaLocal();
    const salaRef = this.dataService.getSalas();

    this.salaLocal = this.dataService.getSalaLocal();

    salaRef.subscribe(res => {
      this.salas = res;

      for(let sala of this.salas){
        if(sala.pelicula == this.pelicula.titulo){
          this.dataService.setSalaLocal(sala);
          this.sala = this.dataService.getSalaLocal();
          let i = 0;
          for(let asiento of sala.asientos){
            if(asiento.reservado == false){
              this.colorsArray[i]='dark';
            }
            else if(asiento.reservado == true){
              this.colorsArray[i]='warning';
            }
            i++;
          }
          //this.dataService.createMatrizAsientos(this.sala);
        }
      }
    })

   }

  ngOnInit() {
  }

  async entradasCarrito() {

    var i = 0;
    let indicesArray = [];
    for(let asiento of this.colorsArray){
      if(asiento == 'success'){
        indicesArray.push(i);
        i++;
      }
    }

    const nombrePelicula = this.pelicula.titulo;
    const salaPelicula = this.sala.nombre;
    const horaPelicula = this.sala.hora;
    const cantidadAsientos = i;
    const cantidadNinos = this.cantidadNinos;
    const cantidadAdultos = this.cantidadAdultos;
    const cantidadAdultosMayores = this.cantidadAdultosMayores;
    const precioNinosTotal = cantidadNinos*this.pelicula.precio_nino;
    const precioAdultosTotal = cantidadAdultos*this.pelicula.precio_normal;
    const precioAdultosMayoresTotal = cantidadAdultosMayores*this.pelicula.precio_adultomayor;
    const precioTotal = precioNinosTotal+precioAdultosTotal+precioAdultosMayoresTotal;
    const url = this.pelicula.url;

    var stringAsientos = "";
    for(let asiento of indicesArray){
      var numAsiento = asiento.toString();
      stringAsientos = stringAsientos + numAsiento + "  ";
    }

    const numAsientos = stringAsientos;

    const jsonCompraEntradas = {

      nombre: nombrePelicula,
      sala: salaPelicula,
      hora: horaPelicula,
      cantidadEntradas: cantidadAsientos,
      cantidadNinos: cantidadNinos,
      cantidadAdultos: cantidadAdultos,
      cantidadAdultosMayores: cantidadAdultosMayores,
      precioNinosTotal: precioNinosTotal,
      precioAdultosTotal: precioAdultosTotal,
      precioAdultosMayoresTotal: precioAdultosMayoresTotal,
      precioTotal: precioTotal,
      numAsientos: numAsientos,
      url: url

    }

    if(this.sala.nombre == 'Sala 01'){
      this.dataService.setSala01Carrito(jsonCompraEntradas);

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
    }
    else if(this.sala.nombre == 'Sala 02'){
      this.dataService.setSala02Carrito(jsonCompraEntradas);

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
    }
    else if(this.sala.nombre == 'Sala 03'){
      this.dataService.setSala03Carrito(jsonCompraEntradas);

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
    }
    this.actualizarCampos();
    this.router.navigateByUrl('/mainmenu', { replaceUrl: true});
  }

  async validarEntradas() {

    var i = 0;

    for(let asiento of this.colorsArray){
      if(asiento == 'success'){
        i++;
      }
    }

    const contadorAsientos = i;

    if((contadorAsientos == (this.cantidadNinos + this.cantidadAdultos + this.cantidadAdultosMayores)) && contadorAsientos <= this.sala.cantidad_asientos){
      /*AÑADIR AL CARRITO*/
      this.entradasCarrito();
    }
    else {
      let alert = await this.alertCtrl.create({
        header: 'Advertencia datos inválidos',
        message: 'Por favor revise que la cantidad de asientos seleccionados sea la misma que la cantidad total ingresada.',
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

  actualizarCampos() {
    let i = 0;
    var matrizAsientos = [];
    const usuario = this.dataService.getUsuarioLocal();
    for(let asiento of this.colorsArray){
      if(asiento == 'success'){
        var jsonAsiento = {id: i, num_asiento: i+1, reservado: true, persona: ""};
        matrizAsientos.push(jsonAsiento);
      }
      else if(asiento == 'warning'){
        var jsonAsiento_aux = {id: i, num_asiento: i+1, reservado: true, persona: ""};
        matrizAsientos.push(jsonAsiento_aux);
      }
      else if(asiento == 'dark'){
        var jsonAsiento_aux_ = {id: i, num_asiento: i+1, reservado: false, persona: ""};
        matrizAsientos.push(jsonAsiento_aux_);
      }
      i++;
    }

    this.dataService.updateReservas({id: this.sala.id, nombre: this.sala.nombre, pelicula: this.sala.pelicula, hora: this.sala.hora, deleted: this.sala.deleted, cantidad_asientos: this.sala.cantidad_asientos, asientos: matrizAsientos});

  }

  cambiarColor(index) {
    if(this.colorsArray[index] === 'dark'){
      this.colorsArray[index] = 'success';
    }
    else if(this.colorsArray[index] === 'success'){
      this.colorsArray[index] = 'dark';
    }
  }

  regresar() {
    this.router.navigateByUrl('/detalles-pelicula', { replaceUrl: true});
  }

}
