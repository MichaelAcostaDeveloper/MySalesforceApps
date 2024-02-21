/**
 * @author            : Fernando M. Acosta P.
 * @Equipo            : CRM
 * @last modified on  : 02-21-2024
 * @last modified by  : Fernando M. Acosta P.
 * @Descripción       : Clase apex que formatea el JSON del response del servicio.
**/
public with sharing class MarsPhotoProcessor {
    public static List<Photo> processMarsPhoto(String jsonString) {
        Map<String, Object> deserializedMap = (Map<String, Object>) JSON.deserializeUntyped(jsonString);
        System.debug('Mapa deserializado: '+deserializedMap);

        List<Object> listPhotosAny = (List<Object>) deserializedMap.get('photos');
        List<Photo> listPhotos = new List<Photo>();
        for (Object obj : listPhotosAny) {
            Photo photo = (Photo) JSON.deserialize(JSON.serialize(obj), Photo.class);
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