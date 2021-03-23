// Import Mosaic
import Mosaic, { html } from 'mosaic-framework';

// Create components
Mosaic({
    name: 'my-label',
    data: {
        text: ''
    },
    view: self => {
        return html`
            <h2>${ self.data.text }</h2>
            <p>This is a custom label component!</p>
            ${self.descendants}
        `;
    }
});
const app = Mosaic({
    name: 'my-app',
    element: 'root',
    data: {
        title: "Mosaic App"
    },
    sayHello: function() {
        console.log("Hello World!!");
        console.log("This component is ", this);
    },
    view: function() {
        return html`
            <h1>This is a ${this.data.title}!</h1>
            <p>Click below to print a message!</p>
            <button onclick="${this.sayHello}">Click Me!</button>

            <my-label text='Welcome to Mosaic!'>
                Awesome, right?
            </my-label>
        `;
    }
});

// Paint the Mosaic onto the page.
app.paint();