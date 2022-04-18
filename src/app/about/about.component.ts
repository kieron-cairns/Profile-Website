import { Component, OnInit, ElementRef, HostListener ,AfterViewInit, Input } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { ViewChild } from '@angular/core';
import { NavigateService } from '../navigate.service';
import { Container } from 'tsparticles';
import { Main } from 'tsparticles';
import { ISourceOptions } from 'tsparticles';
import { interval, Observable } from 'rxjs';
import { ScrolledToDirective } from '../services/scrolled-to-directive';
import { Scroll } from '@angular/router';
import { MyGlobals } from '../MyGlobals';
declare var anime: any;              // declare like this
declare var textWrapper : any

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  viewProviders: [ScrolledToDirective]
})

export class AboutComponent implements AfterViewInit {
  // @ViewChild('target') target : ElementRef;
  private timer : any;
  testType: string = "Test Typing This String Here Fam";
  start: boolean = false;
  checkMarkImgage:any = "../assets/images/check-mark.png";

  imgLogos = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/.NET_Core_Logo.svg/2048px-.NET_Core_Logo.svg.png",
 "https://static.cdnlogo.com/logos/c/27/c.svg",
 "data:image/png;base64,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",
 "https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg",
 "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
 "https://cdn.freebiesupply.com/logos/thumbs/2x/npm-logo.png",
"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/2048px-Python-logo-notext.svg.png",
"https://www.docker.com/sites/default/files/d8/2019-07/vertical-logo-monochromatic.png"
  ]

  languagesAndTools = [
    ".Net Core",
    "C#",
    "SQL",
    "Angular.js",
    "JavaScript",
    "Npm",
    "Python",
    "Docker"
  ]



  cSharpImage:any = "../assets/images/c-sharp-logo.png";
  sqlImage:any = "../assets/images/sql-logo.png";
  angularImage:any = "../assets/images/angular-logo.png";


  constructor(private navService: NavigateService, private globals: MyGlobals) {}

  isMobile = false
  isPc = false


  isEMainHeader()
  {
    return this.globals.isEMainH;
  }

  isE1Header()
  {
    return this.globals.isE1H;
  }
  isE1Para()
  {
    return this.globals.isE1P;
  }

  isE2Header()
  {
    return this.globals.isE2H;
  }
  isE2Para()
  {
    return this.globals.isE2P;
  }

  isE3Header()
  {
    return this.globals.isE3H;
  }
  isE3Para()
  {
    return this.globals.isE3P;
  }
  isE4Header()
  {
    return this.globals.isE4H;
  }
  isE4Para()
  {
    return this.globals.isE4P;
  }
  test()
  {
    console.log("Header Received FAM")
  }

  startOfExperience1 = false
  endOfExperience1 = false

  startOfMobExperience1 = false
  endOfMobExperience1 = false

  startOfExperience2 = false
  endOfExperience2 = false

  startOfMobExperience2 = false
  endOfMobExperience2 = false

  startOfExperience3 = false
  endOfExperience3 = false

  startOfMobExperience3 = false
  endOfMobExperience3 = false

  startOfExperience4 = false
  endOfExperience4 = false

  startOfExperience4Mob = false
  endOfExperience4Mob = false
@HostListener('window:scroll') onScroll(e: Event): void {

  var pageYdistance = window.pageYOffset
  // console.log(pageYdistance)
  // console.log(pageYdistance)
  console.log(this.globals.isE1H)

  //Experience 1 PC

  if(pageYdistance >= 400)
  {
    this.startOfExperience1 = true;
  }
  if(pageYdistance >= 840)
  {
    this.endOfExperience1 = true;
  }

  //Experience1 Mobile

  if(pageYdistance >= 880)
  {
    this.startOfMobExperience1 = true;
  }
  if(pageYdistance >= 1699)
  {
    this.endOfMobExperience1 = true;
  }

    //Experience 2 PC

  if(pageYdistance >= 860)
  {
    this.startOfExperience2 = true;
  }
  if(pageYdistance >= 1450)
  {
    this.endOfExperience2 = true;
  }

  //Experience 2 Mobile

  if(pageYdistance >= 2329)
  {
    this.startOfMobExperience2 = true;
  }
  if(pageYdistance >= 3042)
  {
    this.endOfMobExperience2 = true;
  }

  //Experience 3 PC

  if(pageYdistance >= 1750)
  {
    this.startOfExperience3 = true;
  }
  if(pageYdistance >= 1800)
  {
    this.endOfExperience3 = true;
  }

   //Experience 3 MOb

   if(pageYdistance >= 3280)
   {
     this.startOfMobExperience3 = true;
   }
   if(pageYdistance >= 3918)
   {
     this.endOfMobExperience3 = true;
   }

   //Experience 4 PC

  if(pageYdistance >= 2070)
  {
    this.startOfExperience4 = true;
  }
  if(pageYdistance >= 2170)
  {
    this.endOfExperience4 = true;
  }
   //Experience 4 MOB

   if(pageYdistance >= 4200)
   {
     this.startOfExperience4Mob = true;
   }
   if(pageYdistance >= 4964)
   {
     this.endOfExperience4Mob = true;
   }

  console.log("isMobile:" + this.isMobile)
  console.log("isPc:" + this.isPc)


}

@HostListener('window:resize', ['$event'])
onResize() {
  var innerWidth = window.innerWidth;
  if (innerWidth <= 500) { // 768px portrait
    this.isMobile = true;
    this.isPc = false;
  }
  if (innerWidth >= 500) { // 768px portrait
    this.isMobile = false
    this.isPc = true
  }
}

  ngOnInit() {
    this.onResize()
    setTimeout(() => this.start = true, 250)

  }


  ngAfterViewInit(): void {
    // Animation code goes here
     // Wrap every letter in a span
  textWrapper = document.querySelector('.an-1');
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.an-1 .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el : any, i : any) => 70*i
  }).add({
    targets: '.an-1',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });


  }
}


