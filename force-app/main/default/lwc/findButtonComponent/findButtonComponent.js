/**
 * @author            : Fernando M. Acosta P.
 * @Equipo            : CRM
 * @last modified on  : 02-24-2024
 * @last modified by  : Fernando M. Acosta P.
 * @Descripción       : Componente o clase apex ...
**/
import { LightningElement, api } from 'lwc';

export default class FindButtonComponent extends LightningElement {
    @api receivedArray;
    arrayValuesString;
    handleQuery() {
        this.arrayValuesString = JSON.stringify(this.receivedArray); // esto sirve para pasar a String
        console.log(this.receivedArray);
        console.log(this.receivedArray.length);
        if (this.receivedArray && this.receivedArray.length) {
            console.log('ARRAY PARA QUERY', this.receivedArray.join(', '));
        } else {
            console.log('No existen registros');

        }
    }

}