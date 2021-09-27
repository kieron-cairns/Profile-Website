import { Component, OnInit, HostListener, Output } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ISourceOptions } from 'tsparticles';
import { Container } from 'tsparticles';
import { Main } from 'tsparticles';
import { EventEmitter} from '@angular/core';
import { AppComponent } from '../app.component';
import { AboutComponent } from '../about/about.component';

@Component({
  selector: 'app-nav',
  providers:[AboutComponent, AppComponent],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],

})
export class NavComponent implements OnInit {



  @Output() Navigate = new EventEmitter();

  isOpened: boolean = true;
  desktopViewWidth: number = 950;
  netImage:any = "../assets/images/me.jpg";

  myStyle: object = {};
  width: number = 100;
	height: number = 100;

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
      // image: {
      //   src: "img/github.svg",
      //   width: 100,
      //   height: 100
      // },
      fpsLimit: 20,
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
                  distance: 800,
                  duration: 2,
                  opacity: 0.8,
                  size: 80
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
              value: "#A9A9A9"
          },
          links: {
              color: "#A9A9A9",
              distance: 175,
              enable: true,
              opacity: 0.5,
              width: 1
          },
          collisions: {
              enable: false
          },
          move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 0.5,
              straight: false
          },
          number: {
              density: {
                  enable: true,
                  value_area: 1675
              },
              value: 145
          },
          opacity: {
              value: 0.4
          },
          shape: {
              type: "circle"
          },
          size: {
              random: true,
              value: 3
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

  constructor(private breakpointObserver: BreakpointObserver, private comp: AppComponent) {

  }

  public callMe(element : HTMLElement): void {
    this.comp.scrollToElement(element)
  }





  ngOnInit() {
    this.onResize(window.innerWidth);




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

  @HostListener('window:resize', ['$event.target.innerWidth'])
  onResize(width: number) {
    this.isOpened = width >= this.desktopViewWidth;
  }
}
