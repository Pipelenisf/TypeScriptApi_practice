import { getApiCharacters } from '../../api'
import { appCard } from './interface';

class Card extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    async connectedCallback(){
        const dCharacters = await getApiCharacters();
        this.render(dCharacters);
    }

    render(dCharacters: Array<appCard>){
        if(!this.shadowRoot)
        return; 
        
            {const dCharactersAtt = dCharacters.map(({imageUrl, name, tvShows}) => `
                <div style='background-image: url(${imageUrl})'></div>
                <p>${name}</p>
                <p>${tvShows}</p>
            `
            ); 
            this.shadowRoot.innerHTML = `
                ${dCharactersAtt.join()}
            `   
        }
    }
}

customElements.define("app-card", Card)
export default Card