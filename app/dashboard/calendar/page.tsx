"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Plus, X, Calendar as CalendarIcon, Clock, Type } from "lucide-react";
import { cn } from "@/lib/utils";

const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

interface Event {
  id: number;
  title: string;
  date: number;
  type: string;
}

const initialEvents: Event[] = [
  { id: 1, title: "UI Design Sync", date: 15, type: "meeting" },
  { id: 2, title: "ER Diagram Submission", date: 2, type: "deadline" },
  { id: 3, title: "Course: Next.js Mastery", date: 22, type: "course" },
];

export default function CalendarPage() {
  const [currentDate, setCurrentDate] = useState(new Date(2026, 1, 1)); // Feb 2026
  const [events, setEvents] = useState<Event[]>(initialEvents);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newEvent, setNewEvent] = useState({ title: "", date: 1, type: "meeting" });

  const daysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const startOfMonth = (month: number, year: number) => {
    return new Date(year, month, 1).getDay();
  };

  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();
  const monthName = currentDate.toLocaleString('default', { month: 'long' });

  const prevMonth = () => setCurrentDate(new Date(year, month - 1, 1));
  const nextMonth = () => setCurrentDate(new Date(year, month + 1, 1));

  const totalDays = daysInMonth(month, year);
  const startDay = startOfMonth(month, year);
  
  const calendarDays: (number | null)[] = [];
  for (let i = 0; i < startDay; i++) {
    calendarDays.push(null);
  }
  for (let i = 1; i <= totalDays; i++) {
    calendarDays.push(i);
  }

  const handleAddEvent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newEvent.title.trim()) return;
    
    const id = events.length > 0 ? Math.max(...events.map(ev => ev.id)) + 1 : 1;
    setEvents([...events, { ...newEvent, id }]);
    setIsModalOpen(false);
    setNewEvent({ title: "", date: 1, type: "meeting" });
  };

  return (
    <div className="p-6 md:p-8 w-full max-w-[1400px] flex flex-col gap-6 relative">
      {/* Calendar Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white dark:bg-[#1e293b] p-6 rounded-2xl border border-gray-100 dark:border-gray-800 transition-colors shadow-sm">
        <div className="flex items-center gap-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white transition-colors">
            {monthName} {year}
          </h2>
          <div className="flex items-center gap-1.5 ml-2">
            <button 
              onClick={prevMonth}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={nextMonth}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <button 
          onClick={() => setIsModalOpen(true)}
          className="flex items-center justify-center gap-2 bg-[#2EC4B6] hover:bg-[#25a59a] text-white px-5 py-2.5 rounded-xl font-semibold shadow-sm shadow-[#2EC4B6]/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
        >
          <Plus className="w-5 h-5" />
          Add Event
        </button>
      </div>

      {/* Calendar Grid Container */}
      <div className="bg-white dark:bg-[#1e293b] rounded-2xl border border-gray-100 dark:border-gray-800 overflow-hidden transition-colors shadow-sm">
        {/* Days of Week Header */}
        <div className="grid grid-cols-7 border-b border-gray-100 dark:border-gray-800">
          {daysOfWeek.map((day) => (
            <div key={day} className="py-4 text-center text-xs font-bold text-gray-400 dark:text-gray-500 tracking-wider">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Days Grid */}
        <div className="grid grid-cols-7">
          {calendarDays.map((day, idx) => {
            const dayEvents = events.filter(e => e.date === day);
            const isToday = day === new Date().getDate() && month === new Date().getMonth();
            
            return (
              <div 
                key={idx} 
                className={cn(
                  "min-h-[120px] md:min-h-[160px] p-2 border-r border-b border-gray-50 dark:border-gray-800/50 last:border-r-0 transition-colors hover:bg-gray-50/50 dark:hover:bg-white/[0.02]",
                  !day && "bg-gray-50/30 dark:bg-gray-900/10"
                )}
              >
                {day && (
                  <div className="flex flex-col h-full">
                    <span className={cn(
                      "inline-flex items-center justify-center w-8 h-8 text-sm font-bold mb-2 transition-colors",
                      isToday ? "bg-[#2EC4B6] text-white rounded-lg" : "text-gray-900 dark:text-gray-400"
                    )}>
                      {day}
                    </span>
                    
                    <div className="flex flex-col gap-1.5 overflow-y-auto max-h-[100px] md:max-h-[120px] scrollbar-hide">
                      {dayEvents.map(event => (
                        <div 
                          key={event.id}
                          className={cn(
                            "text-[10px] md:text-xs px-2 py-1 rounded-md font-medium truncate shrink-0",
                            event.type === 'meeting' && "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-800/50",
                            event.type === 'deadline' && "bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 border border-orange-100 dark:border-orange-800/50",
                            event.type === 'course' && "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-800/50"
                          )}
                        >
                          {event.title}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
          {/* Fill remaining boxes if needed */}
          {Array.from({ length: Math.ceil(calendarDays.length / 7) * 7 - calendarDays.length }).map((_, i) => (
             <div key={`empty-${i}`} className="min-h-[120px] md:min-h-[160px] border-r border-b border-gray-50 dark:border-gray-800/50 last:border-r-0 bg-gray-50/30 dark:bg-gray-900/10" />
          ))}
        </div>
      </div>

      {/* Stats/Legend */}
      <div className="flex flex-wrap gap-4 mt-2">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-blue-500" />
          <span className="text-sm text-gray-500 dark:text-gray-400">Meetings</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-orange-500" />
          <span className="text-sm text-gray-500 dark:text-gray-400">Deadlines</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-emerald-500" />
          <span className="text-sm text-gray-500 dark:text-gray-400">Courses</span>
        </div>
      </div>

      {/* Add Event Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/40 backdrop-blur-sm" 
            onClick={() => setIsModalOpen(false)}
          />
          <div className="relative w-full max-w-md bg-white dark:bg-[#1e293b] rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-800 overflow-hidden animate-in fade-in zoom-in duration-200">
            <div className="flex items-center justify-between p-6 border-b border-gray-50 dark:border-gray-800">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Add New Event</h3>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 dark:text-gray-400 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddEvent} className="p-6 flex flex-col gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-2">
                  <Type className="w-4 h-4 text-[#2EC4B6]" />
                  Event Title
                </label>
                <input 
                  autoFocus
                  required
                  type="text"
                  placeholder="What's happening?"
                  value={newEvent.title}
                  onChange={e => setNewEvent({...newEvent, title: e.target.value})}
                  className="w-full bg-gray-50 dark:bg-[#0f172a] border border-gray-200 dark:border-gray-700 rounded-xl py-3 px-4 text-gray-900 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2EC4B6] transition-all"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-2">
                    <CalendarIcon className="w-4 h-4 text-[#2EC4B6]" />
                    Date
                  </label>
                  <select 
                    value={newEvent.date}
                    onChange={e => setNewEvent({...newEvent, date: parseInt(e.target.value)})}
                    className="w-full bg-gray-50 dark:bg-[#0f172a] border border-gray-200 dark:border-gray-700 rounded-xl py-3 px-4 text-gray-900 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2EC4B6] transition-all appearance-none"
                  >
                    {Array.from({ length: totalDays }, (_, i) => i + 1).map(day => (
                      <option key={day} value={day}>{day}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#2EC4B6]" />
                    Type
                  </label>
                  <select 
                    value={newEvent.type}
                    onChange={e => setNewEvent({...newEvent, type: e.target.value})}
                    className="w-full bg-gray-50 dark:bg-[#0f172a] border border-gray-200 dark:border-gray-700 rounded-xl py-3 px-4 text-gray-900 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2EC4B6] transition-all appearance-none"
                  >
                    <option value="meeting">Meeting</option>
                    <option value="deadline">Deadline</option>
                    <option value="course">Course</option>
                  </select>
                </div>
              </div>

              <button 
                type="submit"
                className="w-full bg-[#2EC4B6] hover:bg-[#25a59a] text-white py-3.5 rounded-xl font-bold shadow-lg shadow-[#2EC4B6]/20 transition-all hover:scale-[1.02] active:scale-[0.98] mt-2"
              >
                Create Event
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
