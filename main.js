// array of events to be rendered in #events
const events = [
    { title: 'Intro to Inkscape', description: 'Get an introduction to the wonderful world of vector graphic design host by inkscape community!', img: './mountain-art', alt: 'mountain art', when: '1/1/2021 5:00pm', where: 'Discord Meeting Voice channel' },
    { title: 'Example Event', description: 'Brief description of event to give people an idea on what they\'ll learn by coming.', img: './default', alt: 'default art', when: '1/1/2021 5:00pm', where: 'DiscordMeeting Voice channel' },
    { title: 'Example Event', description: 'Brief description of event to give people an idea on what they\'ll learn by coming.', img: './default', alt: 'default art', when: '1/1/2021 5:00pm', where: 'Discord Meeting Voice channel' } 
];

const projects = [
    { title: 'Example Project One', img: './exProject', description: 'Description of the project. Perhaps include who worked on it  and the technologies used to build this app.' },
    { title: 'Example Project Two', img: './exProject', description: 'Description of the project. Perhaps include who worked on it  and the technologies used to build this app.' }
];

$(document).ready(() => {  
    renderEvents(events);
});


const renderEvents = eventList => {  
    eventList.forEach(event => $('#events').append(renderEvent(event)));
}

// renders one elem from eventList from template
const renderEvent = event => {  
    console.log('Rendering an event.');

    return `
        <h4 class='left-side white-font'>${ event.title }</h4>

        <img class='right-side' src='${ event.img }' alt='${ event.alt }'>

        <p class='left-side'>${ event.description }</p>

        <div class='right-side'></div>

        <div class='left-side'>
            <h4 class='white-font'>When:</h4>
            <p class='white-font'>${ event.when }
        </div>

        <div class='right-side'>
            <h4 class='white-font'>Where:</h4>
            <p class='white-font'>${ event.where }</p>
        </div>
    `;
}