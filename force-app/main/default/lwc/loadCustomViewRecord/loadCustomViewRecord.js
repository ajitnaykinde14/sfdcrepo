import { LightningElement, api } from 'lwc';

export default class LoadCustomViewRecord extends LightningElement {
    @api recordId
    objectApiName='Case'
}