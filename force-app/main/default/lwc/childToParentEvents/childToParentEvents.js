import { LightningElement } from 'lwc';

export default class ChildToParentEvents extends LightningElement {

    showFinalValue

    handleProductSelection(event) {
        this.showFinalValue = event.detail
    }
}