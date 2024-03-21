/**
 * @author            : Fernando M. Acosta P.
 * @Equipo            : CRM
 * @last modified on  : 03-20-2024
 * @last modified by  : Fernando M. Acosta P.
 * @Descripción       : Componente LWC que realiza la query a la API de la NASA.
**/
import { LightningElement, api, track} from 'lwc';
import getMarsPhotos from '@salesforce/apex/MarsPhotoCallout.obtainNasaMarsPhotos';

export default class FindButtonComponent extends LightningElement {
    @api receivedArray;
    arrayValuesString;
    @track newArray = [];
    @track isLoading = false;

    handleQuery() {

        this.isLoading = true;

        this.arrayValuesString = JSON.stringify(this.receivedArray); // esto sirve para pasar a String
        if (this.receivedArray && this.receivedArray.length) {
            console.log('SIZE DEL ARRAY: ', this.receivedArray.length);
            console.log('ARRAY OBTENIDO: ', this.receivedArray.join(', '));
            console.log('ARRAY PARA ITERAR: ', this.receivedArray);
            this.receivedArray.forEach((element, index) => {
                if (index === 0 || index === 1 || index === this.receivedArray.length - 1) {
                    console.log(element);
                    this.newArray.push(element);
                }
            });
            console.log('CLEAN ARRAY: ', this.newArray);
            console.log('CLEAN ARRAY: ', this.newArray.join(', '));

        } else {
            console.log('No existen registros');
        }
        getMarsPhotos({nameRover:this.newArray[0], nameCamera:this.newArray[1], numSol:this.newArray[2]})
        .then(result => {
            // Manejar el resultado aquí
            console.log('>>>>>>>>',JSON.stringify(result));
        })
        .catch(error => {
            // Manejar errores aquí
            console.error('>>>+++>>>',error);
        })
        .finally(()=> {
            this.isLoading = false; // Ocultar mensaje de carga
        });
        console.log(this.newArray);
        console.log(this.newArray[0]);
        console.log(this.newArray[1]);
        console.log(this.newArray[2]);

        return this.newArray;
    }

}