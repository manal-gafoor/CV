import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent {
  @Output() currentTopic: EventEmitter<string> = new EventEmitter<string>();
  tabs = [
    {
      title: "About Me", 
      img: 'assets/images/headings/about.svg'
    }, 
    {
      title: "Skills & Tools", 
      img: 'assets/images/headings/tools.svg'
    }, 
    {
      title: "Professional Experience", 
      img: 'assets/images/headings/experience.svg'
    }, 
    {
      title: "Education & Achievements", 
      img: 'assets/images/headings/education.svg'
    }, 
    {
      title: "Deets & Contact", 
      img: 'assets/images/headings/contact.svg'
    }
  ];

  selectedTab = this.tabs[0];

  selectTab = (tab: {title: string; img: string}) => {
    this.selectedTab = tab;
    this.currentTopic.emit(tab.title);
  }
}
