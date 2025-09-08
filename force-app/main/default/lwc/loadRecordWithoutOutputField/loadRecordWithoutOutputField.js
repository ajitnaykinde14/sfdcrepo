import { LightningElement, api, wire } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import CASENUMBER from '@salesforce/schema/Case.CaseNumber';
import CASEORIGIN from '@salesforce/schema/Case.Origin';
import CASETYPE from '@salesforce/schema/Case.Type';
import ACCOUNT_NAME from '@salesforce/schema/Account.Name';
import ACCOUNT_PHONE from '@salesforce/schema/Account.Phone'
import FIRSTNAME from '@salesforce/schema/Contact.FirstName';
import LASTNAME from '@salesforce/schema/Contact.LastName';


export default class LoadRecordWithoutOutputField extends LightningElement {

    @api recordId
    casefields = [CASENUMBER, CASEORIGIN, CASETYPE]
    accountfields = [ACCOUNT_NAME, ACCOUNT_PHONE]
    contactfields = [FIRSTNAME, LASTNAME]
    showContact = false;
// For Case
    @wire(getRecord, { recordId: '$recordId', fields: '$casefields' })
    caseVar({error,data}){
        if(data){
            this.data = data
            this.showContact = true
        }
        else if(error){
            this.data = undefined;
            this.showContact = false
        }
    }
    get casenumber() {
        return getFieldValue(this.caseVar.data, CASENUMBER)
    }
    get caseorigin() {
        return getFieldValue(this.caseVar.data, CASEORIGIN)
    }
    get casetype() {
        return getFieldValue(this.caseVar.data, CASETYPE)
    }
// For Account
    @wire(getRecord,{recordId:'$recordId', fields:'$accountfields'})
    accountVar
    get accountname(){
        return getFieldValue(this.accountVar.data,ACCOUNT_NAME)
    }
    get accountphone(){
        return getFieldValue(this.accountVar.data,ACCOUNT_PHONE)
    }
// For Contact
    @wire(getRecord,{recordId:'$recordId', fields:'$contactfields'})
    contactVar
    get contactfirstname(){
        return getFieldValue(this.contactVar.data,FIRSTNAME)
    }
    get contactlastname(){
        return getFieldValue(this.contactVar.data,LASTNAME)
    }
    handleContactData(recordId){
        return recordId && recordId.startsWith('003')
    }

}