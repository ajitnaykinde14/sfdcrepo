import { LightningElement, wire } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import CASE_OBJECT from '@salesforce/schema/Case';
import CASE_SUBJECT from '@salesforce/schema/Case.Subject';
import CASE_PRIORITY from '@salesforce/schema/Case.Priority';
import CASE_DESCRIPTION from '@salesforce/schema/Case.Description';
import RECID from '@salesforce/schema/Case.recordTypeId';
export default class CustomCaseCreator extends LightningElement {

    subject = ''
    priority = ''
    description = ''
    recordTypeId
    recordTypeName

    @wire(getObjectInfo,{objectApiName:CASE_OBJECT})
    caseRecord({data,error}){
        if(data){
            let recordTypeDetails = data.recordTypeInfos
            Object.keys(recordTypeDetails).forEach((key) => {
                const recordTypeInfo = recordTypeDetails[key]
                if(recordTypeInfo.name == 'Case 1'){
                    this.recordTypeId = recordTypeInfo.recordTypeId
                }
            })
        }
    }

    populateSubject(event) {
        this.subject = event.target.value
    }
    populatePriority(event) {
        this.priority = event.target.value
    }
    populateDescription(event) {
        this.description = event.target.value
    }

    async createCase() {

        const fields = {}

        fields[CASE_SUBJECT.fieldApiName] = this.subject
        fields[CASE_PRIORITY.fieldApiName] = this.priority
        fields[CASE_DESCRIPTION.fieldApiName] = this.description
        fields[CASE_RECID.fieldApiName] = this.recordTypeId


        let recordInput = {apiName:CASE_OBJECT.objectApiName,fields}
        const caseRecord = await createRecord(recordInput)
        .then((record=>{
            alert('Your case has been successfully subbmitted: '+record.id)
        })).catch(error=>{
            alert('Sorry, Something went wrong: '+error.body.message)
        })
    }

    get options() {
        return [
            { label: 'High', value: 'high' },
            { label: 'Medium', value: 'medium' },
            { label: 'Low', value: 'low' }
        ];
    }
}