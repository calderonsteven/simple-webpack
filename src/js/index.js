// this is just and example
import Button from './components/Button';

const testRecapcha = function() {
    console.log('hello dude');
};

const buttonDOM = document.getElementById('test-button');
const config = {element: buttonDOM, clickfn: testRecapcha};
const b = new Button(config);
