import { User } from '../models/User';

export class UserForm {
    constructor(
        public parent: Element,
        public model: User
    ) {
        this.bindModel();
    }

    bindModel(): void {
        this.model.on('change', () => {
            this.render();
        });
    }

    eventsMap(): { [key: string]: () => void } {
        return {
            'click:.set-age' : this.onsetAgeClick,
            'click:.change-name' : this.onChangeNameClick
        };
    }

    //Arrow function for lexical binding to prevent undefined
    onsetAgeClick = (): void => {
        this.model.setRandomAge();
    }

    onChangeNameClick = (): void => {
        const input = this.parent.querySelector('input');

        const name = input.value;
        if (name !== "") {
            this.model.set({ name })
        }
       
    }

    template(): string {
        return `
        <div>
            <h1>User Form</h1>
            <p>User name: ${this.model.get('name')}</p>
            <p>User age: ${this.model.get('age')}</p>
            <input type="text" required />
            <button class="change-name">Change name</button>
            <br />
            <br />
            <button class="set-age">Set random age</button>
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
        this.parent.innerHTML = '';
        const templateElement = document.createElement('template');
        templateElement.innerHTML = this.template();
        this.bindEvents(templateElement.content);
        this.parent.append(templateElement.content);
    }
}