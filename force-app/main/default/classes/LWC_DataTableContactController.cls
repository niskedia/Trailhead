public with sharing class LWC_DataTableContactController {
 @AuraEnabled(cacheable=true)
    public static List<Contact> getContactList() {
        return [SELECT Id, FirstName, LastName, Title, Phone, Email FROM Contact LIMIT 10];
    }
}
