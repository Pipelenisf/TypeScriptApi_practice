export enum appCard {
    "thumbnail" = "thumbnail",
    "character" = "character",
    "description" = "description",
}

class Card extends HTMLElement{

    thumbnail?: string
    character?: string
    description?: string

    static get observedAttributes(){
        const cardAtt: Record<appCard, null> = {
            thumbnail: null,
            character: null,
            description: null
        }
        return  Object.keys(cardAtt)
    }

    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    attributeChangedCallback(propName: appCard, _:string, newValue: string){
        this[propName] = newValue;
        this.render()
    }

    render(){
        if(this.shadowRoot)
        this.shadowRoot.innerHTML = `
        <section class="card">
            <div class="character-thumbnail" style="background-image: url(${this.thumbnail || "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Picture_icon_BLACK.svg/1156px-Picture_icon_BLACK.svg.png"});"></div>
            <h3>${this.character || "Character"}</h3>
            <p>${this.description || "No content"}</p>
        </section>
        `
    }
}

customElements.define("app-card", Card)
export default Card