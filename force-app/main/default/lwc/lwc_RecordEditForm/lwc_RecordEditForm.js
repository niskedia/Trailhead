import { LightningElement,api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class Lwc_RecordEditForm extends LightningElement {

    @api recordId;

    handleReset(event) {
        const inputFields = this.template.querySelectorAll(
            'lightning-input-field'
        );
        if (inputFields) {
            inputFields.forEach(field => {
                field.reset();
            });
        }
     }

     handleError(event){
        console.log(event.detail);
        this.dispatchEvent(
            new ShowToastEvent({
                title: 'Error creating record',
                message: event.detail.message,
                variant: 'error',
            }),
        );
    }
}