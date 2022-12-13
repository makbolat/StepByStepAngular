import { Component, Injector } from '@angular/core';
import { Customer } from './CustomerApp.model';
import { BaseLogger } from '../Utility/CustomerApp.Logger';
import { HttpClient } from '@angular/common/http';

@Component({
  templateUrl: './CustomerApp.CustomerView.html',
})
export class CustomerComponent {
  title = 'CustomerApplication';
  customerModel: Customer = new Customer();
  customerModels: Array<Customer> = new Array<Customer>();
  Logobj: BaseLogger;
  Disable: boolean = false;

  BACKEND_URL =
    'https://angularmw2cc7-ukl4--3000.local-credentialless.webcontainer.io';

  constructor(_injector: Injector, public httpClient: HttpClient) {
    this.Logobj = _injector.get('1');
    this.Logobj.Log();
  }

  PostToServer() {
    // create a light weight DTO Data Transfer Object
    this.Disable = true;
    var custDto: any = {
      customerCode: this.customerModel.customerCode,
      customerName: this.customerModel.customerName,
      customerAmount: this.customerModel.customerAmount,
    };
    this.httpClient.post(`${this.BACKEND_URL}/Customers`, custDto).subscribe(
      (res) => this.Success(res),
      (res) => this.Error(res)
    );
  }

  GetFromServer() {
    this.httpClient.get(`${this.BACKEND_URL}/Customers`).subscribe(
      (res) => this.SuccessGet(res),
      (res) => this.Error(res)
    );
  }

  //PostToServer() {
  //https://jsonserverqtrsdk-ckat--3000.local-credentialless.webcontainer.io/Customers
  //}

  Error(res: any) {
    console.debug(res.json());
  }

  Success(res: any) {
    this.GetFromServer();
  }

  SuccessGet(res: any) {
    this.customerModels = res;
    this.Disable = false;
    this.customerModel = new Customer();
  }

  SelectCustomer(_selected: any) {
    debugger;
    this.customerModel = _selected;
  }
  add() {
    this.customerModels.push(this.customerModel);
    this.customerModel = new Customer(); // clear UI
  }

  hasError(typeOfValidator: string, controlName: string): boolean {
    return this.customerModel.formCustomerGroup.controls[controlName].hasError(
      typeOfValidator
    );
  }
}
