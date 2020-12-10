import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products: Array<string> = [];
  productsDetails: Array<any> = [];

  components: Array<string> = [];
  componentsDetails: Array<any> = [];

  books: Array<string> = [];
  booksDetails: Array<any> = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    // we are using buildersoft as example, soon this will me replaced by user choise
    this.getProducts('buildersoft');
    this.getProductsDetails('buildersoft');
  }

  getProducts(tenantName: string): void {
      this.productService.getProducts(tenantName).subscribe(
        products => this.products = products,
        error => console.log(error)
      );
  }

  getProductsDetails(tenantName: string): void {
    this.productService.getProductsDetails(tenantName).subscribe(
      productsDetails => this.productsDetails = productsDetails,
      error => console.log(error)
    );
  }

  getComponents(tenantName: string, productName: string): void {
    this.productService.getComponents(tenantName, productName).subscribe(
      components => this.components = components,
      error => console.log(error)
    );
  }

  getComponentsDetails(tenantName: string, productName: string): void {
    this.productService.getComponentsDetails(tenantName, productName).subscribe(
      compDetails => this.componentsDetails = compDetails,
      error => console.log(error)
    );
  }

  getBooks(tenantName: string, productName: string, componentName: string) {
    this.productService.getBooks(tenantName, productName, componentName).subscribe(
      books => this.books = books,
      error => console.log(error)
    );
  }

  getBooksDetails(tenantName: string, productName: string, componentName: string) {
    this.productService.getBooksDetails(tenantName, productName, componentName).subscribe(
      booksDetails => this.booksDetails = booksDetails,
      error => console.log(error)
    );
  }
}
