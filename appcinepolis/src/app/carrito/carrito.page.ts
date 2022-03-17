import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, AlertController } from '@ionic/angular';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {

  carritoLocal: any;
  carritoArrayPeliculas: Array<any>;
  carritoArrayComidas: Array<any>;

  constructor(private dataService: DataService, public navCtrl: NavController, public alertCtrl: AlertController, private router: Router) { 
    this.carritoLocal = this.dataService.getCarritoLocal();
    this.carritoArrayPeliculas = [];
    this.carritoArrayComidas = [];

    this.carritoArrayPeliculas = [{
      nombre: "SAO: Progressive-Aria de noche sin estrellas",
      sala: "Sala 01",
      hora: "12:20",
      cantidadEntradas: 1,
      cantidadNinos: 0,
      cantidadAdultos: 1,
      cantidadAdultosMayores: 0,
      precioNinosTotal: 0,
      precioAdultosTotal: 2900,
      precioAdultosMayoresTotal: 0,
      precioTotal: 2900,
      numAsientos: "0  ",
      url: "https://previews.dropbox.com/p/thumb/ABfvqeGcnDnDL1hdxCv5z_CFUXNnD4xqJfxo-vQOaWomVKUWUN7mwHNYWOHf9T6nLziPk32zrsETxQlp2Qpd4-0Hq9UYikERPyd94yq8jtaEdDrI8SyXXvsD1sA02nqv0lX14Fqfi0WSTchXO-RfifJOKlz_XCIj_owjhLbEM1tBbB9C25uuuRdhoM9TKV4yyozaNPWHXPqUCeySUVSRGqcfrVPR54-mG1FuvQ5CKjnwvd0mKNoONyg7yPryTNZG5Bov-9ahAh-kixZS7xMD2MVkIS4iOrE9AclTxlfhaOhwrZUwB7yPFgEzGv5Fdk1QlJzU81yz9g_PP21h3OGHC__XHUbJGi7eUtJ9NfsYhVaVtjKoF6Lh40GDAcfPCEGF6-Q/p.jpeg"
  }]

    /*

    for(let elemento of this.carritoLocal.sala01){
      this.carritoArrayPeliculas.push(elemento);
    }
    for(let elemento of this.carritoLocal.sala02){
      this.carritoArrayPeliculas.push(elemento);
    }
    for(let elemento of this.carritoLocal.sala03){
      this.carritoArrayPeliculas.push(elemento);
    }
    for(let elemento of this.carritoLocal.comidas){
      this.carritoArrayComidas.push(elemento);
    }

    */

  }

  ngOnInit() {
  }

  eliminarItem(index){

  }

  limpiarCarrito() {

  }

  confirmarCarrito() {

  }

  regresar() {
    this.router.navigateByUrl('/mainmenu', { replaceUrl: true});
  }

}
