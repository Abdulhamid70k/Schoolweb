import React, { useState, useEffect } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

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

const ReadOnlySchoolTimeTable = () => {
  const [currentClass, setCurrentClass] = useState(1);
  const [timetables, setTimetables] = useState(() => {
    const savedTimetables = localStorage.getItem('timetables');
    return savedTimetables ? JSON.parse(savedTimetables) : Array.from({ length: 12 }, () => createEmptyTimetable());
  });

  const loadImage = (src) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = src;
      img.onload = () => resolve(img);
      img.onerror = (err) => reject(err);
    });
  };

  const downloadPDF = () => {
    const input = document.getElementById('timetable');
    html2canvas(input).then(async (canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();

      // Add margins and center the timetable
      const margin = 20;
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pageWidth - 2 * margin;
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      const posX = margin;
      const posY = margin + 50; // Adjusted to accommodate the header

      // Add school name, logo, and class information
      pdf.setFontSize(18);
      pdf.text('School Name', pageWidth / 2, margin, { align: 'center' });
      pdf.setFontSize(14);
      pdf.text(`Class: ${currentClass}`, pageWidth / 2, margin + 10, { align: 'center' });

      try {
        const logo = await loadImage('path/to/logo.png'); // replace with your logo path
        pdf.addImage(logo, 'PNG', margin, margin - 10, 30, 30); // Adjust as necessary
      } catch (err) {
        console.error('Error loading logo image', err);
      }

      // Add the image of the timetable
      pdf.addImage(imgData, 'PNG', posX, posY, pdfWidth, pdfHeight);

      pdf.save(`timetable_class_${currentClass}.pdf`);
    });
  };

  return (
    <div className="container mx-auto p-2 sm:p-4 bg-white rounded-lg shadow-lg relative">
      <div className="relative z-10">
        <h1 className="text-xl sm:text-2xl font-bold text-center mb-4 bg-gradient-to-r from-pink-500 via-yellow-500 to-blue-500 bg-clip-text text-transparent">
          SCHOOL TIMETABLE
        </h1>
        <div className="mb-2 flex flex-wrap justify-center items-center gap-2">
          <label htmlFor="class-select" className="font-semibold text-gray-700 text-sm sm:text-base">Select Class:</label>
          <select
            id="class-select"
            value={currentClass}
            onChange={(e) => setCurrentClass(Number(e.target.value))}
            className="appearance-none bg-white border border-gray-300 rounded-md py-1 px-2 pr-6 leading-tight focus:outline-none focus:border-blue-500 text-sm sm:text-base"
          >
            {Array.from({ length: timetables.length }, (_, i) => (
              <option key={i} value={i + 1}>Class {i + 1}</option>
            ))}
          </select>
          <button
            onClick={downloadPDF}
            className="bg-blue-500 text-white px-3 py-1 sm:px-4 sm:py-2 rounded text-sm sm:text-base hover:bg-blue-600"
          >
            Download PDF
          </button>
        </div>

        <div className="overflow-x-auto" id="timetable">
          <table className="w-full border-collapse rounded-lg overflow-hidden">
            <thead>
              <tr>
                <th className="border tracking-[0.1vw] p-1 sm:p-2 bg-slate-500 font-monserrat text-xs sm:text-sm md:text-base lg:text-xl text-center">Timing</th>
                {days.map((day, index) => (
                  <th key={index} className={`border tracking-[0.1vw] p-1 sm:p-2 bg-slate-500 text-center font-monserrat text-xs sm:text-sm md:text-base lg:text-xl text-${['green', 'pink', 'blue', 'orange', 'red'][index]}-500`}>
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
                    <td colSpan={days.length} className="border p-1 sm:p-2 text-xs sm:text-sm md:text-base lg:text-xl text-center font-monserrat bg-orange-400">
                      LUNCH
                    </td>
                  ) : (
                    days.map((_, dayIndex) => (
                      <td key={dayIndex} className="border p-1 sm:p-2 md:p-4 text-center">
                        <div className="flex items-center justify-center text-xs sm:text-sm md:text-base">
                          {timetables[currentClass - 1][dayIndex][periodIndex]}
                        </div>
                      </td>
                    ))
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ReadOnlySchoolTimeTable;