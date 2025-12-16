import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ApiService } from '../pages/api.service';

@Component({
  selector: 'app-aviation-videos',
  templateUrl: './aviation-videos.component.html',
  styleUrls: ['./aviation-videos.component.scss']
})
export class AviationVideosComponent {
  [x: string]: any;
  constructor(private service:ApiService,  public sanitizer: DomSanitizer){}
  // videoData_photos:any;
  // videoData_kannada:any;
  // videoData_english:any;
  // videoData_articles:any;
  displayMediaName: any;

  videoData_photos_hide:boolean=true;
  videoData_kannada_hide:boolean=true;
  videoData_english_hide:boolean=true;
  videoData_articles_hide:boolean=true;

  
  ngOnInit(){
    this.step == 1;
    localStorage.setItem('step', JSON.stringify(this.step));
    this.service.getallmediaodata('name').subscribe(res => {
      this.videoData_photos = res;
    
      // Define a list of common image extensions
      const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.webp'];
    
      // Filter to keep only items where:
      // 1. file path does not end with an image extension
      // 2. media_id is not equal to 3
      this.videoData_photos = this.videoData_photos.filter((item: { filePath: string; media_id: number; }) => {
        // Check if the file path ends with any of the image extensions
        const isImage = imageExtensions.some(ext => item.filePath.toLowerCase().endsWith(ext));
        // Keep items where the file path is not an image and media_id is not 3
        return !isImage && item.media_id !== 3;
      });
    
      // Log the filtered result
      console.log("Filtered Data", this.videoData_photos);
    });


    // this.service.GetAllMediaDocument_by_id(2).subscribe(res=>{
    //   this.videoData_kannada =res
    //   console.log("Kumar",res)
    // })

    // this.service.GetAllMediaDocument_by_id(4).subscribe(res=>{
    //   this.videoData_english =res
    //   console.log("Kumar",res)
    // })

    // this.service.GetAllMediaDocument_by_id(5).subscribe(res=>{
    //   this.videoData_articles =res
    //   console.log("Kumar",res)
    // })
  }

  step:any
  change_dd(stepValue:any){
    this.step = stepValue;
    localStorage.setItem('step', JSON.stringify(this.step));

    if(stepValue == 1){
      this.videoData_photos_hide=true;
      this.videoData_kannada_hide=false;
      this.videoData_english_hide=false;
      this.videoData_articles_hide=false;
      console.log("change_dd_Photos")
    }else if(stepValue == 2){
      this.videoData_photos_hide=false;
      this.videoData_kannada_hide=true;
      this.videoData_english_hide=false;
      this.videoData_articles_hide=false;
      console.log("change_dd_kannada_videos")
    // }else if(stepValue == 3){
    //   this.videoData_photos_hide=false;
    //   this.videoData_kannada_hide=false;
    //   this.videoData_english_hide=true;
    //   this.videoData_articles_hide=false;
    //   console.log("change_dd_english_videos")
    // }else if(stepValue == 4){
    //   this.videoData_photos_hide=false;
    //   this.videoData_kannada_hide=false;
    //   this.videoData_english_hide=false;
    //   this.videoData_articles_hide=true;
    //   console.log("change_dd_articles")
    // }
    }
  }

  change_dd_Photos(){
   

  }
  change_dd_kannada_videos(){
   

  }
  change_dd_english_videos(){
   

  }
  change_dd_articles(){
    

  }
  isImage(filePath: string): boolean {
    return /\.(jpg|jpeg|png|gif)$/.test(filePath.toLowerCase());
  }
}


