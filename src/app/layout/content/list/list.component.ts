import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BookInfo } from 'src/app/models/BookInfo';
import { BooksService } from 'src/app/services/http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  books!: Array<BookInfo>
  constructor(private hppp : HttpClient) { }

  ngOnInit() {
  }

  search(value:String){

  }
  getBook(){
    this.hppp.get("http://localhost:8080/books").subscribe((data)=>{
      console.log(data)
    })
  }

}
