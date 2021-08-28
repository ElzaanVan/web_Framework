import { User } from '../models/User';

export class UserForm {
    constructor(
        public parent: Element,
        public model: User
    ) {}

    eventsMap(): { [key: string]: () => void } {
        return {
            'click:button' : this.onButtonClick
        };
    }

    onButtonClick(): void {
        console.log("Clicked");
    }

    template(): string {
        return `
        <div>
        <h1>User Form</h1>
        <p>User name: ${this.model.get('name')}</p>
        <p>User age: ${this.model.get('age')}</p>
        <input />
        <button>Click</button>
        </div>
        `;
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
        const templateElement = document.createElement('template');
        templateElement.innerHTML = this.template();
        this.bindEvents(templateElement.content);
        this.parent.append(templateElement.content);
    }
}