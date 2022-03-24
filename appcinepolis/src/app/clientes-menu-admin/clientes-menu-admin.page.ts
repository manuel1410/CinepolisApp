import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, AlertController } from '@ionic/angular';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-clientes-menu-admin',
  templateUrl: './clientes-menu-admin.page.html',
  styleUrls: ['./clientes-menu-admin.page.scss'],
})
export class ClientesMenuAdminPage implements OnInit {

  clientes: any;
  constructorFlag: boolean;

  constructor(private dataService: DataService, public navCtrl: NavController, public alertCtrl: AlertController, private router: Router) {
    this.constructorFlag = false;
    this.clientes = [];
    const usuariosRef = this.dataService.getUsuarios();
    usuariosRef.subscribe(res => {
      if(this.constructorFlag == false){
          for(let cliente of res){
            if(this.constructorFlag == false){
              if(cliente.deleted == false){
                this.clientes.push(cliente);
              }
            }
          }
          this.constructorFlag = true;
      }
    });
  }

  ngOnInit() {
  }

  agregarCliente(){
    this.router.navigateByUrl('/agregar-cliente', { replaceUrl: true});
  }

  modificar(index){
    this.dataService.setUsuarioLocal(this.clientes[index]);
    this.router.navigateByUrl('/modificar-cliente', { replaceUrl: true});
  }

  eliminarCliente(index){
    this.actualizarEliminacionCliente(index);
    this.clientes.splice(index,1);
  }

  actualizarEliminacionCliente(index){
    this.dataService.deleteCliente(this.clientes[index]);
  }

  regresar(){
    this.router.navigateByUrl('/mainmenu-admin', { replaceUrl: true});
  }


}
