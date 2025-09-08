import { LightningElement } from 'lwc';

export default class ChildLifecycle extends LightningElement {
    constructor(){
        super();
        console.log('Child - Constructor is called')
    }

    connectedCallback(){
        console.log('Child - Connected callback is fired')
    }

    renderedCallback(){
        console.log('Child - Rendered callback is fired')
    }   

    disconnectedCallback(){
        console.log('Child - Disconnected callback is called')
    }

    errorCallback(stack,trace){
        console.log('Child - '+stack+'==='+trace)
    }
}