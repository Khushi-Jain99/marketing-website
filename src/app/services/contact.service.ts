import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { ContactRequest } from '../models/contact.model';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  submitInquiry(payload: ContactRequest): Observable<{ success: boolean; message: string }> {
    const response = {
      success: true,
      message: `Thanks ${payload.name}, we will contact you on ${payload.phone} shortly.`,
    };

    return of(response).pipe(delay(900));
  }
}
