import { LightningElement } from 'lwc';

export default class ParentChildLifecycleHook extends LightningElement {
    constructor(){
        super();
        console.log('Parent - Constructor is called')
    }

    connectedCallback(){
        console.log('Parent - Connected callback is fired')
    }

    renderedCallback(){
        console.log('Parent - Rendered callback is fired')
    }   

    disconnectedCallback(){
        console.log('Parent - Disconnected callback is called')
    }

    errorCallback(stack,trace){
        console.log('Parent - '+stack+'==='+trace)
    }
}