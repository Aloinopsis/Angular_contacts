import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactAddComponent } from './contact-add/contact-add.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';

const CONTACTS_ROUTES: Routes = [
	{ path: 'contact/:id', component: ContactDetailsComponent },
	{ path: 'contact-add', component: ContactAddComponent }
];

@NgModule({
	imports: [ RouterModule.forChild(CONTACTS_ROUTES) ],
	exports: [ RouterModule ]
})
export class ContactsRoutingModule {}
