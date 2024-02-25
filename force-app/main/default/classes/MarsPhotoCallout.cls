/**
 * @author            : Fernando M. Acosta P.
 * @Equipo            : CRM
 * @last modified on  : 02-25-2024
 * @last modified by  : Fernando M. Acosta P.
 * @Descripción       : Clase apex para consumir API de Mars Photos
**/
public with sharing class MarsPhotoCallout {
    public static void obtainNasaMarsPhotos(String nameRover, String nameCamera, String numSol){
        try {
            HttpRequest req = new HttpRequest();
            req.setEndpoint('Callout:MarsPhotos/rovers/'+nameRover+'/photos?api_key=DEMO_KEY&camera='+nameCamera+'&sol='+numSol);
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
                //Creación de una lista del objeto Rover para inserción al DataBase
                List<Rover__c>listRover = new List<Rover__c>();

                //Call to method to get a list of Photos
                MarsPhotoProcessor.processMarsPhoto(res.getBody());
                for (MarsPhotoProcessor.Photo objPhoto : MarsPhotoProcessor.processMarsPhoto(res.getBody())) {
                    Rover__c objRover = new Rover__c();
                    Mars_Photo__c objMarsPhoto = new Mars_Photo__c();
                    objRover.Name = String.valueOf(objPhoto.rover.id);
                    objRover.Name__c = String.valueOf(objPhoto.rover.name);
                    objRover.Fecha_de_aterrizaje__c = Date.valueOf(objPhoto.rover.landing_date);
                    objRover.Fecha_de_lanzamiento__c = Date.valueOf(objPhoto.rover.launch_date);
                    objRover.Status__c = String.valueOf(objPhoto.rover.status);
                    objRover.Numero_de_dias_de_la_mision__c = Integer.valueOf(objPhoto.rover.max_sol);
                    objRover.Fecha_maxima_de_la_mision__c = Date.valueOf(objPhoto.rover.max_date);
                    objRover.Numero_de_fotografias__c = Integer.valueOf(objPhoto.rover.total_photos);
                    System.debug('Rover: '+objRover);
                    listRover.add(objRover);

                    objMarsPhoto.Name = String.valueOf(objPhoto.id);
                    objMarsPhoto.sol__c = String.valueOf(objPhoto.sol);
                    objMarsPhoto.Image__c = objPhoto.img_src;
                    objMarsPhoto.Earth_date__c = Date.valueOf(objPhoto.earth_date);
                    System.debug('Mars Photo: '+objMarsPhoto);
                    listMarsPhoto.add(objMarsPhoto);
                }
                try {
                    //Inserción de objetos Rover__c
                    upsert listRover Id;
    
                    //Obtener los ID de los objetos Rover__c insertados
                    for (Integer i = 0; i < listRover.size(); i++) {
                        listMarsPhoto[i].Rover__c = listRover[i].Id;
                    }
    
                    //Insertar los objetos Mars_Photo__c con los IDs de Rover__c asociados
                    upsert listMarsPhoto Id;
                } catch (DmlException e) {
                    System.debug(e.getMessage());
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