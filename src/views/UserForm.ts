import { User } from '../models/User';
import { Views } from './Views';

export class UserForm extends Views {
   
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
        if (name === "") {
            alert("Please enter name");
        }
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
}