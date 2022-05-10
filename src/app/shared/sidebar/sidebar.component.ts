import { Component, ElementRef, OnInit } from '@angular/core';
import { debounceTime, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  private rxjsSimulator: Subject<number> = new Subject();
  private subscription: Subscription = new Subscription();

  constructor(private elRef: ElementRef) {
  }

  ngOnInit(): void {
    // Here you can set your debounce time
    this.subscription = this.rxjsSimulator.pipe(debounceTime(70)).subscribe(() => {
      this.triggerHideNav();
    })
  }

  triggerHideNav(): void {
    this.elRef.nativeElement.classList.remove('active');
  }

  hideNav(): void {
    if (this.elRef.nativeElement.visibility === 'visible') return;
    this.rxjsSimulator.next(1);
  }

  toggleNav(): void {
    if (this.elRef.nativeElement.visibility === 'visible') return;
    this.elRef.nativeElement.classList.toggle('active');
  }
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
