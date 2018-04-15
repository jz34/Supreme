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
    const url = this.baseUrl + '/api/item/?name=' + name;
    return this.http.get(url).map((response: Response) => {
      return response.json();
    });
  }

  findItemByCategory(category) {
    const url = this.baseUrl + '/api/item/' + category;
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
    const url = this.baseUrl + '/api/item/all';
    return this.http.get(url).map((response: Response) => {
      return response.json();
    });
  }

  createItem(name: String, price: String, color: String, size: String, category: String) {
    const url = this.baseUrl + '/api/item';
    const body = {
      name: name,
      price: price,
      color: color,
      size: size,
      category: category
    };

    return this.http.post(url, body).map((response: Response) => {
      return response.json();
    });
  }
}
