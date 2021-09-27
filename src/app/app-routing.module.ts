import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { TestComponent } from './test/test.component';


const routes: Routes = [
  {
    path: 'test', component: TestComponent
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
