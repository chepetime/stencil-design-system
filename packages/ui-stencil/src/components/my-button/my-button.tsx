import { Component, h } from '@stencil/core';

@Component({
  tag: 'my-button',
  styleUrl: 'my-button.css',
  shadow: false,
})
export class MyComponent {
  render() {
    return <button>Click me</button>;
  }
}
