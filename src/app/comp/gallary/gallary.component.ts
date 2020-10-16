import { Component, OnInit,OnChanges, Input } from '@angular/core';
import { ImageServiceService } from 'src/app/image-service.service';

@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.component.html',
  styleUrls: ['./gallary.component.css']
})
export class GallaryComponent implements OnInit {
  @Input() filterBy?:"any";
visible:any[]=[];
  constructor(private imgSer:ImageServiceService) {
    this.visible = this.imgSer.get();
   }

ngOnInit(){}

  ngOnchanges(){
this.visible =  this.imgSer.get();
  }


}
