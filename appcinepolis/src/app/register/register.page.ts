import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  inputEmail: any;
  inputCedula: any;
  inputNombre: any;
  inputApellido1: any;
  inputApellido2: any;
  inputFechaNacimiento: any;
  inputVacunas: any;

  constructor(private dataService: DataService, public navCtrl: NavController, public alertCtrl: AlertController, private router: Router) { }

  ngOnInit() {
  }

  regresar(){
    this.router.navigateByUrl('/home', {replaceUrl: true});
  }

  registrar(){
    const cedula = this.inputCedula;
    const email = this.inputEmail;
    const nombre = this.inputNombre;
    const apellido1 = this.inputApellido1;
    const apellido2 = this.inputApellido2;
    const fechaNacimiento = this.inputFechaNacimiento;
    const vacunas = this.inputVacunas;

    /*Calculo de la edad*/ 
    const fecNacimiento = new Date(fechaNacimiento);
    const hoy = new Date();
    var Edad = hoy.getFullYear() - fecNacimiento.getFullYear();
    var meses = hoy.getMonth() - fecNacimiento.getMonth();
    if (meses < 0 || (meses === 0 && hoy.getDate() < fecNacimiento.getDate())) 
    {
      Edad--;
    }

    const edad = Edad;
    var Password = Math.floor(Math.random() * 1000000);
    while(Password < 100000){
      var Password = Math.floor(Math.random() * 1000000);
    }
    const password = Password.toString();
    
    this.dataService.addUsuario({
      correo: email,
      contrasena: password,
      numeroCedula: cedula,
      nombre: nombre,
      apellido1: apellido1,
      apellido2: apellido2,
      fechaNacimiento: fechaNacimiento,
      edad: edad,
      vacunacion: vacunas,
      deleted: false
    });

    //this.router.navigateByUrl('/home', { replaceUrl: true});
  }

}
