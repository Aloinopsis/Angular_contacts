import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { SharedModule } from '../shared/shared.module';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { ContactsRoutingModule } from './contacts-routing.module';
import { RouterLink, RouterModule } from '@angular/router';
import { ContactAddComponent } from './contact-add/contact-add.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
	declarations: [ ContactsListComponent, ContactDetailsComponent, ContactAddComponent ],
	imports: [ CommonModule, SharedModule, RouterModule, ReactiveFormsModule, ContactsRoutingModule ],
	exports: [ ContactsListComponent, ContactDetailsComponent ]
})
export class ContactsModule {}
