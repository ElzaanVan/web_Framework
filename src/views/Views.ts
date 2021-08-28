import { Model } from "../models/models";
// Turn View into a generic class
export abstract class Views <T extends Model<K>, K>{
    constructor(
        public parent: Element,
        public model: T
    ) {
        this.bindModel();
    }

    abstract eventsMap(): { [key: string]: () => void }
    abstract template(): string;

    bindModel(): void {
        this.model.on('change', () => {
            this.render();
        });
    }

    bindEvents(fragment: DocumentFragment): void {
        const eventsMap = this.eventsMap();

        for (let eventKey in eventsMap) {
            const [eventName, selector] = eventKey.split(':');

            fragment.querySelectorAll(selector).forEach(el => {
                el.addEventListener(eventName, eventsMap[eventKey]);
            });
        }
    }

    render(): void {
        this.parent.innerHTML = '';
        const templateElement = document.createElement('template');
        templateElement.innerHTML = this.template();
        this.bindEvents(templateElement.content);
        this.parent.append(templateElement.content);
    }
}