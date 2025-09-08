import { LightningElement, api } from 'lwc';

export default class ContainerComponent extends LightningElement {

@api productsFound = false
@api productList
parentCallChild = false;

get hasProduct(){
    return this.productsFound === "true" ? true : false
}

@api parentCalledChild(){
    this.parentCallChild = true
}
 


}