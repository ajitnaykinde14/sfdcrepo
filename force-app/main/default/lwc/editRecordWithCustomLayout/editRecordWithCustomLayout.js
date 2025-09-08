import { LightningElement, api } from 'lwc';

export default class EditRecordWithCustomLayout extends LightningElement {
    @api recordId
    objectApiName = "Case"

    handlesuccess(event) {
        // as soon as success happens reset the form
        console.log('success called and invoked')
        const formelement = this.template.querySelector('lightning-record-edit-form')
        formelement.reset()
    }
}