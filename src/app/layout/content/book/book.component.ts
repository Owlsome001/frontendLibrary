import { Book } from './../../../models/models';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  book!:Book;
  constructor(private activetedRouter:ActivatedRoute) { }

  ngOnInit() {
  }

}
