import { LightningElement , track} from 'lwc';
import getContactList from '@salesforce/apex/LWC_DataTableContactController.getContactList';
export default class Lwc_ApexImperativeMethod extends LightningElement {
    @track contacts;
    @track error;

    handleLoad() {
        getContactList()
            .then(result => {
                this.contacts = result;
            })
            .catch(error => {
                this.error = error;
            });
    }
}