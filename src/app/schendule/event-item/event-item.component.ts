import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.css']
})
export class EventItemComponent implements OnInit {

  @Input()
  public title: string;
  @Input()
  public description: string;
  @Input()
  public date: Date;
  @Input()
  public type: string;
  @Input()
  public local: string;

  constructor() { }

  ngOnInit() {
  }

}
