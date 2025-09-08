import { LightningElement } from 'lwc';

export default class IteratorFramework extends LightningElement {

taskList = [
    {taskId:1, taskName:'Prepare video script', taskPriority:'High', taskProgress:'In-Progress'},
    {taskId:2, taskName:'Create youtube video', taskPriority:'Medium', taskProgress:'Pending'},
    {taskId:3, taskName:'Upload video', taskPriority:'Low', taskProgress:'Pending'}]

}