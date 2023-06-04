import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GitHubFind';

  userName : string = "";
  response : any;

  constructor(private http: HttpClient){

  }

  Search(){
    this.http.get('https://api.github.com/users/' + this.userName)
    .subscribe((response) => {
      this.response = response;
      console.log(this.response);
    });
  }

  getObjectKeys(obj: any): string[] {
    return Object.keys(obj);
  }
}