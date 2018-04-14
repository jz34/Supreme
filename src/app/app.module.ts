import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {routing} from './app.routing';
import {AppComponent} from './app.component';
import {LoginComponent} from './views/users/login/login.component';
import {RegisterComponent} from './views/users/register/register.component';
import {AdminItemEditComponent} from './views/admin/admin-item-edit/admin-item-edit.component';
import {AdminUserEditComponent} from './views/admin/admin-user-edit/admin-user-edit.component';
import {ItemEditComponent} from './views/item/item-edit/item-edit.component';
import {ItemDisplayComponent} from './views/item/item-display/item-display.component';
import {BuyerProfileComponent} from './views/users/profile/buyer-profile/buyer-profile.component';
import {SellerProfileComponent} from './views/users/profile/seller-profile/seller-profile.component';
import {CartComponent} from './views/checkout/cart/cart.component';
import {PaymentComponent} from './views/checkout/payment/payment.component';
import {SummaryComponent} from './views/checkout/summary/summary.component';
import {OrderHistoryComponent} from './views/users/profile/buyer-profile/order-history/order-history.component';
import {HomeComponent} from './views/home/home.component';
import {ChooserComponent} from './views/users/chooser/chooser.component';
import {ItemListComponent} from './views/item/item-list/item-list.component';
import {SaleHistoryComponent} from './views/users/profile/seller-profile/sale-history/sale-history.component';
import {AdminProfileComponent} from './views/admin/admin-profile/admin-profile.component';
import {LoggedinHomeComponent} from './views/home/loggedin-home/loggedin-home.component';
import {CreditcardComponent} from './views/users/creditcard/creditcard.component';
import {UserService} from './services/user.service.client';
import {SharedService} from './services/shared.service';
import {APP_BASE_HREF} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AdminItemEditComponent,
    AdminUserEditComponent,
    ItemEditComponent,
    ItemDisplayComponent,
    BuyerProfileComponent,
    SellerProfileComponent,
    CartComponent,
    PaymentComponent,
    SummaryComponent,
    OrderHistoryComponent,
    HomeComponent,
    ChooserComponent,
    ItemListComponent,
    SaleHistoryComponent,
    AdminProfileComponent,
    LoggedinHomeComponent,
    CreditcardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [SharedService, UserService, {provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
