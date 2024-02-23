/**
 * @author            : Fernando M. Acosta P.
 * @Equipo            : CRM
 * @last modified on  : 02-22-2024
 * @last modified by  : Fernando M. Acosta P.
 * @Descripción       : Componente o clase apex ...
**/
import { LightningElement } from 'lwc';

export default class NumberDaySelector extends LightningElement {
    amount = 0;

    handleAmountChange(e) {
        this.amount = e.detail.value;
    }
}