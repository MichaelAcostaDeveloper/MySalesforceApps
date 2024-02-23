/**
 * @author            : Fernando M. Acosta P.
 * @Equipo            : CRM
 * @last modified on  : 02-22-2024
 * @last modified by  : Fernando M. Acosta P.
 * @Descripción       : Componente o clase apex ...
**/
import { LightningElement } from 'lwc';

export default class RoverNameSelector extends LightningElement {
    selectVal = '';
    RoverOptions = [
        {
            label: '--None--',
            value: '',
        },
        {
            label: 'Curiosity',
            value: 'Curiosity',
        },
        {
            label: 'Opportunity',
            value: 'Opportunity',
        },
        {
            label: 'Spirit',
            value: 'Spirit',
        },
    ];

    handleChange(event) {
        this.selectVal = event.detail.value;
        console.log('>>>>>>', this.selectVal);
        this.dispatchEvent(new CustomEvent('senddata',{detail:this.selectVal}));
    }
}