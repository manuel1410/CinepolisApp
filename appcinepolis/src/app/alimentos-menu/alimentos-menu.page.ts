import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, AlertController } from '@ionic/angular';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-alimentos-menu',
  templateUrl: './alimentos-menu.page.html',
  styleUrls: ['./alimentos-menu.page.scss'],
})
export class AlimentosMenuPage implements OnInit {

  comidas: any;
  comidaGeneral: any;
  filtro_menu: boolean;
  comidasSwitch: boolean;
  bebidasSwitch: boolean;
  combosSwitch: boolean;


  constructor(private dataService: DataService, public navCtrl: NavController, public alertCtrl: AlertController, private router: Router) { 
    this.filtro_menu = false;
    this.comidasSwitch = true;
    this.combosSwitch = true;
    this.bebidasSwitch = true;

    const comidasRef = this.dataService.getComidas();
    comidasRef.subscribe(res => {
      this.comidas = res;
      this.comidaGeneral = res;
      this.dataService.setComidaGeneral(res);
    })
  }

  ngOnInit() {
  }


  detallesComida(item) {
    this.dataService.setComidaLocal(item);
    this.router.navigateByUrl('/detalles-alimentos', { replaceUrl: true});

  }

  carrito() {
    
  }

  filtrar() {
    this.filtro_menu = true;
  }

  devolverseFiltros() {
    this.dataService.setComidaFiltrada(this.comidaGeneral, this.comidasSwitch, this.bebidasSwitch, this.combosSwitch);
    this.comidas = this.dataService.getComidaFiltrada();
    this.filtro_menu = false;
  }

  regresar() {
    this.router.navigateByUrl('/mainmenu', { replaceUrl: true});
  }
}
