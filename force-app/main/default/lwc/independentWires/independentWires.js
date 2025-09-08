import { LightningElement, wire } from 'lwc';
import fetchCases from '@salesforce/apex/independentWiresController.fetchCases';
import fetchTasks from '@salesforce/apex/independentWiresController.fetchTasks';

export default class IndependentWires extends LightningElement {

    caseList
    taskList
    foundCases = false
    foundTasks = false

    @wire(fetchCases)
    wiredCases({ data, error }) {
        if (data) {
            this.caseList = data
            this.foundCases = true
        }
        if (error) {
            this.caseList = undefined
        }
    }

    @wire(fetchTasks)
    wiredTasks({ data, error }) {
        if (data) {
            this.taskList = data
            this.foundTasks = true
        }
        if (error) {
            this.taskList = undefined
        }
    }
    
}