import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subject, debounceTime, Subscription } from 'rxjs';

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styleUrls: ['./country-input.component.scss'],
})
export class CountryInputComponent implements OnInit, OnDestroy {
  term: string = '';
  @Input() placeholder: string = 'Search...';
  @Output() onEnter: EventEmitter<string> = new EventEmitter<string>();
  @Output() onDebaunce: EventEmitter<string> = new EventEmitter<string>();
  private debouncer: Subject<string> = new Subject();
  private subscription: Subscription = new Subscription();

  constructor() {}

  ngOnInit(): void {
    this.subscription = this.debouncer
      .pipe(debounceTime(400))
      .subscribe((value) => {
        this.onDebaunce.emit(value);
      });
  }

  search(): void {
    this.term = this.term.trim();
    this.onEnter.emit(this.term);
  }

  keyPress(): void {
    this.debouncer.next(this.term);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
