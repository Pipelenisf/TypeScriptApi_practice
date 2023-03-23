import * as components from './components/exports'
import Card, {appCard} from './components/card/card'

class AppHeader extends HTMLElement{
    cardAttributes: Card[] = [];
    
    static get observedAttributes(){
        return
    }
}