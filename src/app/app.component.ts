import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('sheets') sheets!: ElementRef;
  title = 'cv';

  year = new Date().getFullYear();

  topic: string = 'About Me';

  setTopic = (tab: string) => {
    this.topic = tab;
    if(tab === 'About Me') this.sheets.nativeElement.style.borderRadius = '0 16px 16px 16px'
    else this.sheets.nativeElement.style.borderRadius = '';
  };

  ngAfterViewInit() {
    this.sheets.nativeElement.style.borderRadius = '0 16px 16px 16px';
  }
}
