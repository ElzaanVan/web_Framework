import { User, UserData } from '../models/User';
import { Views } from './Views';

export class UserForm extends Views<User, UserData> {
   
    eventsMap(): { [key: string]: () => void } {
        return {
            'click:.set-age' : this.onsetAgeClick,
            'click:.change-name' : this.onChangeNameClick,
            'click:.save-user' : this.onSaveUserClick
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

    onSaveUserClick = (): void => {
        this.model.save();
    }

    template(): string {
        return `
        <div>
            <input type="text" placeholder="${this.model.get('name')}" required />
            <button class="change-name">Change name</button>
            <br />
            <br />
            <button class="set-age">Set random age</button>
            <button class="save-user">Save</button>
        </div>
        `;
    }
}