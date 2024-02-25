/**
 * @author            : Fernando M. Acosta P.
 * @Equipo            : CRM
 * @last modified on  : 02-24-2024
 * @last modified by  : Fernando M. Acosta P.
 * @Descripción       : Componente o clase apex ...
**/
import { LightningElement } from 'lwc';

export default class NumberDaySelector extends LightningElement {

    handleAmountChange(e) {
        const amount = e.detail.value;
        console.log('Valor de martian sol en CHILD: ',amount);
        this.dispatchEvent(new CustomEvent('sendsol',{detail:amount}));
    }
}