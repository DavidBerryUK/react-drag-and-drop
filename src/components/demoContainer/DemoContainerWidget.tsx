import './Style.css';
import { IMyLayoutBusEvents }                   from '../../services/eventbus/EventBusFactory';
import { useEffect }                            from 'react';
import { useState }                             from 'react';
import DraggableElement                         from '../../draggableElement/DraggableElement';
import EventBusFactory                          from '../../services/eventbus/EventBusFactory';
import React                                    from 'react';

const DemoContainerWidget: React.FC = () => {

    console.log("DemoContainerWidget - Render");

    const [layoutEventBus] = useState<IMyLayoutBusEvents>(EventBusFactory.get());

    useEffect(() => {
        const unsubscribeOnNotificationNewLayout = layoutEventBus.notificationNewLayout.on("", (data) => {
            console.log(`DemoContainerWidget - notified of new layout:${data.layout.name}`);
            
        });

        return function cleanup() {
            unsubscribeOnNotificationNewLayout();
        }

    }, [layoutEventBus]);

    return (
        <div className='demo-area'>
            <DraggableElement boxId={1} />
            <DraggableElement boxId={2} />
            <DraggableElement boxId={3} />
            <DraggableElement boxId={4} />
            <DraggableElement boxId={5} />
            <DraggableElement boxId={6} />
        </div>
    );
};

export default DemoContainerWidget;
