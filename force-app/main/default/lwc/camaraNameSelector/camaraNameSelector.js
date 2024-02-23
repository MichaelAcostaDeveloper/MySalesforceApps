/**
 * @author            : Fernando M. Acosta P.
 * @Equipo            : CRM
 * @last modified on  : 02-23-2024
 * @last modified by  : Fernando M. Acosta P.
 * @Descripción       : Componente o clase apex ...
**/
import { LightningElement, api } from 'lwc';

export default class CamaraNameSelector extends LightningElement {
    optionPerCamera;
    cameraOptions;

    @api optionSend(strMessage){
        this.optionPerCamera = strMessage;
        console.log('ANOTHER CHILD',this.optionPerCamera);
        switch (this.optionPerCamera) {
            case 'Curiosity':
                console.log('switch>>>>',this.optionPerCamera);
                this.cameraOptions = [
                    {
                        label: '--None--',
                        value: '',
                    },
                    {
                        label: 'Front Hazard Avoidance Camera',
                        value: 'FHAZ',
                    },
                    {
                        label: 'Rear Hazard Avoidance Camera',
                        value: 'RHAZ',
                    },
                    {
                        label: 'Mast Camera',
                        value: 'MAST',
                    },
                    {
                        label: 'Chemistry and Camera Complex',
                        value: 'CHEMCAM',
                    },
                    {
                        label: 'Mars Hand Lens Imager',
                        value: 'MAHLI',
                    },
                    {
                        label: 'Mars Descent Imager',
                        value: 'MARDI',
                    },
                    {
                        label: 'Navigation Camera',
                        value: 'NAVCAM',
                    }
                ];
                break;
            case 'Opportunity':
                console.log('switch>>>>',this.optionPerCamera);
                this.cameraOptions = [
                    {
                        label: '--None--',
                        value: '',
                    },
                    {
                        label: 'Front Hazard Avoidance Camera',
                        value: 'FHAZ',
                    },
                    {
                        label: 'Rear Hazard Avoidance Camera',
                        value: 'RHAZ',
                    },
                    {
                        label: 'Navigation Camera',
                        value: 'NAVCAM',
                    },
                    {
                        label: 'Panoramic Camera',
                        value: 'PANCAM',
                    },
                    {
                        label: 'Miniature Thermal Emission Spectrometer (Mini-TES)',
                        value: 'MINITES',
                    }
                ];
                break;
            case 'Spirit':
                console.log('switch>>>>',this.optionPerCamera);
                this.cameraOptions = [
                    {
                        label: '--None--',
                        value: '',
                    },
                    {
                        label: 'Front Hazard Avoidance Camera',
                        value: 'FHAZ',
                    },
                    {
                        label: 'Rear Hazard Avoidance Camera',
                        value: 'RHAZ',
                    },
                    {
                        label: 'Navigation Camera',
                        value: 'NAVCAM',
                    },
                    {
                        label: 'Panoramic Camera',
                        value: 'PANCAM',
                    },
                    {
                        label: 'Miniature Thermal Emission Spectrometer (Mini-TES)',
                        value: 'MINITES',
                    }
                ];
                break;
        
            default:
                break;
        }
    }


    selectVal = '';
    handleChange(event) {
        this.selectVal = event.detail.value;
    }
}