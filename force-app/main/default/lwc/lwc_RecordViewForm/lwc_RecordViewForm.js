import { LightningElement, api, wire } from 'lwc';
/* Wire adapter to fetch record data */
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import OWNER_NAME_FIELD from '@salesforce/schema/Account.Owner.Name';

const FIELDSARRAY = [NAME_FIELD, OWNER_NAME_FIELD];
export default class LWC_RecordViewForm extends LightningElement {
     /** Id of record to display. */
    @api recordId;

    /* Expose schema objects/fields to the template. */
    accountObject = ACCOUNT_OBJECT;

    /* Load Account.Name for custom rendering */
    @wire(getRecord, { recordId: '$recordId', fields: FIELDSARRAY })
    record;

    /** Get the Account.Name value. */
    get nameValue() {
        console.log("The record is",this.record);
        return this.record.data ? getFieldValue(this.record.data, NAME_FIELD) : '';
    }

    get ownerName() {
        return this.record.data ? getFieldValue(this.record.data, OWNER_NAME_FIELD) : '';
    }
}