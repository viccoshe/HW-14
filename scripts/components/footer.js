import { create } from "./create.js";

class Footer {
    constructor() {
        this.footer = null;
    }

    init() {
        this.footer = create('footer', [
            ['class', 'footer'],
        ]);

        this.p = create('p', [], '© 2022 Copyright');
        this.footer.append(this.p);
        return this.footer;
    }
}

export default new Footer().init();