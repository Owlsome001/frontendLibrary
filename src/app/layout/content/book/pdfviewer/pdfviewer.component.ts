import { BookInfo } from 'src/app/models/BookInfo';
import { Component, OnInit,Pipe, PipeTransform} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from 'src/app/services/http.service';
import { DomSanitizer } from "@angular/platform-browser";
import {  } from '@angular/core';

@Component({
  selector: 'app-pdfviewer',
  templateUrl: './pdfviewer.component.html',
  styleUrls: ['./pdfviewer.component.css']
})
export class PdfviewerComponent implements OnInit,PipeTransform  {
  book!:BookInfo
  pdfFilePath!: string;

  constructor(private activatedRouter:ActivatedRoute, private http: BooksService) { }
  transform(value: any, ...args: any[]) {
    throw new Error('Method not implemented.');
  }
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
