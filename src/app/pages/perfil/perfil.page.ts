import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  usuario: any;
  usuario2: string;
  constructor() { }
  public User: any;
  public Correo: any;
  public telefono: any;
  ngOnInit() {
    this.User = localStorage.getItem('nombre');
    this.Correo = localStorage.getItem('correo');
    this.telefono = localStorage.getItem('telefono')
  }
  

}
