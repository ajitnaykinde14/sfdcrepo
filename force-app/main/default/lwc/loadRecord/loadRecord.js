import { LightningElement, api } from 'lwc';

export default class LoadRecord extends LightningElement {
@api recordId
objectApiName='Case'
fields=['CaseNumber','Priority','Status']

}