import React, { useState, useEffect, useRef } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import axios from 'axios';

const Calendar = ({ isLoggedIn }) => {
  const [events, setEvents] = useState([]);
  const [editEvent, setEditEvent] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const calendarRef = useRef(null);

  useEffect(() => {
    fetchHolidays();
  }, []);

  const fetchHolidays = async () => {
    const API_KEY = 'ONjo8Gk1njn2cO5QWYNFfQjcGCrnrKim'; // Replace with your actual API key
    const years = [2022, 2023, 2024, 2025, 2026]; // Add more years as needed
    let holidayEvents = [];

    try {
      for (const year of years) {
        const API_URL = `https://calendarific.com/api/v2/holidays?api_key=${API_KEY}&country=IN&year=${year}`;
        const response = await axios.get(API_URL);
        if (response.data && response.data.response && response.data.response.holidays) {
          const yearHolidays = response.data.response.holidays.map(holiday => ({
            id: `${holiday.name}-${year}`,
            title: holiday.name,
            start: holiday.date.iso,
            end: holiday.date.iso,
            allDay: true,
            color: '#FF0000' // Red color for holidays
          }));
          holidayEvents = [...holidayEvents, ...yearHolidays];
        } else {
          console.error('Unexpected API response structure:', response.data);
        }
      }
      setEvents(holidayEvents);
    } catch (error) {
      console.error('Error fetching holidays:', error);
    }
  };

  const handleEventClick = (clickInfo) => {
    if (!isLoggedIn) {
      alert("You need to be logged in to edit holidays.");
      return;
    }

    const event = clickInfo.event;
    const startDate = formatDateForInput(new Date(event.start));
    const endDate = event.end ? formatDateForInput(new Date(event.end)) : startDate;

    setEditEvent({
      id: event.id,
      title: event.title,
      startStr: startDate,
      endStr: endDate,
    });
    setIsDialogOpen(true);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
    setEditEvent(null);
  };

  const handleSaveChanges = () => {
    if (editEvent) {
      const calendarApi = calendarRef.current.getApi();
      const event = calendarApi.getEventById(editEvent.id);

      if (event) {
        event.setStart(new Date(editEvent.startStr));
        event.setEnd(new Date(editEvent.endStr));
        event.setAllDay(true);
      }

      setEvents(prevEvents =>
        prevEvents.map(ev =>
          ev.id === editEvent.id
            ? {
                ...ev,
                start: new Date(editEvent.startStr),
                end: new Date(editEvent.endStr),
                allDay: true
              }
            : ev
        )
      );

      setIsDialogOpen(false);
      setEditEvent(null);
    }
  };

  const handleDateChange = (field, value) => {
    if (editEvent) {
      setEditEvent(prev => ({
        ...prev,
        [field]: value
      }));
    }
  };

  const formatDateForInput = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  return (
    <div className="h-screen p-2 sm:p-4 bg-white shadow-lg">
      <FullCalendar
        ref={calendarRef}
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events}
        eventClick={handleEventClick}
        headerToolbar={{
          left: 'prev,next',
          center: 'title',
          right: 'dayGridMonth,dayGridWeek,dayGridDay'
        }}
        height="auto"
        aspectRatio={1.35}
        contentHeight="auto"
        viewClassNames="text-xs sm:text-sm md:text-base"
        dayMaxEventRows={3}
        moreLinkClick="popover"
      />
      {isDialogOpen && isLoggedIn && (
        <div className="fixed z-[999] inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white p-4 sm:p-6 rounded-lg w-full max-w-md">
            <h2 className="text-lg sm:text-xl font-bold mb-4">Edit Holiday: {editEvent?.title}</h2>
            <div className="mb-4">
              <label htmlFor="start" className="block mb-1 text-sm sm:text-base">Start Date</label>
              <input
                id="start"
                type="date"
                value={editEvent?.startStr || ''}
                onChange={(e) => handleDateChange('startStr', e.target.value)}
                className="border p-2 w-full text-sm sm:text-base"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="end" className="block mb-1 text-sm sm:text-base">End Date</label>
              <input
                id="end"
                type="date"
                value={editEvent?.endStr || ''}
                onChange={(e) => handleDateChange('endStr', e.target.value)}
                className="border p-2 w-full text-sm sm:text-base"
              />
            </div>
            <div className="flex justify-end">
              <button
                onClick={handleDialogClose}
                className="bg-gray-200 text-gray-800 px-3 py-1 sm:px-4 sm:py-2 rounded mr-2 text-sm sm:text-base"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveChanges}
                className="bg-blue-500 text-white px-3 py-1 sm:px-4 sm:py-2 rounded text-sm sm:text-base"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Calendar;