/**
 * @author            : Fernando M. Acosta P.
 * @Equipo            : CRM
 * @last modified on  : 02-21-2024
 * @last modified by  : Fernando M. Acosta P.
 * @Descripción       : Clase apex que formatea el JSON del response del servicio.
**/
public with sharing class MarsPhotoProcessor {
    public static List<Photo> processMarsPhoto(String jsonString) {

        //Casteo del string JSON a un Map especifico <String, Object>
        Map<String, Object> mapDeserealizado = (Map<String, Object>) JSON.deserializeUntyped(jsonString);//-> Transforma String a Lista de datos primitivos.
        System.debug('Mapa deserializado: '+mapDeserealizado);

        //Casteo del value del MAP deserializado que tiene la key 'photos' a una la lista de Objects
        List<Object> listPhotosAny = (List<Object>) mapDeserealizado.get('photos');

        //Creación de Instancia de una lista de objeto Photo
        List<Photo> listPhotos = new List<Photo>();

        //Iteración de la lista listPhotosAny
        for (Object obj : listPhotosAny) {
            Photo photo = (Photo) JSON.deserialize(JSON.serialize(obj), Photo.class);//-> Serialice: transforma Objects a String JSON
            listPhotos.add(photo);
        }
        System.debug('Lista de photos: '+listPhotos);
        return listPhotos;

    }
        //Definir la clase que representa la estructura JSON
        public class Photo{
            public Integer id;
            public Integer sol;
            public Camera camera;
            public String img_src;
            public String earth_date;
            public Rover rover;
        }

        public class Camera{
            public Integer id;
            public String name;
            public Integer rover_id;
            public String full_name;
        }

        public class Rover{
            public Integer id;
            public String name;
            public String landing_date;
            public String launch_date;
            public String status;
            public Integer max_sol;
            public String max_date;
            public Integer total_photos;
            public List<Camera> cameras;
        }
}