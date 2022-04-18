import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NgParticlesModule } from 'ng-particles';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { TypingAnimationModule } from 'angular-typing-animation';
import { ScrolledToDirective } from './services/scrolled-to-directive';
import { MyGlobals } from './MyGlobals';
import { ScrolledToExp1Para } from './services/Experience/Header/Paragraph/scrolled-to-exp1-para';
import { scrolledToExp2Para } from './services/Experience/Header/Paragraph/scrolled-to-exp2-para';
import { ScrolledToE3Header } from './services/Experience/Header/scrolled-to-e3-header';
import { ScrolledToE2Header } from './services/Experience/Header/scrolled-to-e2-header';
import { scrolledToExp3Para } from './services/Experience/Header/Paragraph/scrolled-to-exp3-para';
import { ScrolledToE4Header } from './services/Experience/Header/scrolled-to-e4-header';
import { scrolledToExp4Para } from './services/Experience/Header/Paragraph/scrolled-to-exp4-para';
import { ScrolledToEMainHeader } from './services/Experience/Header/scrolled-to-e-main-header';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutComponent,
    BlogComponent,
    ScrolledToDirective,
    ScrolledToEMainHeader,
    ScrolledToE2Header,
    ScrolledToExp1Para,
    scrolledToExp2Para,
    ScrolledToE3Header,
    scrolledToExp3Para,
    ScrolledToE4Header,
    scrolledToExp4Para
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    NgParticlesModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    TypingAnimationModule
  ],
  providers: [AboutComponent, ScrolledToDirective, MyGlobals],
  bootstrap: [AppComponent]
})
export class AppModule { }
