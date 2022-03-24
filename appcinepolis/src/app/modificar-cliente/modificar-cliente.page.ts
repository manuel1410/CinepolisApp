import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, AlertController } from '@ionic/angular';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-modificar-cliente',
  templateUrl: './modificar-cliente.page.html',
  styleUrls: ['./modificar-cliente.page.scss'],
})
export class ModificarClientePage implements OnInit {

  cliente: any;

  inputEmail: any;
  inputCedula: any;
  inputNombre: any;
  inputApellido1: any;
  inputApellido2: any;
  inputFechaNacimiento: any;
  inputVacunas: any;

  constructor(private dataService: DataService, public navCtrl: NavController, public alertCtrl: AlertController, private router: Router) {

    this.cliente = this.dataService.getUsuarioLocal();
   }

  ngOnInit() {
  }

  async modificar(){
    var cedula = this.inputCedula;
    var email = this.inputEmail;
    var nombre = this.inputNombre;
    var apellido1 = this.inputApellido1;
    var apellido2 = this.inputApellido2;
    var fechaNacimiento = this.inputFechaNacimiento;
    var vacunas = this.inputVacunas;

    if(cedula == undefined){
      cedula = this.cliente.numeroCedula;
    }
    if(email == undefined){
      email = this.cliente.correo;
    }
    if(nombre == undefined){
      nombre = this.cliente.nombre;
    }
    if(apellido1 == undefined){
      apellido1 = this.cliente.apellido1;
    }
    if(apellido2 == undefined){
      apellido2 = this.cliente.apellido2;
    }
    if(fechaNacimiento == undefined){
      fechaNacimiento = this.cliente.fechaNacimiento;
    }
    if(vacunas == undefined){
      vacunas = this.cliente.vacunacion;
    }

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
    
    this.dataService.updateUsuario({
      id: this.cliente.id,
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


    let alert = await this.alertCtrl.create({
      header: 'Modificación realizada',
      message: 'La modificación se ha registrado con éxito.',
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    })
    await alert.present();


    this.router.navigateByUrl('/clientes-menu-admin', { replaceUrl: true});
  }

  regresar(){
    this.router.navigateByUrl('/clientes-menu-admin', { replaceUrl: true});
  }

}
