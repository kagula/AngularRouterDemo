import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { WorkspaceComponent } from './components/workspace/workspace.component';
import { Content1Component } from './components/content1/content1.component';
import { Content2Component } from './components/content2/content2.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';

const appRoutes: Routes = [
  { path: '', component: WelcomeComponent },/* This specified the new default page */
  { path: 'workspace', component: WorkspaceComponent,
    children: [
      {
        path: 'content1',
        component: Content1Component
      },
      {
        path: 'content2/:Id', /** Exampe of route with a parameter */
        component: Content2Component
      },
      {
        path: '', /* We need default page */
        redirectTo: 'content1',
        pathMatch: "full"
      }
    ]
  },
];


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    WorkspaceComponent,
    Content1Component,    
    Content2Component,
    HeaderComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
