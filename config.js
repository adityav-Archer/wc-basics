import { html, render } from 'lit';
    import './dist/wc-basics.js';

    const title = 'Hello owc World!';
    render(
      html`
        <wc-basics .title=${title}>
          some light-dom
        </wc-basics>
      `,
      document.querySelector('#demo')
    );