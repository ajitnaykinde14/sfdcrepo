import { LightningElement, api, wire, track } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import getAccountWithRelatedRecords from '@salesforce/apex/AccountDataController.getAccountWithRelatedRecords';

export default class AccountDetails extends LightningElement {
    @api recordId; // Account Id - can be passed from record page
    @track accountData = {};
    @track contacts = [];
    @track opportunities = [];
    @track isLoading = false;
    @track error;

    // Columns for contacts datatable
    contactColumns = [
        { label: 'Name', fieldName: 'Name', type: 'text' },
        { label: 'Email', fieldName: 'Email', type: 'email' },
        { label: 'Phone', fieldName: 'Phone', type: 'phone' },
        { label: 'Title', fieldName: 'Title', type: 'text' }
    ];

    // Columns for opportunities datatable
    opportunityColumns = [
        { label: 'Name', fieldName: 'Name', type: 'text' },
        { label: 'Stage', fieldName: 'StageName', type: 'text' },
        { label: 'Amount', fieldName: 'Amount', type: 'currency' },
        { label: 'Close Date', fieldName: 'CloseDate', type: 'date' },
        { label: 'Probability', fieldName: 'Probability', type: 'percent', typeAttributes: { step: '0.01' } }
    ];

    connectedCallback() {
        if (this.recordId) {
            this.fetchAccountData();
        }
    }

    fetchAccountData() {
        this.isLoading = true;
        this.error = null;

        getAccountWithRelatedRecords({ accountId: this.recordId })
            .then(result => {
                this.accountData = result.account;
                this.contacts = result.contacts || [];
                this.opportunities = result.opportunities || [];
                this.error = null;
            })
            .catch(error => {
                this.error = error;
                this.accountData = {};
                this.contacts = [];
                this.opportunities = [];
                this.showToast('Error', 'Error fetching account data: ' + error.body.message, 'error');
            })
            .finally(() => {
                this.isLoading = false;
            });
    }

    handleAccountIdChange(event) {
        this.recordId = event.target.value;
    }

    handleFetchData() {
        if (this.recordId) {
            this.fetchAccountData();
        } else {
            this.showToast('Warning', 'Please enter an Account ID', 'warning');
        }
    }

    showToast(title, message, variant) {
        const event = new ShowToastEvent({
            title: title,
            message: message,
            variant: variant
        });
        this.dispatchEvent(event);
    }

    get hasContacts() {
        return this.contacts && this.contacts.length > 0;
    }

    get hasOpportunities() {
        return this.opportunities && this.opportunities.length > 0;
    }

    get contactsCount() {
        return this.contacts ? this.contacts.length : 0;
    }

    get opportunitiesCount() {
        return this.opportunities ? this.opportunities.length : 0;
    }

    get totalOpportunityAmount() {
        if (!this.opportunities || this.opportunities.length === 0) {
            return 0;
        }
        return this.opportunities.reduce((total, opp) => {
            return total + (opp.Amount || 0);
        }, 0);
    }
}