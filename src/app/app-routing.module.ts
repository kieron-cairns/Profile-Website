import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';


const routes: Routes = [
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'app-nav', component: NavComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
