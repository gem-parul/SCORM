import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-scorm-player',
  templateUrl: './scorm-player.component.html',
  styleUrls: ['./scorm-player.component.scss']
})
export class ScormPlayerComponent implements OnInit {
  @Input() courseUrl: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
