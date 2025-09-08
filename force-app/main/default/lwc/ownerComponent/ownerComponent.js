import { LightningElement } from 'lwc';

export default class OwnerComponent extends LightningElement {
    productList = [
        { id: '1', name: 'MacBook Air', rating: '3/5' },
        { id: '1', name: 'MacBook Pro', rating: '4.1/5' },
        { id: '1', name: 'Humanity', rating: '4.5/5' }
    ];

    handleParentCall() {
        this.template.querySelector('c-container-component').parentCalledChild()
    }

}