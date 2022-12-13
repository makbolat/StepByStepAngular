import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MasterPageComponent } from './CustomerApp.MasterPageComponent';
import { HomeComponent } from './CustomerApp.HomeComponent';
import { MainRoutes } from './../Routing/CustomerApp.MainRouting';

import {
  BaseLogger,
  ConsoleLogger,
  DBLogger,
  FileLogger,
} from '../Utility/CustomerApp.Logger';

// http call get this from the server
var providersColl: any = [];
providersColl.push({ provide: '1', useClass: DBLogger });
providersColl.push({ provide: '2', useClass: FileLogger });
providersColl.push({ provide: BaseLogger, useClass: ConsoleLogger });

@NgModule({
  declarations: [MasterPageComponent, HomeComponent],
  imports: [RouterModule.forRoot(MainRoutes), BrowserModule, FormsModule],
  providers: [providersColl],
  bootstrap: [MasterPageComponent],
})
export class MainModule {}
