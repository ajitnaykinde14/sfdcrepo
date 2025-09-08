import { LightningElement, api } from 'lwc';

const fields = ["CaseNumber", "Origin", "Status"];
export default class EditRecordUsingRecordForm extends LightningElement {
    @api recordId
    fields = fields;
}