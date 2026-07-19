// Array containing all church events
const churchEvents = [
    { name: "Fasting Prayer", date: "2026-01-05" },
    { name: "First Fundraising", date: "2026-04-05" },
    { name: "Resurrection Sunday & Holy Communion", date: "2026-04-05" },
    { name: "Second Fundraising", date: "2026-06-07" },
    { name: "Fasting Prayer", date: "2026-06-29" },
    { name: "All Night Prayer", date: "2026-07-03" },
    { name: "Revival Week", date: "2026-07-06" },
    { name: "Pastor's Birthday Celebration", date: "2026-07-12" },
    { name: "Women's Day & Holy Communion", date: "2026-08-09" },
    { name: "Birthday Nzhelele", date: "2026-08-30" },
    { name: "Third Fund Raising", date: "2026-09-06" },
    { name: "Heritage Sunday", date: "2026-09-27" },
    { name: "Fasting Prayer", date: "2026-09-28" },
    { name: "Pastor's Appreciation & Holy Communion", date: "2026-12-06" }
];

// Reference the current date
// REPLACE THIS:
// const today = new Date('2026-07-19');

// WITH THIS:
const today = new Date();
const list = document.getElementById('eventList');

// Loop through the array to create list items
churchEvents.forEach(event => {
    const li = document.createElement('li');
    const eventDate = new Date(event.date);

    // If the event date is before today, apply the 'passed' CSS class
    if (eventDate < today) {
        li.classList.add('passed');
    }

    // Set the display text
    li.innerHTML = `<span>${event.name}</span> <span>${event.date}</span>`;
    
    // Add the list item to the container
    list.appendChild(li);
});