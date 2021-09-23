import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'demo';
  tableData: any;
  readonly url = 'http://localhost:5000/tableData';

  constructor(private http: HttpClient) { }

  getTable() {
    this.getDataFromAPI().subscribe(res=>this.tableData=res);
  }

  getDataFromAPI(): Observable<any> {
    return this.http.get<any>(this.url);
  }
}
