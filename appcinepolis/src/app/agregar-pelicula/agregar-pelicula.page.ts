import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, AlertController } from '@ionic/angular';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-agregar-pelicula',
  templateUrl: './agregar-pelicula.page.html',
  styleUrls: ['./agregar-pelicula.page.scss'],
})
export class AgregarPeliculaPage implements OnInit {

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

  peliculas: any;
  salas: any;

  constructor(private dataService: DataService, public navCtrl: NavController, public alertCtrl: AlertController, private router: Router) { 
    const peliculasRef = this.dataService.getPeliculas();
    peliculasRef.subscribe(res => {
      this.peliculas = res;
    })

    const salasRef = this.dataService.getSalas();
    salasRef.subscribe(res => {
      this.salas = res;
    })

  }

  ngOnInit() {
  }

  async registrar(){

    const titulo = this.inputTitulo;
    const director = this.inputDirector;
    const actores = [this.inputActores];
    const duracion = this.inputDuracion;
    const generos = [this.inputGeneros];
    const idiomas = [this.inputIdiomas];
    const edad = this.inputEdad;
    const sala = this.inputSala;
    const hora = this.inputHora;
    const url = this.inputImagen;
    const precioNino = this.inputPrecioNino;
    const precioAdulto = this.inputPrecioAdulto;
    const precioAdultoMayor = this.inputPrecioAdultoMayor;

    if(
      titulo != undefined &&
      director != undefined &&
      actores[0] != undefined &&
      duracion != undefined &&
      generos[0] != undefined &&
      idiomas[0] != undefined &&
      edad != undefined &&
      sala != undefined &&
      hora != undefined &&
      url != undefined &&
      precioNino != undefined &&
      precioAdulto != undefined &&
      precioAdultoMayor != undefined){

        if((sala == "Sala 01" || sala == "Sala 02" || sala == "Sala 03")){
          this.quitarDeCartelera(sala);
          this.actualizarSala(sala,hora,titulo);
        }


        if(sala == "Sala 01" || sala == "Sala 02" || sala == "Sala 03" || sala == "no-asignado"){
          var salaFlag;
          if(sala == "no-asignado"){
            salaFlag = false;
          }else {
            salaFlag = true;
          }
        }
        const jsonPelicula = {
          actores: actores,
          deleted: false,
          director: director,
          duracion: duracion,
          edad_min: edad,
          generos: generos,
          idiomas: idiomas,
          precio_adultomayor: precioAdultoMayor,
          precio_nino: precioNino,
          precio_normal: precioAdulto,
          Hora: hora,
          Sala: sala,
          salaFlag: salaFlag,
          titulo: titulo,
          url: url
        }

        this.dataService.addPelicula(jsonPelicula);


        let alert = await this.alertCtrl.create({
          header: 'Pelicula insertada',
          message: 'La película ha sido insertada exitosamente.',
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


  regresar(){
    this.router.navigateByUrl('/mainmenu-admin', { replaceUrl: true});
  }

}
