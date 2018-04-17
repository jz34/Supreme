import {Injectable} from '@angular/core';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';
import {Http, Response} from '@angular/http';
import {Router} from '@angular/router';

@Injectable()
export class ItemService {
  constructor(private http: Http, private router: Router) {
  }

  baseUrl = environment.baseUrl;

  findItemById(itemId) {
    const url = this.baseUrl + '/api/item/' + itemId;
    return this.http.get(url).map((response: Response) => {
      return response.json();
    });
  }

  findItemByName(name) {
    const url = this.baseUrl + '/api/items/' + name;
    return this.http.get(url).map((response: Response) => {
      //  console.log(response);
      return response.json();
    });
  }

  findItemByCategory(category) {
    const url = this.baseUrl + '/api/category/' + category;
    return this.http.get(url).map((response: Response) => {
      return response.json();
    });
  }

  updateItem(itemId, item) {
    const url = this.baseUrl + '/api/item/' + itemId;
    return this.http.put(url, item).map((response: Response) => {
      return response.json();
    });
  }

  deleteItem(itemId) {
    const url = this.baseUrl + '/api/item/' + itemId;
    return this.http.delete(url).map((response: Response) => {
      return response.json();
    });
  }

  findAllItem() {
    const url = this.baseUrl + '/api/allitem';
    return this.http.get(url).map((response: Response) => {
      return response.json();
    });
  }

  createItem(sellerId: String, name: String, price: Number, color: String, size: String, category: String, imgurl: String) {
    const url = this.baseUrl + '/api/item';
    const body = {
      _seller: sellerId,
      name: name,
      price: price,
      color: color,
      size: size,
      category: category,
      url: imgurl
    };

    return this.http.post(url, body).map((response: Response) => {
      return response.json();
    });
  }

  findItemBySellerId(userId) {
    const url = this.baseUrl + '/api/salehistory/' + userId;
    return this.http.get(url).map((response: Response) => {
      return response.json();
    });
  }

  findItemByBuyerId(userId) {
    const url = this.baseUrl + '/api/orderhistory/' + userId;
    return this.http.get(url).map((response: Response) => {
      return response.json();
    });
  }

  findSellerListing(userId) {
    const url = this.baseUrl + '/api/sellerlisting/' + userId;
    return this.http.get(url).map((response: Response) => {
      return response.json();
    });
  }
}
