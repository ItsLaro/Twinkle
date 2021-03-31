import React from "react";
import Carousel, { consts} from 'react-elastic-carousel';

function Upcoming() {

    const items = [
        {id: 1, title: 'item #1'},
        {id: 2, title: 'item #2'},
        {id: 3, title: 'item #3'},
        {id: 4, title: 'item #4'},
        {id: 5, title: 'item #5'},
        {id: 1, title: 'item #1'},
        {id: 2, title: 'item #2'},
        {id: 3, title: 'item #3'},
        {id: 4, title: 'item #4'},
        {id: 5, title: 'item #5'},
        {id: 1, title: 'item #1'},
        {id: 2, title: 'item #2'},
        {id: 3, title: 'item #3'},
        {id: 4, title: 'item #4'},
        {id: 5, title: 'item #5'}
    ];

    const breakPoints = [
        { width: 1, itemsToShow: 1},
        { width: 850, itemsToShow: 2, itemsToScroll: 2},
        { width: 1150, itemsToShow: 3, itemsToScroll: 1 },
        { width: 1450, itemsToShow: 4}, //pagination: true
        { width: 1750, itemsToShow: 5, itemPadding: [32, 48]}
    ]
    
    return (
        <div>
            <h1> Upcoming Events </h1>
            <Carousel  itemPadding={[16, 32]} breakPoints={breakPoints} >
                {items.map(item => 
                    <div key={item.id}>
                        <img src={"https://picsum.photos/seed/picsum/500"}/>
                    </div>
                )}
            </Carousel>
        </div>
    )
}

export default Upcoming;