import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { timer } from 'rxjs';
import { ProductoService } from 'src/app/services/producto.service';
import { ModalController } from '@ionic/angular';
import { PopoverController } from '@ionic/angular';
@Component({
  selector: 'app-cards-productos',
  templateUrl: './cards-productos.component.html',
  styleUrls: ['./cards-productos.component.scss'],
})
export class CardsProductosComponent implements OnInit {

  textoBuscar = '';


  @Input() info: any;
  option = {
    initialSlide: 1,
    loop: true,
    slidesPerView: 1.5,
    centeredSlides: true,
    spaceBetween: 15,
  }
  quantity: number;
  price: number;
  total: number;
  productos: any;
  id: any;
  nombre: any;
  precio: any;
  LikeValue: number =0;

  constructor(private serviceProducto: ProductoService, 
    public popCtrl: PopoverController, private modalController: ModalController,
    ) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  
  handleLike(){
    this.LikeValue++;
   }


  






}
