/**
 * @author            : Fernando M. Acosta P.
 * @Equipo            : CRM
 * @last modified on  : 03-20-2024
 * @last modified by  : Fernando M. Acosta P.
 * @Descripción       : Componente LWC para ingresar el número de días terrestres
**/
import { LightningElement } from 'lwc';

export default class NumberDaySelector extends LightningElement {

    handleAmountChange(e) {
        const amount = e.detail.value;
        console.log('Valor de martian sol en CHILD: ',amount);
        this.dispatchEvent(new CustomEvent('sendsol',{detail:amount}));
    }
}