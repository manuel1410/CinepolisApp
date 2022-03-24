import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.page.html',
  styleUrls: ['./admin-login.page.scss'],
})
export class AdminLoginPage implements OnInit {

  inputEmail: any;
  inputPassword: any;
  admin: any;


  constructor(private dataService: DataService, public navCtrl: NavController, public alertCtrl: AlertController, private router: Router) { }

  ngOnInit() {
  }

  adminUser() {
    this.router.navigateByUrl('/home', { replaceUrl: true});
  }

  login() {
    const admins = this.dataService.getAdmins();

    this.login_aux(admins).then(res => {
      if(this.admin){
        this.dataService.setAdminLocal(this.admin);
        console.log("Inicio de sesión exitoso.");
        this.router.navigateByUrl('/mainmenu-admin', {replaceUrl: true});
        return this.admin;
      }
      else {
        console.log("Incio de sesión fallido. Por favor verifique los datos ingresados.");
      }
    }).catch(err => {console.log("Error")});

  }

  async login_aux(admins){
    await admins.subscribe(res => {
      for(let item in res){
        if(res[item].correo == this.inputEmail && res[item].contrasena == this.inputPassword){
          this.admin = res[item];
          return this.admin;
        }
      }
    });
  }
}
