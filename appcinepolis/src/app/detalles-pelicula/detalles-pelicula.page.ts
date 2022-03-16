import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-detalles-pelicula',
  templateUrl: './detalles-pelicula.page.html',
  styleUrls: ['./detalles-pelicula.page.scss'],
})
export class DetallesPeliculaPage implements OnInit {

  pelicula: any;

  constructor(private dataService: DataService, public navCtrl: NavController, public alertCtrl: AlertController, private router: Router) { 
    this.pelicula = this.dataService.getPeliculaLocal();
  }

  ngOnInit() {
  }


  regresar() {
    this.router.navigateByUrl('/mainmenu', { replaceUrl: true});
  }

  comprarEntradas() {
    
  }
}
