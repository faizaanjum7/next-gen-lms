"use client";

import React, { useState } from 'react';
import { Plus, GripVertical, Video, FileText, CheckCircle2, Save, Trash2, LayoutTemplate } from 'lucide-react';

interface Lesson {
    id: string;
    title: string;
    type: 'video' | 'reading' | 'quiz';
}

interface Module {
    id: string;
    title: string;
    lessons: Lesson[];
}

export default function CourseBuilderPage() {
    const [courseTitle, setCourseTitle] = useState('');
    const [courseDesc, setCourseDesc] = useState('');
    const [modules, setModules] = useState<Module[]>([]);
    
    // UI states
    const [isSaving, setIsSaving] = useState(false);
    const [saveSuccess, setSaveSuccess] = useState(false);

    const addModule = () => {
        const newModule: Module = {
            id: Math.random().toString(36).substr(2, 9),
            title: `Module ${modules.length + 1}: New Topic`,
            lessons: []
        };
        setModules([...modules, newModule]);
    };

    const removeModule = (id: string) => {
        setModules(modules.filter(m => m.id !== id));
    };

    const updateModuleTitle = (id: string, newTitle: string) => {
        setModules(modules.map(m => m.id === id ? { ...m, title: newTitle } : m));
    };

    const addLesson = (moduleId: string, type: 'video' | 'reading' | 'quiz') => {
        setModules(modules.map(m => {
            if (m.id === moduleId) {
                return {
                    ...m,
                    lessons: [...m.lessons, {
                        id: Math.random().toString(36).substr(2, 9),
                        title: `New ${type.charAt(0).toUpperCase() + type.slice(1)}`,
                        type
                    }]
                };
            }
            return m;
        }));
    };

    const updateLessonTitle = (moduleId: string, lessonId: string, newTitle: string) => {
        setModules(modules.map(m => {
            if (m.id === moduleId) {
                return {
                    ...m,
                    lessons: m.lessons.map(l => l.id === lessonId ? { ...l, title: newTitle } : l)
                };
            }
            return m;
        }));
    };

    const removeLesson = (moduleId: string, lessonId: string) => {
        setModules(modules.map(m => {
            if (m.id === moduleId) {
                return {
                    ...m,
                    lessons: m.lessons.filter(l => l.id !== lessonId)
                };
            }
            return m;
        }));
    };

    const handleSaveCourse = () => {
        setIsSaving(true);
        // Simulate API call
        setTimeout(() => {
            setIsSaving(false);
            setSaveSuccess(true);
            setTimeout(() => setSaveSuccess(false), 3000);
        }, 800);
    };

    const getIconForType = (type: string) => {
        switch (type) {
            case 'video': return <Video className="w-4 h-4 text-blue-500" />;
            case 'reading': return <FileText className="w-4 h-4 text-orange-500" />;
            case 'quiz': return <CheckCircle2 className="w-4 h-4 text-teal-500" />;
            default: return <FileText className="w-4 h-4 text-gray-400" />;
        }
    };

    return (
        <div className="p-6 md:p-8 max-w-[1200px] mx-auto min-h-screen">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Course Builder</h1>
                    <p className="text-gray-500 dark:text-gray-400">Design curriculum, upload assets, and publish your course.</p>
                </div>
                <button 
                    onClick={handleSaveCourse}
                    className="bg-[#2EC4B6] hover:bg-[#28b0a3] text-white px-6 py-2.5 rounded-xl font-bold flex items-center gap-2 transition-colors cursor-pointer"
                >
                    {isSaving ? (
                        <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    ) : (
                        <Save className="w-5 h-5" />
                    )}
                    {saveSuccess ? "Published!" : "Publish Course"}
                </button>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                {/* Main Editor */}
                <div className="xl:col-span-2 space-y-6">
                    {/* Basic Info */}
                    <div className="bg-white dark:bg-[#1e293b] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 transition-colors">
                        <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Basic Details</h2>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Course Title</label>
                                <input
                                    type="text"
                                    value={courseTitle}
                                    onChange={(e) => setCourseTitle(e.target.value)}
                                    placeholder="e.g. Advanced Machine Learning"
                                    className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#2EC4B6] transition-all"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Description</label>
                                <textarea
                                    value={courseDesc}
                                    onChange={(e) => setCourseDesc(e.target.value)}
                                    rows={4}
                                    placeholder="What will students learn in this course?"
                                    className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#2EC4B6] transition-all resize-none"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Curriculum */}
                    <div className="bg-white dark:bg-[#1e293b] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 transition-colors">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-lg font-bold text-gray-900 dark:text-white">Curriculum</h2>
                            <button 
                                onClick={addModule}
                                className="text-[#2EC4B6] hover:bg-[#2EC4B6]/10 px-4 py-2 rounded-lg font-semibold flex items-center gap-2 transition-colors cursor-pointer"
                            >
                                <Plus className="w-4 h-4" /> Add Module
                            </button>
                        </div>

                        {modules.length === 0 ? (
                            <div className="text-center py-12 border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-800/50">
                                <LayoutTemplate className="w-12 h-12 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
                                <h3 className="text-lg font-bold text-gray-700 dark:text-gray-300 mb-1">Curriculum is empty</h3>
                                <p className="text-gray-500 mb-4">Start organizing your course by adding a module.</p>
                                <button 
                                    onClick={addModule}
                                    className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white px-6 py-2 rounded-lg font-semibold transition-colors cursor-pointer"
                                >
                                    Add your first Module
                                </button>
                            </div>
                        ) : (
                            <div className="space-y-6">
                                {modules.map((module) => (
                                    <div key={module.id} className="bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                                        {/* Module Header */}
                                        <div className="p-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-gray-200 dark:border-gray-700">
                                            <div className="flex items-center gap-3 flex-1 w-full">
                                                <div className="cursor-move text-gray-400 hover:text-gray-600"><GripVertical className="w-5 h-5" /></div>
                                                <input
                                                    type="text"
                                                    value={module.title}
                                                    onChange={(e) => updateModuleTitle(module.id, e.target.value)}
                                                    className="flex-1 bg-transparent font-bold text-gray-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-[#2EC4B6] rounded px-2 py-1"
                                                />
                                            </div>
                                            <div className="flex items-center gap-2 w-full md:w-auto">
                                                <button onClick={() => addLesson(module.id, 'video')} className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 rounded cursor-pointer transition-colors" title="Add Video"><Video className="w-4 h-4" /></button>
                                                <button onClick={() => addLesson(module.id, 'reading')} className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 rounded cursor-pointer transition-colors" title="Add Reading"><FileText className="w-4 h-4" /></button>
                                                <button onClick={() => addLesson(module.id, 'quiz')} className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 rounded cursor-pointer transition-colors" title="Add Quiz"><CheckCircle2 className="w-4 h-4" /></button>
                                                <div className="w-px h-6 bg-gray-300 dark:bg-gray-600 mx-1"></div>
                                                <button onClick={() => removeModule(module.id)} className="p-2 hover:bg-red-100 hover:text-red-500 text-gray-400 rounded cursor-pointer transition-colors" title="Delete Module"><Trash2 className="w-4 h-4" /></button>
                                            </div>
                                        </div>
                                        
                                        {/* Lessons List */}
                                        <div className="p-4 space-y-2">
                                            {module.lessons.length === 0 ? (
                                                <p className="text-sm text-gray-500 italic text-center py-2">No content added yet.</p>
                                            ) : (
                                                module.lessons.map(lesson => (
                                                    <div key={lesson.id} className="flex items-center gap-3 bg-white dark:bg-[#1e293b] p-3 rounded-lg border border-gray-100 dark:border-gray-700 shadow-sm group transition-colors">
                                                        <div className="cursor-move text-gray-300 group-hover:text-gray-400 transition-colors"><GripVertical className="w-4 h-4" /></div>
                                                        <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded-md">
                                                            {getIconForType(lesson.type)}
                                                        </div>
                                                        <input
                                                            type="text"
                                                            value={lesson.title}
                                                            onChange={(e) => updateLessonTitle(module.id, lesson.id, e.target.value)}
                                                            className="flex-1 bg-transparent text-sm font-medium text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-1 focus:ring-[#2EC4B6] rounded px-2 py-1"
                                                        />
                                                        <button 
                                                            onClick={() => removeLesson(module.id, lesson.id)}
                                                            className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-red-500 p-1 cursor-pointer transition-all"
                                                        >
                                                            <Trash2 className="w-4 h-4" />
                                                        </button>
                                                    </div>
                                                ))
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Right Column: Settings Sidebar */}
                <div className="space-y-6">
                    <div className="bg-white dark:bg-[#1e293b] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 transition-colors">
                        <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Course Settings</h2>
                        
                        <div className="space-y-5">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Category</label>
                                <select className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#2EC4B6] transition-all">
                                    <option>Technology & Software</option>
                                    <option>Leadership & Management</option>
                                    <option>Marketing</option>
                                    <option>HR & Compliance</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Language</label>
                                <select className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#2EC4B6] transition-all">
                                    <option>English</option>
                                    <option>Spanish</option>
                                    <option>French</option>
                                    <option>Japanese</option>
                                </select>
                            </div>

                            <hr className="border-gray-100 dark:border-gray-800" />

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Cover Image</label>
                                <div className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-xl p-6 text-center hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer">
                                    <p className="text-sm text-[#2EC4B6] font-semibold mb-1">Click to upload</p>
                                    <p className="text-xs text-gray-500">SVG, PNG, JPG (max 2MB)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
