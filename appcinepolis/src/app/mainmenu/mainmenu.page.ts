import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-mainmenu',
  templateUrl: './mainmenu.page.html',
  styleUrls: ['./mainmenu.page.scss'],
})
export class MainmenuPage implements OnInit {

  peliculas: any;
  pelicula: any;


  constructor(private dataService: DataService, public navCtrl: NavController, public alertCtrl: AlertController, private router: Router) { 
    const peliculasRef = this.dataService.getPeliculas();
    peliculasRef.subscribe(res => {
      this.peliculas = res;
    })
  }

  ngOnInit() {
  }

  regresar() {
    this.router.navigateByUrl('/home', { replaceUrl: true});
  }

  detallesPelicula(item) {
    this.pelicula = item;
    this.dataService.setPeliculaLocal(item);
    this.router.navigateByUrl('/detalles-pelicula', { replaceUrl: true});
  }

  alimentos(){
    this.router.navigateByUrl('/alimentos-menu', { replaceUrl: true});
  }

  carrito() {

  }

}
