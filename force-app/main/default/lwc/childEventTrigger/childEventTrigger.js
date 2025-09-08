import { LightningElement } from 'lwc';

export default class ChildEventTrigger extends LightningElement {

    selectedProduct

    handleFiringEvent() {
       this.selectedProduct = 'Geely Coolray';
        const event = new CustomEvent('sendproductselected',{
            detail:this.selectedProduct
        });
        this.dispatchEvent(event);
    }
}