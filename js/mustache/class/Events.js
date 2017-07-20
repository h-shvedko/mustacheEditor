import {Constants} from "./Constants";

export class Events {

    constructor() {
        this.element = null;
        this.eventKeyup = null;
        this.eventClick = null;
        this.events = [];
    }

    get events() {
        return this._events;
    }

    set events(value) {
        this._events = value;
    }

    get eventClick() {
        return this._eventClick;
    }

    set eventClick(value) {
        this._eventClick = value;
    }

    get eventKeyup() {
        return this._event;
    }

    set eventKeyup(value) {
        this._event = value;
    }

    get element() {
        return this._element;
    }

    set element(value) {
        this._element = value;
    }

    /**
     * Events register method
     */
    registerEvents() {
        let events = Constants.EVENTS;
        if (this.element !== null) {
            for (let i = 0; i < events.length; i++) {
                switch (events[i]) {
                    case Constants.EVENT_CLICK:
                        this.attachEventsListener(this.element, Constants.EVENT_CLICK, (e) => {
                            this.onClick(e);
                        });
                        break;
                    case Constants.EVENT_FOCUS:
                        this.attachEventsListener(this.element, Constants.EVENT_FOCUS, (e) => {
                            this.onFocus(e);
                        });
                        break;
                    case Constants.EVENT_MOUSEOVER:
                        this.attachEventsListener(this.element, Constants.EVENT_MOUSEOVER, (e) => {
                            this.onMouseOver(e);
                        });
                        break;
                    case Constants.EVENT_KEYUP:
                        this.attachEventsListener(this.element, Constants.EVENT_KEYUP, (e) => {
                            this.onKeyup(e);
                        });
                        break;
                    default:
                        break;
                }
            }
        }
    }

    attachEventsListener(element, eventType, handler) {
        if (element.addEventListener) {
            element.addEventListener(eventType, handler, false);
        } else {
            element.attachEvent("on" + eventType, handler);
        }
    }

    /**
     *
     * @param event
     */
    onClick(event) {
        this.eventClick = event;
    }

    /**
     *
     * @param event
     */
    onFocus(event) {
    }

    /**
     *
     * @param event
     */
    onMouseOver(event) {
    }


    onKeyup(event) {
        this.eventKeyup = event;
    }

    generateHash(){
        let str = new Date().getTime();
        return str;
    }
}