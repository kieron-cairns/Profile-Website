import { Component, OnInit } from '@angular/core';
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

  // @ViewChild("target", { static: false }) target : string;

  // navigateTo(element: string) {
  //   this[element].nativeElement.scrollIntoView({ behavior: "smooth" });
  // }

 public scrollToElement($element : any): void {
    console.log($element);
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }




  id = "tsparticles";

  /* Starting from 1.19.0 you can use a remote url (AJAX request) to a JSON with the configuration */
  particlesUrl = "http://foo.bar/particles.json";

  /* or the classic JavaScript object */
  particlesOptions: ISourceOptions = {
      background: {
          color: {
              value: "#FFFFFF"
          }

      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100
      },
      fpsLimit: 60,
      interactivity: {
          detectsOn: "canvas",
          events: {
              onClick: {
                  enable: true,
                  mode: "push"
              },
              onHover: {
                  enable: true,
                  mode: "repulse"
              },
              resize: true
          },
          modes: {
              bubble: {
                  distance: 400,
                  duration: 2,
                  opacity: 0.8,
                  size: 40
              },
              push: {
                  quantity: 4
              },
              repulse: {
                  distance: 200,
                  duration: 0.4
              }
          }
      },
      particles: {
          color: {
              value: "#C0C0C0"
          },
          links: {
              color: "#C0C0C0",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1
          },
          collisions: {
              enable: true
          },
          move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 1,
              straight: false
          },
          number: {
              density: {
                  enable: true,
                  value_area: 800
              },
              value: 80
          },
          opacity: {
              value: 0.5
          },
          shape: {
              type: "circle"
          },
          size: {
              random: true,
              value: 2
          }
      },
      detectRetina: true
  };



  particlesLoaded(container: Container): void {
      console.log(container);
  }


  particlesInit(main: Main): void {
      console.log(main);

      // Starting from 1.19.0 you can add custom presets or shape here, using the current tsParticles instance (main)
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}
  ngOnInit() {
    this.myStyle = {
        'position': 'fixed',
        'width': '100%',
        'height': '100%',
        'z-index': -1,
        'top': 0,
        'left': 0,
        'right': 0,
        'bottom': 0,
    };
  }
}
