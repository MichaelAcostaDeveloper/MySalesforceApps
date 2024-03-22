/**
 * @author            : Fernando M. Acosta P.
 * @Equipo            : CRM
 * @last modified on  : 03-22-2024
 * @last modified by  : Fernando M. Acosta P.
 * @Descripción       : Componente o clase apex ...
**/
public with sharing class mPhotoController {
    @AuraEnabled(cacheable=true)
    public static List<Mars_Photo__c> getMphotos(){
        return [SELECT Id, Name, Earth_date__c, sol__c, Image__c FROM Mars_Photo__c];
    }


}