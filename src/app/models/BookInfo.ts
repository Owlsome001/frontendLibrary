export class BookInfo {
    isbn:string;
	title:string;
	subtitle:string;
	authors:Array<string>;
	publishedDate:string;
	language:string;
	coverURL:string;
	bookStatus:string;
	isRefence:string;
	description:string;
	branch:string;
	category:string;
	bookcase:string;
	pdfavailable:boolean;
	publisher:string;
	pages:number;
	
	constructor(){
	this.isbn="";
	this.title="";
	this.subtitle=""
	this.authors= new Array;
	this.publishedDate=""
	this.language="";
	this.coverURL=""
	this.bookStatus=""
	this.isRefence="false"
	this.description="";
	this.branch=""
	this.category=""
	this.bookcase="";
	this.pdfavailable=false;
	this.publisher="";
	this.pages=0;
	}
}
