import { Component, OnInit, HostListener } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ISourceOptions } from 'tsparticles';
import { Container } from 'tsparticles';
import { Main } from 'tsparticles';
import { ViewChild } from '@angular/core';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  myStyle: object = {};
  width: number = 100;
	height: number = 100;

 public scrollToElement($element : any): void {
    console.log($element);
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

ngOnInit() {

  }
}
