import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class ContactsService {
	private basaApiUrl = 'http://contactsapi';
	constructor(private httpClient: HttpClient) {}

	getContacts(): Observable<any> {
		return this.httpClient.get(`${this.basaApiUrl}/contacts`);
	}

	getContact(id: number): Observable<any> {
		return this.httpClient.get(`${this.basaApiUrl}/contact/${id}`);
	}

	removeContact(id: number): Observable<any> {
		return this.httpClient.delete(`${this.basaApiUrl}/contact/${id}`);
	}

	addContact(data: {}): Observable<any> {
		return this.httpClient.post(`${this.basaApiUrl}/contact/add`, data);
	}
}
