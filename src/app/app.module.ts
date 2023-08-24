import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { FormComponent } from './components/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { StorageService } from './storage.service';
import { userService } from './user.service';

const appRoutes : Routes = [
  {path: "", component: MainComponent,  title: "main"},
  {path: "form", component: FormComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes, {useHash: true})
  ],
  providers: [StorageService, userService],
  bootstrap: [AppComponent]
})
export class AppModule { }
