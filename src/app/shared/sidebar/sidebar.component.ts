import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private elRef: ElementRef) { }

  ngOnInit(): void {
  }

  hideNav(): void {
    if (this.elRef.nativeElement.visibility === 'visible') return;
    this.elRef.nativeElement.classList.remove('active');
  }

  toggleNav(): void {
    if (this.elRef.nativeElement.visibility === 'visible') return;
    this.elRef.nativeElement.classList.toggle('active');
  }
}
