import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  inputEmail: any; 
  inputPassword: any;
  usuario: any;

  constructor(private dataService: DataService, public navCtrl: NavController) {

  }


  login() {

    const usuarios = this.dataService.getUsuarios();
    this.login_aux(usuarios).then(res => {
      if(this.usuario){
        console.log("Inicio de sesión exitoso.");
        return this.usuario;
      }
      else {
        console.log("Incio de sesión fallido. Por favor verifique los datos ingresados.");
      }
    }).catch(err => {console.log("Error")});
  }

  async login_aux(usuarios){
    await usuarios.subscribe(res => {
      for(let item in res){
        if(res[item].correo == this.inputEmail && res[item].contrasena == this.inputPassword){
          this.usuario = res[item];
          return this.usuario;
        }
      }
    });
  }

  register(){


  }

  adminLogin(){


  }

}
