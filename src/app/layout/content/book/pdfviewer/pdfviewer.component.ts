import { BookInfo } from 'src/app/models/BookInfo';
import { Component, OnInit,Pipe, PipeTransform} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from 'src/app/services/http.service';
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";
import {  } from '@angular/core';

@Component({
  selector: 'app-pdfviewer',
  templateUrl: './pdfviewer.component.html',
  styleUrls: ['./pdfviewer.component.css']
})
export class PdfviewerComponent implements OnInit {
  book!:BookInfo
  pdfFilePath:any

  constructor(private activatedRouter:ActivatedRoute, private http: BooksService,private sanitizer: DomSanitizer) {

   }

  ngOnInit() {
    this.getpdf()
  }
  getpdf(){
    this.http.getBookDetails(this.activatedRouter.snapshot.paramMap.get("isbn")+"").subscribe((data)=>{
      this.book=data;
      this.pdfFilePath=this.sanitizer.bypassSecurityTrustResourceUrl(this.book.pdfurl);
      console.log(this.pdfFilePath)
    })
  }
}
