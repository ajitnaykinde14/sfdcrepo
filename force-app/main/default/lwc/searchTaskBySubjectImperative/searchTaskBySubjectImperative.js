import { LightningElement } from 'lwc';
import getTaskata from '@salesforce/apex/taskController.getTaskata';

export default class SearchTaskBySubjectImperative extends LightningElement {

    subject
    taskList
    errorMessage
    showTable = false

    handleSubjectInput(event) {
        this.subject = event.target.value
    }

    searchSubject() {
        getTaskata({ subjectString: this.subject })
            .then((result) => {
                this.taskList = result
                this.showTable = true
            })
            .catch((error) => {
                this.errorMessage = error.body.message
            })
    }
}