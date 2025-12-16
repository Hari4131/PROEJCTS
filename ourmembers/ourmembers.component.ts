import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-ourmembers',
  templateUrl: './ourmembers.component.html',
  styleUrls: ['./ourmembers.component.scss']
})
export class OurmembersComponent {
[x: string]: any;


  @ViewChildren('fadeInSection') fadeInSections!: QueryList<ElementRef>;
  constructor(private el: ElementRef) { }
 
  
  ngOnInit(): void { }

  ngAfterViewInit(): void {
  //   const elements = this.el.nativeElement.querySelectorAll('.fade-in-top');

  //   const observer = new IntersectionObserver((entries, observer) => {
  //     entries.forEach(entry => {
  //       if (entry.isIntersecting) {
  //         entry.target.classList.add('animated');
  //         observer.unobserve(entry.target);
  //       }
  //     });
  //   }, { threshold: 0.1 });

  //   elements.forEach((element: HTMLElement) => {
  //     observer.observe(element);
  //   });
  // }


  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  });

  this.fadeInSections.forEach((section: ElementRef) => {
    observer.observe(section.nativeElement);
  });

}
}
