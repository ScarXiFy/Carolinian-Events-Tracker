import React, { useEffect, useState } from 'react';
import { fetchEvents } from '../services/eventService'; // Your API call function

const UpcomingEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const loadEvents = async () => {
      const data = await fetchEvents();
      setEvents(data);
    };
    loadEvents();
  }, []);

  return (
    <section id="upcoming" className="p-8 bg-gray-100">
      <h2 className="text-3xl font-semibold text-center mb-6">Upcoming Events</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map(event => (
          <div key={event._id} className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-bold">{event.title}</h3>
            <p>{event.date}</p>
            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg">View Details</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UpcomingEvents;
