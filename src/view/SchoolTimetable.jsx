import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const initialPeriods = [
  { time: '9:30-10:20' },
  { time: '10:20-11:10' },
  { time: '11:10-12:00' },
  { time: '12:00-12:40', isLunch: true },
  { time: '12:40-1:30' },
  { time: '1:30-2:20' },
  { time: '2:20-3:10' },
  { time: '3:10-4:00' }
];

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const createEmptyTimetable = () => {
  return days.map(() => Array(initialPeriods.length).fill(''));
};

const subjectIcons = {
  'Eng': '📚', 'Mat': '📐', 'Che': '🧪', 'Phy': '🔬', 'Bio': '🌱', 'His': '🏛️', 
  'Geo': '🌍', 'Eco': '📊', 'LAB': '🔬', 'LIBRARY': '📖', 'SPORTS': '⚽', 'ART': '🎨'
};

const SchoolTimeTable = () => {
  const [currentClass, setCurrentClass] = useState(1);
  const [timetables, setTimetables] = useState(() => {
    const savedTimetables = localStorage.getItem('timetables');
    return savedTimetables ? JSON.parse(savedTimetables) : Array.from({ length: 12 }, () => createEmptyTimetable());
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTimeModalOpen, setIsTimeModalOpen] = useState(false);
  const [isReadOnly, setIsReadOnly] = useState(false);
  const [editingCell, setEditingCell] = useState(null);
  const [editingTimes, setEditingTimes] = useState([...initialPeriods]);
  const [customActivity, setCustomActivity] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');

  useEffect(() => {
    localStorage.setItem('timetables', JSON.stringify(timetables));
  }, [timetables]);

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const { source, destination } = result;
    const updatedTimetables = [...timetables];
    const currentTimetable = [...updatedTimetables[currentClass - 1]];
    const [sourceDay, sourcePeriod] = source.droppableId.split('-').map(Number);
    const [destDay, destPeriod] = destination.droppableId.split('-').map(Number);
    const [removed] = currentTimetable[sourceDay].splice(sourcePeriod, 1);
    currentTimetable[destDay].splice(destPeriod, 0, removed);
    updatedTimetables[currentClass - 1] = currentTimetable;
    setTimetables(updatedTimetables);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    setEditingCell(null);
    setCustomActivity('');
    setSelectedSubject('');
  };

  const openTimeModal = () => setIsTimeModalOpen(true);
  const closeTimeModal = () => {
    setIsTimeModalOpen(false);
    setEditingTimes([...initialPeriods]);
  };

  const handleCellClick = (day, period) => {
    if (initialPeriods[period].isLunch || isReadOnly) return;
    setEditingCell({ day, period });
    openModal();
  };

  const updateCell = (value) => {
    if (!editingCell) return;
    const updatedTimetables = [...timetables];
    updatedTimetables[currentClass - 1][editingCell.day][editingCell.period] = value;
    setTimetables(updatedTimetables);
    closeModal();
  };

  const handleTimeChange = (index, value) => {
    const updatedTimes = [...editingTimes];
    updatedTimes[index].time = value;
    setEditingTimes(updatedTimes);
  };

  const updateTimes = () => {
    initialPeriods.forEach((period, index) => {
      period.time = editingTimes[index].time;
    });
    closeTimeModal();
  };

  const handleAddSubject = () => {
    if (selectedSubject) {
      updateCell(`${subjectIcons[selectedSubject]} ${selectedSubject}`);
    }
  };

  const handleAddCustomActivity = () => {
    if (customActivity.trim() !== '') {
      updateCell(`📌 ${customActivity}`);
    }
  };

  const saveTimetable = () => {
    const updatedTimetables = [...timetables];
    localStorage.setItem('timetables', JSON.stringify(updatedTimetables));
    alert('Timetable saved successfully!');
  };

  const toggleReadOnly = () => {
    setIsReadOnly(!isReadOnly);
  };

  return (
    <div className="container mx-auto p-2 sm:p-4 bg-white rounded-lg shadow-lg relative">
      <div className="relative z-10">
        <h1 className="text-xl sm:text-2xl font-bold text-center mb-4 bg-gradient-to-r from-pink-500 via-yellow-500 to-blue-500 bg-clip-text text-transparent">
          SCHOOL TIMETABLE
        </h1>
        <div className="mb-2 flex flex-wrap justify-center items-center gap-2">
          <label htmlFor="class-select" className="font-semibold text-gray-700 mr-2">Select Class:</label>
          <select
            id="class-select"
            value={currentClass}
            onChange={(e) => setCurrentClass(Number(e.target.value))}
            className="appearance-none bg-white border border-gray-300 rounded-md py-1 px-2 pr-6 leading-tight focus:outline-none focus:border-blue-500"
          >
            {Array.from({ length: timetables.length }, (_, i) => (
              <option key={i} value={i + 1}>Class {i + 1}</option>
            ))}
          </select>
          <button 
            onClick={openTimeModal}
            className="bg-blue-500 text-white px-3 py-1 sm:px-4 sm:py-2 rounded text-sm sm:text-base hover:bg-blue-600"
          >
            Edit Time Slots
          </button>
          <button
            onClick={saveTimetable}
            className="bg-green-500 text-white px-3 py-1 sm:px-4 sm:py-2 rounded text-sm sm:text-base hover:bg-green-600"
          >
            Save Timetable
          </button>
          <button
            onClick={toggleReadOnly}
            className="bg-yellow-500 text-white px-3 py-1 sm:px-4 sm:py-2 rounded text-sm sm:text-base hover:bg-yellow-600"
          >
            {isReadOnly ? 'Edit Timetable' : 'Saved Timetable'}
          </button>
        </div>
       
        <DragDropContext onDragEnd={onDragEnd}>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse rounded-lg overflow-hidden">
              <thead>
                <tr>
                  <th className="border tracking-[0.1vw] p-1 sm:p-2 bg-slate-500 font-monserrat text-sm sm:text-xl text-center">Timing</th>
                  {days.map((day, index) => (
                    <th key={index} className={`border tracking-[0.1vw] p-1 sm:p-2 bg-slate-500 text-center font-monserrat text-sm sm:text-xl text-${['green', 'pink', 'blue', 'orange', 'red'][index]}-500`}>
                      {day}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {initialPeriods.map((period, periodIndex) => (
                  <tr key={periodIndex}>
                    <td className="border p-1 sm:p-2 font-semibold text-center">
                      <div className="text-xs sm:text-sm md:text-base lg:text-xl text-gray-600">{period.time}</div>
                    </td>
                    {period.isLunch ? (
                      <td colSpan={days.length} className="border p-1 sm:p-2 text-sm sm:text-xl text-center font-monserrat bg-orange-400">
                        LUNCH
                      </td>
                    ) : (
                      days.map((_, dayIndex) => (
                        <Droppable key={dayIndex} droppableId={`${dayIndex}-${periodIndex}`}>
                          {(provided) => (
                            <td 
                              ref={provided.innerRef} 
                              {...provided.droppableProps}
                              className="border p-1 sm:p-2 md:p-4 cursor-pointer hover:bg-gray-100 text-center"
                              onClick={() => handleCellClick(dayIndex, periodIndex)}
                            >
                              <Draggable draggableId={`${dayIndex}-${periodIndex}`} index={periodIndex}>
                                {(provided) => (
                                  <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    className="flex items-center justify-center text-xs sm:text-sm md:text-base"
                                  >
                                    {timetables[currentClass - 1][dayIndex][periodIndex]}
                                  </div>
                                )}
                              </Draggable>
                              {provided.placeholder}
                            </td>
                          )}
                        </Droppable>
                      ))
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </DragDropContext>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Edit Timetable</h2>
            {editingCell && (
              <div>
                <h3 className="mb-2">Editing: {days[editingCell.day]} - {initialPeriods[editingCell.period].time}</h3>
                <select 
                  onChange={(e) => setSelectedSubject(e.target.value)} 
                  value={selectedSubject}
                  className="block w-full p-2 mb-2 border border-gray-300 rounded"
                >
                  <option value="">Select Subject</option>
                  {Object.entries(subjectIcons).map(([subject, icon]) => (
                    <option key={subject} value={subject}>{icon} {subject}</option>
                  ))}
                </select>
                <button
                  onClick={handleAddSubject}
                  className="block w-full bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mb-2"
                >
                  Add Subject
                </button>
                <input
                  type="text"
                  placeholder="Add custom activity"
                  value={customActivity}
                  onChange={(e) => setCustomActivity(e.target.value)}
                  className="block w-full p-2 mb-2 border border-gray-300 rounded"
                />
                <button
                  onClick={handleAddCustomActivity}
                  className="block w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Add Custom Activity
                </button>
                <div className="flex justify-end mt-4">
                  <button onClick={closeModal} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      {isTimeModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Edit Time Slots</h2>
            <div className="grid grid-cols-1 gap-4">
              {editingTimes.map((period, index) => (
                <div key={index} className="flex items-center">
                  <label className="w-1/3 font-semibold text-sm sm:text-base">{`Period ${index + 1}`}</label>
                  <input 
                    type="text" 
                    value={period.time} 
                    onChange={(e) => handleTimeChange(index, e.target.value)} 
                    className="w-2/3 p-2 border border-gray-300 rounded text-sm sm:text-base"
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-end mt-4">
              <button onClick={updateTimes} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mr-2">
                Save
              </button>
              <button onClick={closeTimeModal} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="mt-4 grid justify-center items-center grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
        {Object.entries(subjectIcons).map(([subject, icon]) => (
          <div key={subject} className="text-xl sm:text-2xl flex items-center justify-center bg-gray-100 rounded-full w-10 h-10 sm:w-12 sm:h-12 shadow-md hover:shadow-lg transition-shadow duration-300">
            {icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SchoolTimeTable;