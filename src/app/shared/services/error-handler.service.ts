import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {


  handleError(error:Error){
    console.log(error)
  }
}
