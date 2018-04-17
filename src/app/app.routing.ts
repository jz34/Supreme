import {Routes, RouterModule} from '@angular/router';

import { LoginComponent } from './views/users/login/login.component';
import { RegisterComponent } from './views/users/register/register.component';
import { AdminItemEditComponent } from './views/admin/admin-item-edit/admin-item-edit.component';
import { AdminUserEditComponent } from './views/admin/admin-user-edit/admin-user-edit.component';
import { ItemEditComponent } from './views/item/item-edit/item-edit.component';
import { ItemDisplayComponent } from './views/item/item-display/item-display.component';
import { BuyerProfileComponent } from './views/users/profile/buyer-profile/buyer-profile.component';
import { SellerProfileComponent } from './views/users/profile/seller-profile/seller-profile.component';
import { CartComponent } from './views/checkout/cart/cart.component';
import { PaymentComponent } from './views/checkout/payment/payment.component';
import { SummaryComponent } from './views/checkout/summary/summary.component';
import { OrderHistoryComponent } from './views/users/profile/buyer-profile/order-history/order-history.component';
import { HomeComponent } from './views/home/home.component';
import { ChooserComponent } from './views/users/chooser/chooser.component';
import { ItemListComponent } from './views/item/item-list/item-list.component';
import { SaleHistoryComponent } from './views/users/profile/seller-profile/sale-history/sale-history.component';
import { AdminProfileComponent } from './views/admin/admin-profile/admin-profile.component';
import { LoggedinHomeComponent } from './views/home/loggedin-home/loggedin-home.component';
import { CreditcardComponent } from './views/users/creditcard/creditcard.component';
import {SellerListingComponent} from './views/users/profile/seller-profile/seller-listing/seller-listing.component';
import {AuthGuard} from './services/auth-guard.service';

const appRoutes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'loggedinhome/user', component: LoggedinHomeComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'user/admin', component: AdminProfileComponent, canActivate: [AuthGuard]},
  {path: 'user/buyer', component: BuyerProfileComponent, canActivate: [AuthGuard]},
  {path: 'user/seller', component: SellerProfileComponent, canActivate: [AuthGuard]},
  {path: 'user/admin/edititem', component: AdminItemEditComponent, canActivate: [AuthGuard]},
  {path: 'user/admin/edituser', component: AdminUserEditComponent, canActivate: [AuthGuard]},
  {path: 'user/seller/new', component: ItemEditComponent, canActivate: [AuthGuard]},
  {path: 'user/seller/listing', component: SellerListingComponent, canActivate: [AuthGuard]},
  {path: 'user/seller/item/:iid', component: ItemEditComponent, canActivate: [AuthGuard]},
  {path: 'user/item/:iid', component: ItemDisplayComponent, canActivate: [AuthGuard]},
  {path: 'user/buyer/:uid/cart', component: CartComponent, canActivate: [AuthGuard]},
  {path: 'user/buyer/:uid/payment', component: PaymentComponent, canActivate: [AuthGuard]},
  {path: 'user/buyer/:uid/summary', component: SummaryComponent, canActivate: [AuthGuard]},
  {path: 'user/buyer/:uid/history', component: OrderHistoryComponent, canActivate: [AuthGuard]},
  {path: 'user/seller/:uid/history', component: SaleHistoryComponent, canActivate: [AuthGuard]},
  {path: 'user/seller/:uid/creditcard', component: CreditcardComponent, canActivate: [AuthGuard]},
  {path: 'user/buyer/:uid/creditcard', component: CreditcardComponent, canActivate: [AuthGuard]},
  {path: 'user/searchresult', component: ItemListComponent, canActivate: [AuthGuard]},
  {path: 'user/guest/searchresult', component: ItemListComponent, canActivate: [AuthGuard]},
  {path: 'user/guest/item/:iid', component: ItemDisplayComponent, canActivate: [AuthGuard]},
];

export const routing = RouterModule.forRoot(appRoutes);
