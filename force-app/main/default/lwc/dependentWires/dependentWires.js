import { LightningElement, api, wire } from 'lwc';
import getTask from '@salesforce/apex/DependentWireController.getTaskByAccountName';
import { getRecord } from 'lightning/uiRecordApi';
import ACCOUNT_NAME from '@salesforce/schema/Account.Name';

export default class DependentWires extends LightningElement {

    @api recordId
    accountName
    fields = [ACCOUNT_NAME]
    taskList
    // taskFound = false


    @wire(getRecord, { recordId: '$recordId', fields: '$fields' })
    wiredAccounts({data, error}) {
        if (data) {
            this.accountName = data.fields.Name.value
        }
        else if (error) {
            console.log('Error: ' + error)
        }
    }

    @wire(getTask,{accountName:'$accountName'})
    wiredTasks({data,error}){
        if(data){
            // console.log('Tasks data: '+JSON.stringify(data))
            this.taskList = data
            this.taskFound = true
        }
        else if(error){
            console.log('Error occurred: '+error.body.message)
        }
    }

}