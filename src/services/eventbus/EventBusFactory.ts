import { createEventBus }                       from 'ts-event-bus'
import { EnumEditorMode }                       from '../layoutServices/enums/LayoutEnums';
import { slot }                                 from 'ts-event-bus'
import { Slot }                                 from 'ts-event-bus'
import MySelectItem                             from '../../components/mySelect/MySelectItem';

const MyLayoutBusEvents = {
    notificationLayoutChanged: slot<{ layout: MySelectItem }>(),
    notificationEditorModeChanged: slot<{ mode: EnumEditorMode }>(),
}

export interface IMyLayoutBusEvents {
    notificationLayoutChanged: Slot<{ layout: MySelectItem }>
    notificationEditorModeChanged: Slot<{ mode: EnumEditorMode }>,
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
