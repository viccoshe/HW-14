import header from './header.js';
import main from './main.js';
import { create } from './create.js';
import nav from './nav.js';
import footer from './footer.js';

class App{
    constructor(){
        this.app = null;
        this.body = document.querySelector('body');
    }

    render(...elems) {
        this.app.append(header, nav, main, footer);
    }

    init() {

        this.app = create('div', [
            ['class', 'app']
        ]);
        this.html = create('html', [
            ['lang', 'en']
        ]);
        this.link = create('link', [
            ['rel', 'stylesheet'], ['href', './style/style.css']
        ]);
        this.title = create('title', [], 'SPA');
        this.metaViewPort = create('meta', [
            ['name', 'viewport'], ['content', 'width=device-width, initial-scale=1.0']
        ]);
        this.metaCompat = create('meta', [
            ['http-equiv', 'X-UA-Compatible'], ['content', 'IE=edge']
        ]);
        this.metaUtf8 = create('meta', [
            ['charset', 'UTF-8']
        ]);

        let head = document.querySelector('head');
        head.append(this.metaViewPort, this.metaCompat, this.metaUtf8, this.link, this.title)
        this.body.prepend(this.app);

        this.render(header, nav, main, footer)
    }
}

export default new App().init();