import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactsService } from '../contacts.service';

@Component({
	selector: 'app-contact-add',
	templateUrl: './contact-add.component.html',
	styleUrls: [ './contact-add.component.scss' ]
})
export class ContactAddComponent implements OnInit {
	contactForm: FormGroup = new FormGroup({});
	firstNamePattern: string | RegExp = '^[A-z]{3,11}$';
	constructor(private formBuilder: FormBuilder, private contactsService: ContactsService, private router: Router) {}

	ngOnInit(): void {
		this.buildContactForm();
	}

	buildContactForm() {
		this.contactForm = new FormGroup({
			surname: new FormControl('', Validators.required),
			firstName: new FormControl('', [ Validators.required, Validators.pattern(this.firstNamePattern) ]),
			phoneNumber: new FormControl('', [ Validators.required, Validators.minLength(7), Validators.maxLength(11) ])
		});
	}

	addContact() {
		this.contactsService.addContact(this.contactForm.value).subscribe(() => {
			this.router.navigate([ '/contacts' ]);
		});
	}
}
