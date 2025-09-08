import { LightningElement } from 'lwc';

export default class CreateRecord extends LightningElement {
    fields=["Subject","Type","Reason","Origin","Priority","SLAViolation__c"]
}