import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  gridData: any[] = [];
  paginatedGridData: any[] = [];
  itemsPerPage: number = 3;
  currentPage: number = 1;
  totalPages: number = 1;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchGridData();
  }

  fetchGridData() {
    this.http.get<any>('http://localhost:3000/api_get').subscribe(response => {
      this.gridData = response.Data.PagedData;
      this.totalPages = Math.ceil(this.gridData.length / this.itemsPerPage);
      this.updatePaginatedData();
    });
  }
  getPagesArray(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }
  
  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updatePaginatedData();
    }
  }
  
  updatePaginatedData() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedGridData = this.gridData.slice(startIndex, endIndex);
  }

  changePage(change: number) {
    if (change === -1 && this.currentPage > 1) {
      this.currentPage -= 1;
    } else if (change === 1 && this.currentPage < this.totalPages) {
      this.currentPage += 1;
    }
    this.updatePaginatedData();
  }
}
