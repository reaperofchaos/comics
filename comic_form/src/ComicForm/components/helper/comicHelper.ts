import { Publisher } from "../../types/Comic.types";
import DCLogo from '../../resources/dc_logo.png';

export const getLogo = (logo: string) =>{
    let logoImage = null;
    switch(logo){
        case Publisher.DC:
            logoImage = DCLogo; 
            break;
        default:
            
    }
    return logoImage; 
}