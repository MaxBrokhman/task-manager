const STEP = 8

class CardsBoard extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({mode: 'open'})
    this.template = document.createElement('template')
    this._tasks = []
    this.loadMoreBtn = null
    this.board = null
    this.tasksLimit = STEP - 1
  }

  loadMoreBtnHandler() {
    const newLimit = this.tasksLimit + STEP
    this.tasksLimit = this.tasks.length <= this.tasksLimit 
      ? this.tasks.length
      : newLimit
    this.render()
  }

  set tasks(value) {
    this._tasks = value
    this.render()
  }

  get tasks() {
    return this._tasks
  }

  renderTasks() {
    return this.tasks
      .slice(0, this.tasksLimit)
      .map(this.renderTask)
      .join('')
  }

  renderTask({
    description,
    due_date,
    repeating_days,
    color,
    is_favorite,
    is_archive,
    id,
  }) {
    const days = Object.keys(repeating_days).filter((key) => repeating_days[key])
    return `
      <task-card
        task-description="${description} ${id}"
        due-date="${due_date ? due_date.toLocaleString() : ''}"
        repeating-days=${JSON.stringify(days)}
        task-color="${color}"
        is-favorite=${is_favorite ? '' : undefined}
        is-archive=${is_archive ? '' : undefined}
      >
      </task-card>
    `
  }

  get html() {
    return `
      <link rel="stylesheet" href="./css/container.css" />
      <link rel="stylesheet" href="./css/cards-board.css" />
      <div class="board__tasks">
        <edit-task></edit-task>
        ${this.renderTasks()}
      </div>
      ${this.tasksLimit >= this.tasks.length 
        ? ''
        : '<load-more></load-more>'
      }
    `
  }

  render() {
    console.log('render')
    this.shadowRoot.innerHTML = this.html
    this.board = this.shadowRoot.querySelector('.board__tasks')
    this.loadMoreBtn = this.shadowRoot.querySelector('load-more')
    if (this.loadMoreBtn) {
      this.loadMoreBtn.onclick = () => this.loadMoreBtnHandler()
    }
  }
}

customElements.define('cards-board', CardsBoard)
