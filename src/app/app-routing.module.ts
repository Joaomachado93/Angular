import { NgModule } from '@angular/core';
import {RouterModule, Routes } from "@angular/router";

import { AboutComponent } from './about/about.component';
import { ListComponent } from './list/list.component';
import { HomeComponent } from './home/home.component';
import { EmitterComponent } from './emitter/emitter.component';
const routes: Routes = [
    {path:'', component: HomeComponent},
    {path:'about', component: AboutComponent},
    {path:'list', component: ListComponent},
    {path:'emitter', component: EmitterComponent},
    { path: 'customers', loadChildren: () => import('./views/lives/lives.module').then(m => m.LivesModule) },
    { path: 'users', loadChildren: () => import('./views/users/users.module').then(m => m.UsersModule) },
    {
      path: '',
      redirectTo: '/lives',
      pathMatch: 'full'
    }
]
@NgModule( { 
    declarations:[],
    imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule]
} )
export class AppRoutingModule{} 