import { LightningElement } from 'lwc';

export default class DataBinding extends LightningElement {

    testName
    totalLessonWatched = 50

    handleChange(event){
        this.testName = event.target.value
        console.log('Type of object for Event: '+typeof(event.target))
        console.log('Event received: '+event.target)
        console.log('Event received: '+event.target.value)
        console.log('Event detail received: '+JSON.stringify(event.detail))
    }



    get handleTotalLessonWatched(){
        return `The total watched duration is: ${this.totalLessonWatched * 10}`
    }


}   