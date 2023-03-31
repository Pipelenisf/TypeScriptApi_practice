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
                <link rel="stylesheet" href="../src/components/card/card.css">
                <section>
                    <div class="image" style='background-image: url(${imageUrl})'></div>
                    <h1>${name}</h1>
                    <div class="tv-shows-tag"><p>${tvShows}</p></div>
                </section>
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