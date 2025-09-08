import { LightningElement } from 'lwc';
import MYANIMAL from '@salesforce/resourceUrl/Camel_Image';
import SVGVECTOR from '@salesforce/resourceUrl/svgvect';
import SHOWINPROD from '@salesforce/label/c.Show_in_prod';
import USERID from '@salesforce/user/Id';
import HASPERMISSION from '@salesforce/userPermission/ViewSetup';
import DEVICEINFO from '@salesforce/client/formFactor';
import LANG from '@salesforce/i18n/lang';
import LOCALE from '@salesforce/i18n/locale';
import CURRENCY from '@salesforce/i18n/currency';


export default class ImportUtility extends LightningElement {

    src = MYANIMAL
    svgSample = SVGVECTOR
    UId = USERID
    deviceInfo = DEVICEINFO;
    language = LANG
    localZone = LOCALE
    currency = CURRENCY;

    get Show_in_prod(){
        return SHOWINPROD == "true"? true : false
    }

    get hasPermissions(){
        //console.log('Imported from permission set: '+HASPERMISSION)
        return HASPERMISSION
    }
} 