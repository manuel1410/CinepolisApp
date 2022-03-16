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

  constructor(private dataService: DataService, public navCtrl: NavController, public alertCtrl: AlertController, private router: Router) { 

    const comidasRef = this.dataService.getComidas();
    comidasRef.subscribe(res => {
      this.comidas = res;
    })
  }

  ngOnInit() {
  }


  detallesComida(item) {

  }

  carrito() {
    
  }

  regresar() {
    this.router.navigateByUrl('/mainmenu', { replaceUrl: true});
  }
}
