import { newSpecPage } from '@stencil/core/testing';
import { MyComponent } from './my-button';

describe('my-button', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [MyComponent],
      html: '<my-button></my-button>',
    });
    expect(root).toEqualHtml(`
      <my-button>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </my-button>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [MyComponent],
      html: `<my-button first="Stencil" last="'Don't call me a framework' JS"></my-button>`,
    });
    expect(root).toEqualHtml(`
      <my-button first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </my-button>
    `);
  });
});
