import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-other-page',
  templateUrl: './other-page.component.html',
  styleUrls: ['./other-page.component.css']
})
export class OtherPageComponent implements OnInit {
  receivedID: any;
  additionalData: any[] = []; 
   

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.receivedID = params['ID'];
        console.log(this.receivedID);
      this.http.get(`http://localhost:3000/data?id=${this.receivedID}`).subscribe(
        (response: any) => {
          console.log('Fetched Data:', response.Data.PagedData); // Check the fetched data in console
          this.additionalData = response.Data.PagedData; // Assign the fetched data to additionalData
         console.log(this.additionalData);
        
        },
        error => {
          console.error('Error fetching data:', error);
        }
      );
    });
  }
  
}
