/**
 * @author            : Fernando M. Acosta P.
 * @Equipo            : CRM
 * @last modified on  : 02-22-2024
 * @last modified by  : Fernando M. Acosta P.
 * @Descripción       : Clase apex para eliminar Objetos Mars_Photo__c
**/
public with sharing class DeletePhotoMars {
    public static void deletephotos(){
        List<Mars_Photo__c> photosToDelete = [SELECT ID FROM Mars_Photo__c ];
        delete photosToDelete;
    }
}