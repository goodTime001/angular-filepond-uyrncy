import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  @ViewChild('myPond') myPond: any;

  pondOptions = {
    class: 'my-filepond',
    multiple: true,
    labelIdle: 'Drop files here',
    acceptedFileTypes: 'image/jpeg, image/png'
  }

  pondFiles = [
    'index.html'
  ]

  pondHandleInit() {
    console.log('FilePond has initialised', this.myPond);
  }

  pondHandleAddFile(event: any) {
    console.log('A file was added', event);
    alert(event.name)
  }
}
