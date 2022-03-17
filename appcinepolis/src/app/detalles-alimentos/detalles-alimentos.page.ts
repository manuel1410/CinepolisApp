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

  agregarCarrito(){
    
  }

}
