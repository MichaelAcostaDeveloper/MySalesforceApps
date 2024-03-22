/**
 * @author            : Fernando M. Acosta P.
 * @Equipo            : CRM
 * @last modified on  : 02-22-2024
 * @last modified by  : Fernando M. Acosta P.
 * @Descripción       : Clase apex para eliminar Objetos Rover__c
**/
public with sharing class DeleteRovers {
    public static void deleteRoversRobots(){
        List<Rover__c> roversToDelete = [SELECT ID FROM Rover__c ];
        delete roversToDelete;
    }
}