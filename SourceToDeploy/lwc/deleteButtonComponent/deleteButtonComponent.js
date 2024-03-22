/**
 * @author            : Fernando M. Acosta P.
 * @Equipo            : CRM
 * @last modified on  : 03-22-2024
 * @last modified by  : Fernando M. Acosta P.
 * @Descripción       : Componente o clase apex ...
**/
import { LightningElement, api, wire } from 'lwc';
import eliminarRegistros from '@salesforce/apex/DeletePhotoMars.deletephotos';

export default class DeleteButtonComponent extends LightningElement {
    @api recordId;

    eliminar(){
        eliminarRegistros({recordId: this.recordId})
        .then(()=>{
            console.log('Borrado exitoso!!!')
        })
        .catch(error=> {
            console.log('Falló!!');
        })
        .finally(()=> {
            location.reload();
        });
    }
}