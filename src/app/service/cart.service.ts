import { Injectable } from '@angular/core';
import {Book} from "../model/book";
import {BehaviorSubject, filter, map, Observable, of, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartSubject:BehaviorSubject<Book[]>= new BehaviorSubject<Book[]>([]);
  cart$:Observable<Book[]>=this.cartSubject.asObservable();
  books:Book[] =[];
  book?:Book;
  constructor() { }

  remove(id:number){
     this.cart$.pipe(
      map(bs=>bs.filter(b=>b.id!=id)as Book[])

    ).subscribe(
      data=>{this.books=data;
                           this.cartSubject.next(data)
      }
     );
  }

  public addToCart(book:Book){
   this.isExisted(book)
     .subscribe(data=> this.book=data);
   if(!this.book){
     this.books.push(book)
     this.cartSubject.next(this.books)
   }

  }
  isExisted(book:Book):Observable<Book|undefined>{
    return of(this.books).pipe(map(books=>books.find(b=>b.id===book.id)as Book))


  }

}
