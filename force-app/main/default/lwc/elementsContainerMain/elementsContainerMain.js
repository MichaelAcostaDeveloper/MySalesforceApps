/**
 * @author            : Fernando M. Acosta P.
 * @Equipo            : CRM
 * @last modified on  : 02-23-2024
 * @last modified by  : Fernando M. Acosta P.
 * @Descripción       : Componente o clase apex ...
**/
import { LightningElement } from 'lwc';

export default class ElementsContainerMain extends LightningElement {
    option;
    handleSelection(event){
        this.option = event.detail;
        console.log('>>>>>>PARENT',this.option);
        this.template.querySelector('c-camara-name-selector').optionSend(this.option);
    }
}