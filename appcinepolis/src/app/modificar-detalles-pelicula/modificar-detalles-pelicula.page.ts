import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { NavController, AlertController } from '@ionic/angular';
import { DataService, Pelicula } from '../services/data.service';

@Component({
  selector: 'app-modificar-detalles-pelicula',
  templateUrl: './modificar-detalles-pelicula.page.html',
  styleUrls: ['./modificar-detalles-pelicula.page.scss'],
})
export class ModificarDetallesPeliculaPage implements OnInit {

  pelicula: any;
  peliculas: any;


  inputTitulo: any;
  inputDirector: any;
  inputActores: any;
  inputDuracion: any;
  inputGeneros: any;
  inputIdiomas: any;
  inputEdad: any;
  inputSala: any;
  inputHora: any;
  inputImagen: any;
  inputPrecioNino: any;
  inputPrecioAdulto: any;
  inputPrecioAdultoMayor: any;

  salas: any;

  constructor(private dataService: DataService, public navCtrl: NavController, public alertCtrl: AlertController, private router: Router) { 
    this.pelicula = this.dataService.getPeliculaLocal();
    const salasRef = this.dataService.getSalas();
    salasRef.subscribe(res => {
      this.salas = res;
    })

    const peliculasRef = this.dataService.getPeliculas();
    peliculasRef.subscribe(res => {
      this.peliculas = res;
    })
  }

  ngOnInit() {
  }

  async modificar(){

    var titulo;
    var director;
    var actores;
    var duracion;
    var generos;
    var idiomas;
    var edad;
    var sala;
    var hora;
    var url;
    var precioNino;
    var precioNormal;
    var precioAdultoMayor;

    if(this.inputTitulo != undefined){
       titulo = this.inputTitulo;
    }else {
       titulo = this.pelicula.titulo;
    }
    if(this.inputDirector != undefined){
       director = this.inputDirector;
    }
    else {
       director = this.pelicula.director;
    }
    if(this.inputActores != undefined){
       actores = [this.inputActores];
    }
    else {
       actores = this.pelicula.actores;
    }
    if(this.inputDuracion != undefined){
       duracion = this.inputDuracion;
    }
    else {
       duracion = this.pelicula.duracion;
    }
    if(this.inputGeneros != undefined){
       generos = [this.inputGeneros];
    }
    else {
       generos = this.pelicula.generos;
    }
    if(this.inputIdiomas != undefined){
       idiomas = [this.inputIdiomas];
    }
    else {
       idiomas = this.pelicula.idiomas;
    }
    if(this.inputEdad != undefined){
       edad = this.inputEdad;
    }
    else {
       edad = this.pelicula.edad_min;
    }
    if(this.inputHora != undefined){
      hora = this.inputHora;
    }
    else {
        hora = this.pelicula.Hora;
    }
    if(this.inputSala != undefined){
      sala = this.inputSala;

      if((sala == "Sala 01" || sala == "Sala 02" || sala == "Sala 03") && (this.pelicula.Sala == "no-asignado")){
        this.quitarDeCartelera(sala);
        this.actualizarSala(sala,hora,titulo);
      }
    }
    else {
      sala = this.pelicula.Sala;
    }
    if(this.inputImagen != undefined){
      url = this.inputImagen;
    }
    else {
        url = this.pelicula.url;
    }
    if(this.inputPrecioNino != undefined){
      precioNino = this.inputPrecioNino;
    }
    else {
      precioNino = this.pelicula.precio_nino;
    }
    if(this.inputPrecioAdulto != undefined){
      precioNormal = this.inputPrecioAdulto;
    }
    else {
      precioNormal = this.pelicula.precio_normal;
    }
    if(this.inputPrecioAdultoMayor != undefined){
      precioAdultoMayor = this.inputPrecioAdultoMayor;
    }
    else {
      precioAdultoMayor = this.pelicula.precio_adultomayor;
    }


    if(sala == "Sala 01" || sala == "Sala 02" || sala == "Sala 03" || sala == "no-asignado"){
      var salaFlag;
      if(sala == "no-asignado"){
        salaFlag = false;
      }else {
        salaFlag = true;
      }

      const id = this.pelicula.id;

      if(actores != undefined){
        const jsonPelicula = {
          id: id,
          actores: actores,
          deleted: false,
          director: director,
          duracion: duracion,
          edad_min: edad,
          generos: generos,
          idiomas: idiomas,
          precio_adultomayor: precioAdultoMayor,
          precio_nino: precioNino,
          precio_normal: precioNormal,
          Sala: sala,
          Hora: hora,
          salaFlag: salaFlag,
          titulo: titulo,
          url: url
        }

        this.dataService.updatePelicula(jsonPelicula);
      } else if(actores == undefined){
        const jsonPelicula = {
          id: id,
          actores: actores,
          deleted: false,
          director: director,
          duracion: duracion,
          edad_min: edad,
          generos: generos,
          idiomas: idiomas,
          precio_adultomayor: precioAdultoMayor,
          precio_nino: precioNino,
          precio_normal: precioNormal,
          Sala: sala,
          Hora: hora,
          salaFlag: salaFlag,
          titulo: titulo,
          url: url
        }
        this.dataService.updatePeliculaSinActores(jsonPelicula);
      }

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
      this.router.navigateByUrl('/mainmenu-admin', { replaceUrl: true});
    } 
    else{
      return this.mensajeSalaIncorrecta();
    }

  }

  actualizarSala(sala_aux,hora,titulo){
    // console.log('======');
    // console.log(sala_aux);
    // console.log(hora);
    // console.log(titulo);

    var matrizAsientos = [];

    for(let i=0; i < 100; i++){
      var asiento = {id: i, num_asiento: i+1, reservado: false, persona: ""}
      matrizAsientos.push(asiento);
    }

    for(let sala of this.salas){

      if(sala.nombre == sala_aux){

        const jsonSala = {
          id: sala.id,
          cantidad_asientos: 100,
          deleted: false,
          hora: hora,
          nombre: sala.nombre,
          pelicula: titulo,
          asientos: matrizAsientos
        }

        this.dataService.updateSala(jsonSala);

      }

    }

  }

  quitarDeCartelera(sala){
    for(let pelicula of this.peliculas){
      var peliculaMod = pelicula;
      if(pelicula.Sala == sala){
        peliculaMod.Sala = 'no-asignado';
        peliculaMod.Hora = 'no-asignado';
        peliculaMod.salaFlag = false;
        this.dataService.quitarSalaPelicula(peliculaMod);
      }
    }
  }

  async  mensajeSalaIncorrecta(){
    let alert = await this.alertCtrl.create({
      header: 'Advertencia sala Inválida',
      message: 'Por favor revise la sala ingresada sea la correcta.',
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

  regresar(){
    this.router.navigateByUrl('/mainmenu-admin', { replaceUrl: true});
  }
}
