export class App {
  constructor(root) {
    this.root = document.querySelector(root)
  }

  init() {
    this.render()
  }

  get html() {
    return `
      <page-header></page-header>
      <cards-filters></cards-filters>
      <section class="board container">
        <cards-sort></cards-sort>
        <cards-board></cards-board>
        <load-more></load-more>
      </section>
    `
  }

  render() {
    this.root.innerHTML = this.html
  }
}
