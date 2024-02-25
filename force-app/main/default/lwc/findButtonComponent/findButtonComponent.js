/**
 * @author            : Fernando M. Acosta P.
 * @Equipo            : CRM
 * @last modified on  : 02-24-2024
 * @last modified by  : Fernando M. Acosta P.
 * @Descripción       : Componente o clase apex ...
**/
import { LightningElement, api, track } from 'lwc';

export default class FindButtonComponent extends LightningElement {
    @api receivedArray;
    arrayValuesString;
    @track newArray = [];
    handleQuery() {
        this.arrayValuesString = JSON.stringify(this.receivedArray); // esto sirve para pasar a String
        if (this.receivedArray && this.receivedArray.length) {
            console.log('SIZE DEL ARRAY: ',this.receivedArray.length);
            console.log('ARRAY OBTENIDO: ', this.receivedArray.join(', '));
            console.log('ARRAY PARA ITERAR: ', this.receivedArray);
            this.receivedArray.forEach((element, index) => {
                if (index === 0 || index === 1 || index === this.receivedArray.length - 1) {
                    console.log(element);
                    this.newArray.push(element);
                }
            });
            console.log('CLEAN ARRAY: ',this.newArray);
            console.log('CLEAN ARRAY: ',this.newArray.join(', '));
        } else {
            console.log('No existen registros');
        }
    }

}