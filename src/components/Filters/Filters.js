class CardsFilters extends HTMLElement {
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

  get tasksAll() {
    return this.getAttribute('tasks-all') || 0
  }

  get tasksOverdue() {
    return this.getAttribute('tasks-overdue') || 0
  }

  get tasksFavorites() {
    return this.getAttribute('tasks-favorites') || 0
  }

  get tasksArchive() {
    return this.getAttribute('tasks-archive') || 0
  }

  get tasksToday() {
    return this.getAttribute('tasks-today') || 0
  }

  get tasksRepeating() {
    return this.getAttribute('tasks-repeating') || 0
  }

  get html() {
    return `
      <link rel="stylesheet" href="./css/visually-hidden.css" />
      <link rel="stylesheet" href="./css/container.css" />
      <link rel="stylesheet" href="./css/filter.css" />
      <section class="main__filter filter container">
        <input
          type="radio"
          id="filter__all"
          class="filter__input visually-hidden"
          name="filter"
          checked
        />
        <label for="filter__all" class="filter__label">
          All <span class="filter__all-count">${this.tasksAll}</span></label
        >
        <input
          type="radio"
          id="filter__overdue"
          class="filter__input visually-hidden"
          name="filter"
          ${this.tasksOverdue > 0 ? '' : 'disabled'}
        />
        <label for="filter__overdue" class="filter__label"
          >Overdue <span class="filter__overdue-count">${this.tasksOverdue}</span></label
        >
        <input
          type="radio"
          id="filter__today"
          class="filter__input visually-hidden"
          name="filter"
          ${this.tasksToday > 0 ? '' : 'disabled'}
        />
        <label for="filter__today" class="filter__label"
          >Today <span class="filter__today-count">${this.tasksToday}</span></label
        >
        <input
          type="radio"
          id="filter__favorites"
          class="filter__input visually-hidden"
          name="filter"
          ${this.tasksFavorites > 0 ? '' : 'disabled'}
        />
        <label for="filter__favorites" class="filter__label"
          >Favorites <span class="filter__favorites-count">${this.tasksFavorites}</span></label
        >
        <input
          type="radio"
          id="filter__repeating"
          class="filter__input visually-hidden"
          name="filter"
          ${this.tasksRepeating > 0 ? '' : 'disabled'}
        />
        <label for="filter__repeating" class="filter__label"
          >Repeating <span class="filter__repeating-count">${this.tasksRepeating}</span></label
        >
        <input
          type="radio"
          id="filter__archive"
          class="filter__input visually-hidden"
          name="filter"
          ${this.tasksArchive > 0 ? '' : 'disabled'}
        />
        <label for="filter__archive" class="filter__label"
          >Archive <span class="filter__archive-count">${this.tasksArchive}</span></label
        >
      </section>
    `
  }

  render() {
    this.template.innerHTML = this.html
  }
}

customElements.define('cards-filters', CardsFilters)
