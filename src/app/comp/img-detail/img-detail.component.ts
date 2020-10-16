import { Component, OnInit } from '@angular/core';
import { ImageServiceService } from 'src/app/image-service.service';


@Component({
  selector: 'app-img-detail',
  templateUrl: './img-detail.component.html',
  styleUrls: ['./img-detail.component.css']
})
export class ImgDetailComponent implements OnInit {

  constructor(private imgSer:ImageServiceService ) {
    
   }

  ngOnInit(): void {
  }

}
