import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageServiceService {
    IMAGES = [
      {id:1 , "category":"boats" , "caption":"View fro  boat" , "url":"assets/images/__opt__aboutcom__coeus__resources__content_migration__mnn__images__2014__12__snowflake-84c87424d5734b03ab1ca695c5a423c6.jpg" },
      {id:2 , "category":"boats" , "caption":"View fro  boat" , "url":"assets/images/download (1).jpg" },
      {id:3 , "category":"boats" , "caption":"View fro  boat" , "url":"assets/images/download (2).jpg" },
      {id:4 , "category":"boats" , "caption":"View fro  boat" , "url":"assets/images/download (3).jpg" },
      {id:5 , "category":"boats" , "caption":"View fro  boat" , "url":"assets/images/download.jpg" },
      {id:6 , "category":"boats" , "caption":"View fro  boat" , "url":"assets/images/pexels-photo-839462.jpeg" },
   ]
   visisble = [];
   get(){
     return this.visisble = this.IMAGES.slice(0);
   }
   getImage(id){
     return this.IMAGES.slice(0).find(img=>img.id == id)
     
   }

  constructor() { }
}
