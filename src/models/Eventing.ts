//Type Alias
//function that takes no arguments and returns nothing 
type CallBackFunc = () => void;

export class Eventing {
//Store Events
events: { [key: string]: CallBackFunc[] } = {};
    
//Event Listener method -  register an event handler - so other parts of the app know when something changes
on(eventName: string, callback: CallBackFunc): void {
    const handlers =  this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
 }
 //Triggers an event to tell other parts of the app something has changed
 trigger(eventName: string): void {
     const handlers = this.events[eventName];

     if (!handlers || handlers.length === 0) {
         return;
     }
     handlers.forEach(callback => {
         callback();
     });
 }
}