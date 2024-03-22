/**
 * @author            : Fernando M. Acosta P.
 * @Equipo            : CRM
 * @last modified on  : 03-21-2024
 * @last modified by  : Fernando M. Acosta P.
 * @Descripción       : Componente LWC padre que contiene a: roverNameSelector, camaraNameSelector, numberDaySelector, botón de búsqueda, botón de eliminación
**/
import { LightningElement, track } from 'lwc';

export default class ElementsContainerMain extends LightningElement {
    optionRover;
    @track optionCamara;
    martialSol;
    valuesToQuery = [];

    handleSelectionRover(event){
        this.optionRover = event.detail;
        console.log('>>>>>>PARENT ROVER>>>>',this.optionRover);
        this.valuesToQuery.push(this.optionRover);
        this.template.querySelector('c-camara-name-selector').optionSend(this.optionRover);

    }
    handleSelectionCamara(event){
        this.optionCamara = event.detail;
        this.valuesToQuery.push(this.optionCamara);

        console.log('>>>>>>PARENT CAMARA>>>>',this.optionCamara);

    }
    handleSelectionMartialSol(event){
        this.optionCamara = event.detail;
        this.valuesToQuery.push(this.optionCamara);
        console.log('>>>>>>PARENT MARTIAL SOL>>>>',this.martialSol);

    }

}