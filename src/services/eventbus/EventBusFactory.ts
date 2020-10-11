import { createEventBus }                       from 'ts-event-bus'
import { slot }                                 from 'ts-event-bus'
import { Slot }                                 from 'ts-event-bus'
import MySelectItem                             from '../../components/mySelect/MySelectItem';

const MyLayoutBusEvents = {
    notificationNewLayout: slot<{ layout: MySelectItem }>(),
}

export interface IMyLayoutBusEvents {
    notificationNewLayout: Slot<{ layout: MySelectItem }>
}

export default class EventBusFactory {

    private static eventBusInstance: IMyLayoutBusEvents | null = null;

    static get(): IMyLayoutBusEvents {

        if (EventBusFactory.eventBusInstance === null) {
            EventBusFactory.eventBusInstance = createEventBus({
                events: MyLayoutBusEvents,
                channels: []
            })
        }

        return EventBusFactory.eventBusInstance;
    }
}
