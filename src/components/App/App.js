import { data } from "../../mocks/data"

export class App {
  constructor(root) {
    this.root = document.querySelector(root)
    this.data = data
    this.board = null
  }

  init() {
    this.render()
    this.board = this.root.querySelector('cards-board')
    this.board.tasks = data
  }

  get html() {
    return `
      <page-header></page-header>
      <cards-filters
        tasks-all="${this.data.length}"
        tasks-overdue="${
          this.data.filter((task) => 
            task.due_date 
            && new Date(task.due_date).getTime() > new Date().getTime()
          ).length
        }"
        tasks-favorites="${this.data.filter((task) => task.is_favorite).length}"
        tasks-archive="${this.data.filter((task) => task.is_archive).length}"
        tasks-today="${
          this.data.filter((task) => 
            task.due_date 
            && new Date(this.due_date).toLocaleString() === new Date().toLocaleString()
          ).length
        }"
        tasks-repeating="${
          this.data.filter((task) => 
            Object.values(task.repeating_days).some(Boolean)
          ).length
        }"
      >
      </cards-filters>
      <section class="board container">
        <cards-sort></cards-sort>
        <cards-board></cards-board>
      </section>
    `
  }

  render() {
    this.root.innerHTML = this.html
  }
}
