import { LightningElement } from 'lwc';
import createAccount from '@salesforce/apex/ToastController.createAccount';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';


export default class ToastDisplay extends LightningElement {

    accountName

    handleInputValues(event) {
        this.accountName = event.target.value
        console.log(this.accountName)
    }

    handleAccountCreation() {
        if(this.accountName){
            createAccount({ accountName: this.accountName })
            .then(() => {
                this.showToast('Success','Account successfully Created: ', 'sticky', 'success')
            })
            .catch(error => {
                console.log('Error found: '+error.body.message)
                this.showToast('Error','Something went wrong: '+error.body.message, 'pester', 'error')
            })
        }else if(!this.accountName){
            this.showToast('Error','Please enter account name', 'dismissible', 'warning')
        }
    }

    showToast(title, message, mode, variant) {
        const event = new ShowToastEvent({
            title: title,
            message: message,
            mode: mode,
            variant: variant,
            messageData: [
                {
                    url: '/' + this.accountName, // URL for the clickable link
                    label: 'here'
                }
            ]

        });
        this.dispatchEvent(event);
    }

}