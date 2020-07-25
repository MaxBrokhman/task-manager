class CardsBoard extends HTMLElement {
  static get observedAttributes() {
    return []
  }
  constructor() {
    super()
    this.attachShadow({mode: 'open'})
    this.template = document.createElement('template')
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      switch(name) {
        case '':
      }
    }
  }

  connectedCallback() {
    this.render()
    this.shadowRoot.appendChild(this.template.content.cloneNode(true))
  }

  disconnectedCallback() {
    
  }

  get html() {
    return `
      <link rel="stylesheet" href="./css/container.css" />
      <link rel="stylesheet" href="./css/cards-board.css" />
      <div class="board__tasks">
        <task-card></task-card>
      </div>
    `
  }

  render() {
    this.template.innerHTML = this.html
  }
}

customElements.define('cards-board', CardsBoard)
