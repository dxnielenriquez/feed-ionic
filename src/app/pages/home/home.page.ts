import { Component, OnInit, Input } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { ProductoService } from 'src/app/services/producto.service';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage implements OnInit {
  @Input() info: any;



  productos: any;
  valueSelected: string = "inicio";
  

  ngOnInit(): void {
    console.log(this.info)
    this.getProductos();
  
  }



  segmentChanged(event: CustomEvent) {
    this.valueSelected = event.detail.value;
    console.log(event.detail.value);
  }


  constructor(private serviceProducto: ProductoService,
    public popCtrl: PopoverController,
    private router: Router) { }


 

  

  getProductos() {
    this.serviceProducto.getAll().subscribe(
      resp => {
        this.productos = resp;
      }, error => {
        console.log("no se pudo conectar al feed")
      }
    )
  }
 




}
