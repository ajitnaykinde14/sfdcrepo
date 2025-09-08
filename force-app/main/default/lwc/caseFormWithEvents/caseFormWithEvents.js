import { LightningElement } from 'lwc';

export default class CaseFormWithEvents extends LightningElement {
    objectApiName = "Case"

    handleSubmit(event) {
        // prevent the default behaviour
        event.preventDefault()
        // do your other things here and then submit the form
        console.log('Form is submitted for creation: ' + JSON.stringify(event.detail))
    }
    handleSuccess(event) {
        alert('Form is successfully created: ' + JSON.stringify(event.detail))
        // navigate to other page
    }
    handleError(event) {
        console.log('error logged.')
        alert('Error occured while submitting the form: '+JSON.stringify(event.detail))
    }
    handleLoad() {

    }
}