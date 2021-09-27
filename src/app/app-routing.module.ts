import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './container/container.component';
import { HomeComponent } from './home/home.component';
import { TestComponent } from './test/test.component';


const routes: Routes = [
  {
    path: 'container', component: ContainerComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'test', component: TestComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
