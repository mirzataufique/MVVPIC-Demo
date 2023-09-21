import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
   whatsAppLink = "whatsapp://send?text=" //This is WhatsApp sharing example using link"
   msg ="Wecome to Maharashi Valmiki Vidya Peeth Inter College."
  openLink(linkType:any){
    window.open(this.whatsAppLink+this.msg, "_blank");
  }

}
