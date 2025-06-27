class AlertBox extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' }); // Shadow DOM
  }

  connectedCallback() {
    const message = this.getAttribute('message') || 'This is an alert!';
    const type = this.getAttribute('type') || 'info'; // info, warning, error

    this.shadowRoot.innerHTML = `
      <style>
        .box {
          padding: 16px;
          border-radius: 6px;
          margin: 10px 0;
          color: white;
          font-family: sans-serif;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .info { background-color: #5c67f2; }
        .warning { background-color: #f4a261; }
        .error { background-color: #e76f51; }

        button {
          background: none;
          border: none;
          color: white;
          font-weight: bold;
          cursor: pointer;
          font-size: 16px;
        }
      </style>
      <div class="box ${type}">
        <span>${message}</span>
        <button>&times;</button>
      </div>
    `;

    this.shadowRoot.querySelector('button').addEventListener('click', () => {
      this.remove();
    });
  }
}

customElements.define('alert-box', AlertBox);
