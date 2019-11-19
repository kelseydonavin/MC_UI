import { Test } from './models/test' // communicating with test.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const endpoint = 'https://localhost:44356/api/'; // backend api address
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) {}

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  // This is the test function. Trying to just talk to the API.
  getTest(): Observable<any> {
    var result = this.http.get<Test[]>(`${endpoint}/values`);   // appending /values to the endpoint url
                                                                // from the ValuesController.cs file from the AIMS_API folder.
                                                                // This will set a get request to the API and store in the Test array. (Test was created in test.ts file)
    console.log(result);    // This will show the results from the get request in the console log on google chrome for the running web UI.
    return result;

    /*return this.http.get(endpoint + 'values').pipe( // append values to the url
      map(this.extractData));
    console.log(this.extractData); // Will display values into console.
    */
  }

  getProduct(id): Observable<any> {
    return this.http.get(endpoint + 'products/' + id).pipe(
      map(this.extractData));
  }

  addProduct (product): Observable<any> {
    console.log(product);
    return this.http.post<any>(endpoint + 'products', JSON.stringify(product), httpOptions).pipe(
      tap((product) => console.log(`added product w/ id=${product.id}`)),
      catchError(this.handleError<any>('addProduct'))
    );
  }

  updateProduct (id, product): Observable<any> {
    return this.http.put(endpoint + 'products/' + id, JSON.stringify(product), httpOptions).pipe(
      tap(_ => console.log(`updated product id=${id}`)),
      catchError(this.handleError<any>('updateProduct'))
    );
  }

  deleteProduct (id): Observable<any> {
    return this.http.delete<any>(endpoint + 'products/' + id, httpOptions).pipe(
      tap(_ => console.log(`deleted product id=${id}`)),
      catchError(this.handleError<any>('deleteProduct'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}

// hhtp
// get - read
// post - create something on the backend (create)
// put = update data
// patch = update data
// delete