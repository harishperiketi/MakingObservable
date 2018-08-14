import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css']
})
export class DynamicComponent implements OnInit {

  @Input() type: string = "success";

  constructor() { }

  ngOnInit() {
  }

}
