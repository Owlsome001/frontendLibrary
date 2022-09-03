import { BookInfo } from 'src/app/models/BookInfo';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from 'src/app/services/http.service';

@Component({
  selector: 'app-pdfviewer',
  templateUrl: './pdfviewer.component.html',
  styleUrls: ['./pdfviewer.component.css']
})
export class PdfviewerComponent implements OnInit {
  book!:BookInfo
  pdfFilePath!: string;

  constructor(private activatedRouter:ActivatedRoute, private http: BooksService) { }
  ngOnInit() {
    this.getpdf()
  }
  getpdf(){
    this.http.getBookDetails(this.activatedRouter.snapshot.paramMap.get("isbn")+"").subscribe((data)=>{
      this.book=data;
      this.pdfFilePath=this.book.pdfurl;
      console.log(this.pdfFilePath)
    })
  }
}
