import { LightningElement,wire } from 'lwc';
import getLatestCases from '@salesforce/apex/caseListUsingWireHandler.getLatestCases'

export default class CaseListUsingWire extends LightningElement {
    CaseList
    errorMessage

    @wire(getLatestCases)
    wiredCases({data,error}){
        if(data){
            this.CaseList = data
            this.error = undefined
        }
        if(error){
            this.errorMessage = error.body.message
            this.data = undefined
        }
    }
}