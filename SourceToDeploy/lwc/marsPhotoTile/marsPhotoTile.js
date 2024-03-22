/**
 * @author            : Fernando M. Acosta P.
 * @Equipo            : CRM
 * @last modified on  : 03-22-2024
 * @last modified by  : Fernando M. Acosta P.
 * @Descripción       : Componente o clase apex ...
**/
import { LightningElement, wire, api } from 'lwc';
import getMphotosList from '@salesforce/apex/mPhotoController.getMphotos';


export default class MarsPhotoTile extends LightningElement {

    customPhotos;

    @wire(getMphotosList)
    wiredPhotos({error, data}){
        if (data) {
            this.customPhotos = data;
        } else if(error){
            console.log(error);
        }
    };
}