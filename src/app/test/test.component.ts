import { Component, OnInit } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  @ViewChild('target') input : any;


  @Output() myEvent = new EventEmitter();


  public scrollToElement($element : any): void {
    // const $element = 'target';
    // $element = document.getElementById("#target")
    console.log($element);
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  public tester() {
    document.documentElement.scrollTop = 200;

  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    console.log(this.input.nativeElement.value);
  }

}
