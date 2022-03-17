import { Component, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DataService } from '../services/data.service';
import { AlertController } from '@ionic/angular';
import { RegisterPage } from '../register/register.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  inputEmail: any; 
  inputPassword: any;
  usuario: any;

  constructor(private dataService: DataService, public navCtrl: NavController, public alertCtrl: AlertController, private router: Router) {
    this.dataService.createcarritoLocal();
  }


  login() {
    const usuarios = this.dataService.getUsuarios();

    this.login_aux(usuarios).then(res => {
      if(this.usuario){
        this.dataService.setUsuarioLocal(this.usuario);
        console.log("Inicio de sesión exitoso.");
        this.router.navigateByUrl('/mainmenu', {replaceUrl: true});
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
    this.router.navigateByUrl('/register', { replaceUrl: true});
  }

  adminLogin(){
    this.router.navigateByUrl('/admin-login', { replaceUrl: true});
  }

}
