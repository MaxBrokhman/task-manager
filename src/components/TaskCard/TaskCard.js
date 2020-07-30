class TaskCard extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({mode: 'open'})
    this.template = document.createElement('template')
  }

  get taskDescription() {
    return this.getAttribute('task-description') || ''
  }

  get dueDate() {
    return this.getAttribute('due-date') || ''
  }

  get repeatingDays() {
    return JSON.parse(this.getAttribute('repeating-days')) || []
  }

  get taskColor() {
    return this.getAttribute('task-color') || ''
  }

  get isFavorite() {
    return this.hasAttribute('is-favorite')
  }

  get isArchive() {
    return this.hasAttribute('is-archive')
  }

  connectedCallback() {
    this.render()
    this.shadowRoot.appendChild(this.template.content.cloneNode(true))
  }

  get html() {
    const isExpired = this.dueDate 
      && new Date(this.dueDate).getTime() > new Date().getTime()
    const color = isExpired
      ? 'red'
      : this.taskColor
    return `
      <link rel="stylesheet" href="./css/task-card.css" />
      <article 
        class="card card--${color} ${this.repeatingDays.length ? 'card--repeat' : ''}"
      >
        <div class="card__form">
          <div class="card__inner">
            <div class="card__control">
              <button type="button" class="card__btn card__btn--edit">
                edit
              </button>
              <button type="button" class="card__btn card__btn--archive">
                archive
              </button>
              <button
                type="button"
                class="card__btn card__btn--favorites card__btn--disabled"
              >
                favorites
              </button>
            </div>

            <div class="card__color-bar">
              <svg class="card__color-bar-wave" width="100%" height="10">
                <svg xmlns="http://www.w3.org/2000/svg" width="159" height="10" viewBox="0 0 159 10">
                  <g fill="none" fill-rule="nonzero" stroke-linecap="square" stroke-width="5">
                      <path d="M4 4l9.257 2.463L21.367 4l7.927 2.463L38.736 4l9.117 2.463L56.103 4l8.685 2.463L73.472 4l8.684 2.463L90.84 4l8.684 2.463L108.208 4l8.684 2.463L125.576 4l8.684 2.463L142.943 4M146.423 4l9.257 2.463"/>
                  </g>
                </svg>
              </svg>
            </div>

            <div class="card__textarea-wrap">
              <p class="card__text">${this.taskDescription}</p>
            </div>

            <div class="card__settings">
              <div class="card__details">
                <div class="card__dates">
                  <div class="card__date-deadline">
                    <p class="card__input-deadline-wrap">
                      <span class="card__date">${this.dueDate}</span>
                      <span class="card__time">16:15</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    `
  }

  render() {
    this.template.innerHTML = this.html
  }
}

customElements.define('task-card', TaskCard)
