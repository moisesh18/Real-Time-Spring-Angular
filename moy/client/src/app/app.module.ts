import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { CreateMessageComponent } from './create-message/create-message.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { SearchCustomersComponent } from './search-customers/search-customers.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ListMessagesComponent } from './list-messages/list-messages.component';
import { YamiCodeSocketComponent } from './components/yami-code-socket/yami-code-socket.component';
import { SocketComponent } from './components/src/appcomponents/socket/socket.component';

@NgModule({
    declarations: [
        AppComponent,
        CreateCustomerComponent,
        CustomerDetailsComponent,
        CustomersListComponent,
        SearchCustomersComponent,
        CreateMessageComponent,
        ListMessagesComponent,
        YamiCodeSocketComponent,
        SocketComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
