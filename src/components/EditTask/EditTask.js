import flatpickr from "flatpickr"

const DAYS = ['mo', 'tu', 'we', 'th', 'fr', 'sa', 'su']
const COLORS = ['black', 'yellow', 'blue', 'green', 'pink']

class EditTask extends HTMLElement {
  constructor() {
    super()
    this.template = document.createElement('template')
    this._isRepeating = Boolean(this.repeatingDays.length)
    this.repeatBtn = null
    this.repeatSpan = null
    this.wrapper = null
    this.dateInput = null

    this.renderDayInput = this.renderDayInput.bind(this)
    this.renderColorInput = this.renderColorInput.bind(this)
  }

  connectedCallback() {
    this.template.innerHTML = this.html
    this.appendChild(this.template.content.cloneNode(true))
    this.wrapper = this.querySelector('article')
    this.render()
    this.wrapper.onclick = (evt) => this.clickHandler(evt)
  }

  clickHandler(evt) {
    const elems = evt.composedPath()
    if (elems.includes(this.repeatBtn)) {
      this.toggleIsRepeating()
    }
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

  get isRepeating() {
    return this._isRepeating
  }

  set isRepeating(value) {
    this._isRepeating = value
  }

  toggleIsRepeating() {
    this.isRepeating = !this.isRepeating
    this.render()
  }

  setBinaryStatus(condition) {
    return condition 
      ? 'yes' 
      : 'no'
  }
  
  renderDayInput(day) {
    return `
      <input
        class="visually-hidden card__repeat-day-input"
        type="checkbox"
        id="repeat-${day}-4"
        name="repeat"
        value="${day}"
      />
      <label class="card__repeat-day" for="repeat-${day}-4"
        >${day}</label
      >
    `
  }

  renderColorInput(color) {
    return `
      <input
        type="radio"
        id="color-${color}-4"
        class="card__color-input card__color-input--${color} visually-hidden"
        name="color"
        value="${color}"
      />
      <label
        for="color-${color}-4"
        class="card__color card__color--${color}"
        >${color}</label
      >
    `
  }

  get meta() {
    return `
      <link rel="stylesheet" href="./css/visually-hidden.css" />
      <link rel="stylesheet" href="./css/container.css" />
      <link rel="stylesheet" href="./css/task-card.css" />
      <link rel="stylesheet" href="./css/edit-task.css" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css">
    `
  }

  get html() {
    return `
      ${this.meta}
      <article>
      </article>
    `
  }

  get content() {
    return `
      <form class="card__form" method="get">
        <div class="card__inner">
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
            <label>
              <textarea
                class="card__text"
                placeholder="Start typing your text here..."
                name="text"
                required
                minlength="1"
                maxlength="140"
              >${this.taskDescription}</textarea>
            </label>
          </div>

          <div class="card__settings">
            <div class="card__details">
              <div class="card__dates">
                <button class="card__date-deadline-toggle" type="button">
                  date: <span class="card__date-status">${this.setBinaryStatus(this.dueDate)}</span>
                </button>
                ${
                  this.isRepeating 
                    ? ''
                    : `
                      <fieldset class="card__date-deadline">
                        <label class="card__input-deadline-wrap">
                          <input
                            class="card__date"
                            type="text"
                            placeholder=""
                            name="date"
                            value="23 September 16:15"
                            data-input
                          />
                        </label>
                      </fieldset>
                    `
                }
                
                <button class="card__repeat-toggle" type="button">
                  repeat:<span class="card__repeat-status">${this.setBinaryStatus(this.isRepeating)}</span>
                </button>

                ${
                  this.isRepeating 
                    ? `<fieldset class="card__repeat-days">
                        <div class="card__repeat-days-inner">
                          ${DAYS.map(this.renderDayInput).join('')}
                        </div>
                      </fieldset>`
                    : ''
                }
              </div>
            </div>

            <div class="card__colors-inner">
              <h3 class="card__colors-title">Color</h3>
              <div class="card__colors-wrap">
                ${COLORS.map(this.renderColorInput).join('')}
              </div>
            </div>
          </div>

          <div class="card__status-btns">
            <button class="card__save" type="submit">save</button>
            <button class="card__delete" type="button">delete</button>
          </div>
        </div>
      </form>
    `
  }

  render() {
    this.wrapper.innerHTML = this.content
    this.wrapper.className = this.isRepeating 
      ? `card card--edit card--${this.color} card--repeat`
      : `card card--edit card--${this.color}`
    this.repeatBtn = this.querySelector('.card__repeat-toggle')
    this.repeatSpan = this.querySelector('.card__repeat-status')
    if (!this.isRepeating) {
      this.dateInput = this.wrapper.querySelector('.card__input-deadline-wrap')
    }
    if (this.dateInput) {
      const picker = flatpickr(this.dateInput, {
        enableTime: true,
        dateFormat: "j F H:i",
        appendTo: this.dateInput.parentElement,
        wrap: true,
        static: true,
      })
    }
  }
}

customElements.define('edit-task', EditTask)
