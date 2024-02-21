/**
 * @author            : Fernando M. Acosta P.
 * @Equipo            : CRM
 * @last modified on  : 02-21-2024
 * @last modified by  : Fernando M. Acosta P.
 * @Descripción       : Clase apex para consumir API de Mars Photos
**/
public with sharing class MarsPhotoCallout {
    public static void obtainNasaMarsPhotos(){
        try {
            HttpRequest req = new HttpRequest();
            req.setEndpoint('Callout:MarsPhotos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY');
            req.setMethod('GET');

            Http http = new Http();
            HTTPResponse res = http.send(req);
            System.debug(res.getBody());
            System.debug('STATUS OF RESPONSE IN STRING: '+res.toString());
            System.debug('BLOB OF BODY: '+res.getBodyAsBlob());
            System.debug('STATUS CODE OF BODY: '+res.getStatusCode());
            if (res.getStatusCode()!=200) {
                System.debug('Error de la comunicación!!!');
            } else {
                //Creación de una lista del objeto Mars_Photo__c para inserción al DataBase
                List<Mars_Photo__c>listMarsPhoto = new List<Mars_Photo__c>();
                //Call to method to get a list of Photos
                MarsPhotoProcessor.processMarsPhoto(res.getBody());
                for (MarsPhotoProcessor.Photo objPhoto : MarsPhotoProcessor.processMarsPhoto(res.getBody())) {
                    Mars_Photo__c objMarsPhoto = new Mars_Photo__c();
                    objMarsPhoto.Name = String.valueOf(objPhoto.id);
                    objMarsPhoto.sol__c = String.valueOf(objPhoto.sol);
                    objMarsPhoto.Image__c = objPhoto.img_src;
                    objMarsPhoto.Earth_date__c = Date.valueOf(objPhoto.earth_date);
                    System.debug('Mars Photo: '+objMarsPhoto);
                    //listMarsPhoto.add(objMarsPhoto);
                }
            }
        }
        catch (Exception ex) {
            System.debug('Ruta del error >>> '+ex.getStackTraceString());
            System.debug('Mensaje del error >>> '+ex.getMessage());
            throw new AuraHandledException(ex.getMessage());
        }
    }
}