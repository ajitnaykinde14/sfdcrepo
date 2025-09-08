import { LightningElement } from 'lwc';

export default class LifecycleHooks extends LightningElement {
    userName = 'Subhashini'

    handleNameChange(){
        this.userName = 'Vinod'
    }

    constructor(){
        super();
        //console.log('Constructor is called')
    }

    connectedCallback(){
        //console.log('Connected callback is fired')
    }

    renderedCallback(){
       // console.log('Rendered callback is fired')
    }   

    disconnectedCallback(){
       // console.log('Disconnected callback is called')
    }

    errorCallback(stack,trace){
       // console.log(stack+'==='+trace)
    }
}