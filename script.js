gapi.load('client:auth2', initClient);

function initClient() {
    gapi.client.init({
        apiKey: 'AIzaSyBR4XhDRo9YJovzOhHEcj4pj8GR6DlD__w', // If using API key
      //   clientId: 'YOUR_CLIENT_ID', // If using OAuth
        discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"],
        scope: 'https://www.googleapis.com/auth/calendar.readonly',
    }).then(function () {
        // API is ready
        listUpcomingEvents();
    });
}

function listUpcomingEvents() {
   gapi.client.calendar.events.list({
       'calendarId': 'a7cd29eeb60b19365dd0220dbf8f0b8795c5147fc91217b1dc93afcbe2369d05@group.calendar.google.com', // You may need to change this to the specific calendar ID
       'timeMin': (new Date()).toISOString(),
       'showDeleted': false,
       'singleEvents': true,
       'maxResults': 10,
       'orderBy': 'startTime',
   }).then(function(response) {
       const events = response.result.items;
       displayEvents(events);
   });
}

function displayEvents(events) {
   const eventsContainer = document.getElementById('calendarEvents');

   events.forEach(event => {
       const eventElement = document.createElement('div');
       eventElement.textContent = `<strong>${event.summary}</strong><br>${event.start.dateTime}`;
       eventsContainer.appendChild(eventElement);
   });
}

window.onload = function() {
   gapi.load('client:auth2', initClient);
};