class EditTask extends HTMLElement {
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
      <link rel="stylesheet" href="./css/edit-task.css" />
      <div class="board__tasks">
        <article class="card card--edit card--yellow card--repeat">
          <form class="card__form" method="get">
            <div class="card__inner">
              <div class="card__color-bar">
                <svg class="card__color-bar-wave" width="100%" height="10">
                  <use xlink:href="#wave"></use>
                </svg>
              </div>

              <div class="card__textarea-wrap">
                <label>
                  <textarea
                    class="card__text"
                    placeholder="Start typing your text here..."
                    name="text"
                  >Here is a card with filled data</textarea>
                </label>
              </div>

              <div class="card__settings">
                <div class="card__details">
                  <div class="card__dates">
                    <button class="card__date-deadline-toggle" type="button">
                      date: <span class="card__date-status">yes</span>
                    </button>

                    <fieldset class="card__date-deadline">
                      <label class="card__input-deadline-wrap">
                        <input
                          class="card__date"
                          type="text"
                          placeholder=""
                          name="date"
                          value="23 September 16:15"
                        />
                      </label>
                    </fieldset>

                    <button class="card__repeat-toggle" type="button">
                      repeat:<span class="card__repeat-status">yes</span>
                    </button>

                    <fieldset class="card__repeat-days">
                      <div class="card__repeat-days-inner">
                        <input
                          class="visually-hidden card__repeat-day-input"
                          type="checkbox"
                          id="repeat-mo-4"
                          name="repeat"
                          value="mo"
                        />
                        <label class="card__repeat-day" for="repeat-mo-4"
                          >mo</label
                        >
                        <input
                          class="visually-hidden card__repeat-day-input"
                          type="checkbox"
                          id="repeat-tu-4"
                          name="repeat"
                          value="tu"
                          checked
                        />
                        <label class="card__repeat-day" for="repeat-tu-4"
                          >tu</label
                        >
                        <input
                          class="visually-hidden card__repeat-day-input"
                          type="checkbox"
                          id="repeat-we-4"
                          name="repeat"
                          value="we"
                        />
                        <label class="card__repeat-day" for="repeat-we-4"
                          >we</label
                        >
                        <input
                          class="visually-hidden card__repeat-day-input"
                          type="checkbox"
                          id="repeat-th-4"
                          name="repeat"
                          value="th"
                        />
                        <label class="card__repeat-day" for="repeat-th-4"
                          >th</label
                        >
                        <input
                          class="visually-hidden card__repeat-day-input"
                          type="checkbox"
                          id="repeat-fr-4"
                          name="repeat"
                          value="fr"
                          checked
                        />
                        <label class="card__repeat-day" for="repeat-fr-4"
                          >fr</label
                        >
                        <input
                          class="visually-hidden card__repeat-day-input"
                          type="checkbox"
                          name="repeat"
                          value="sa"
                          id="repeat-sa-4"
                        />
                        <label class="card__repeat-day" for="repeat-sa-4"
                          >sa</label
                        >
                        <input
                          class="visually-hidden card__repeat-day-input"
                          type="checkbox"
                          id="repeat-su-4"
                          name="repeat"
                          value="su"
                          checked
                        />
                        <label class="card__repeat-day" for="repeat-su-4"
                          >su</label
                        >
                      </div>
                    </fieldset>
                  </div>
                </div>

                <div class="card__colors-inner">
                  <h3 class="card__colors-title">Color</h3>
                  <div class="card__colors-wrap">
                    <input
                      type="radio"
                      id="color-black-4"
                      class="card__color-input card__color-input--black visually-hidden"
                      name="color"
                      value="black"
                    />
                    <label
                      for="color-black-4"
                      class="card__color card__color--black"
                      >black</label
                    >
                    <input
                      type="radio"
                      id="color-yellow-4"
                      class="card__color-input card__color-input--yellow visually-hidden"
                      name="color"
                      value="yellow"
                      checked
                    />
                    <label
                      for="color-yellow-4"
                      class="card__color card__color--yellow"
                      >yellow</label
                    >
                    <input
                      type="radio"
                      id="color-blue-4"
                      class="card__color-input card__color-input--blue visually-hidden"
                      name="color"
                      value="blue"
                    />
                    <label
                      for="color-blue-4"
                      class="card__color card__color--blue"
                      >blue</label
                    >
                    <input
                      type="radio"
                      id="color-green-4"
                      class="card__color-input card__color-input--green visually-hidden"
                      name="color"
                      value="green"
                    />
                    <label
                      for="color-green-4"
                      class="card__color card__color--green"
                      >green</label
                    >
                    <input
                      type="radio"
                      id="color-pink-4"
                      class="card__color-input card__color-input--pink visually-hidden"
                      name="color"
                      value="pink"
                    />
                    <label
                      for="color-pink-4"
                      class="card__color card__color--pink"
                      >pink</label
                    >
                  </div>
                </div>
              </div>

              <div class="card__status-btns">
                <button class="card__save" type="submit">save</button>
                <button class="card__delete" type="button">delete</button>
              </div>
            </div>
          </form>
        </article>

        <article class="card card--black">
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
                  <use xlink:href="#wave"></use>
                </svg>
              </div>

              <div class="card__textarea-wrap">
                <p class="card__text">Example default task with default color.</p>
              </div>

              <div class="card__settings">
                <div class="card__details">
                  <div class="card__dates">
                    <div class="card__date-deadline">
                      <p class="card__input-deadline-wrap">
                        <span class="card__date">23 September</span>
                        <span class="card__time">16:15</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    `
  }

  render() {
    this.template.innerHTML = this.html
  }
}

customElements.define('edit-task', EditTask)