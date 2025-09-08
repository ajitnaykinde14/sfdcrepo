import { LightningElement, wire } from 'lwc';
import getTaskata from '@salesforce/apex/taskController.getTaskata';

export default class SearchTaskBySubject extends LightningElement {

    taskList
    subjectTask = 'Demo appointments'

    @wire(getTaskata, {subjectString:'$subjectTask'})
    wiredTasks({data,error}){
        try{
            if(data){
                this.taskList = data
                this.error = undefined
            }
            if(error){
                this.error = error.body.message
                this.data = undefined
            }
        }
        catch(error){
            console.log('Error while loading task recordss: '+error.body.message)
        }
    }
}