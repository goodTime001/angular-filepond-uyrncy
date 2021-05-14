import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
// import filepond module
import { FilePondModule, registerPlugin } from 'ngx-filepond';

// import and register filepond file type validation plugin
//import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
//registerPlugin(FilePondPluginFileValidateType);

@NgModule({
  imports:      [ BrowserModule, FormsModule, FilePondModule  ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
