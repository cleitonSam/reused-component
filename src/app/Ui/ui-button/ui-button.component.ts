import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ui-button',
  templateUrl: './ui-button.component.html',
  styleUrls: ['./ui-button.component.scss']
})
export class UiButtonComponent implements OnInit {

  @Input () typeBtn : 'solid-primary' | 'outline-primary' | 'outline-secondary' = 'solid-primary';
  @Input () text : string = 'texto';

  constructor() { }

  ngOnInit(): void {
  }

}
