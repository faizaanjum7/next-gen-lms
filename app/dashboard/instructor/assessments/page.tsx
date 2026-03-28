"use client";

import React, { useState } from 'react';
import { Plus, GripVertical, CheckCircle2, Save, Trash2, HelpCircle } from 'lucide-react';

interface Choice {
    id: string;
    text: string;
    isCorrect: boolean;
}

interface Question {
    id: string;
    text: string;
    choices: Choice[];
}

export default function AssessmentBuilderPage() {
    const [title, setTitle] = useState('');
    const [passingScore, setPassingScore] = useState(80);
    const [questions, setQuestions] = useState<Question[]>([]);
    
    // UI states
    const [isSaving, setIsSaving] = useState(false);
    const [saveSuccess, setSaveSuccess] = useState(false);

    const addQuestion = () => {
        const newQuestion: Question = {
            id: Math.random().toString(36).substr(2, 9),
            text: `Question ${questions.length + 1}`,
            choices: [
                { id: Math.random().toString(36).substr(2, 9), text: 'Option A', isCorrect: true },
                { id: Math.random().toString(36).substr(2, 9), text: 'Option B', isCorrect: false }
            ]
        };
        setQuestions([...questions, newQuestion]);
    };

    const removeQuestion = (qId: string) => {
        setQuestions(questions.filter(q => q.id !== qId));
    };

    const updateQuestionText = (qId: string, text: string) => {
        setQuestions(questions.map(q => q.id === qId ? { ...q, text } : q));
    };

    const addChoice = (qId: string) => {
        setQuestions(questions.map(q => {
            if (q.id === qId) {
                return {
                    ...q,
                    choices: [...q.choices, {
                        id: Math.random().toString(36).substr(2, 9),
                        text: `Option ${String.fromCharCode(65 + q.choices.length)}`,
                        isCorrect: false
                    }]
                };
            }
            return q;
        }));
    };

    const updateChoiceText = (qId: string, cId: string, text: string) => {
        setQuestions(questions.map(q => {
            if (q.id === qId) {
                return {
                    ...q,
                    choices: q.choices.map(c => c.id === cId ? { ...c, text } : c)
                };
            }
            return q;
        }));
    };

    const removeChoice = (qId: string, cId: string) => {
        setQuestions(questions.map(q => {
            if (q.id === qId) {
                return {
                    ...q,
                    choices: q.choices.filter(c => c.id !== cId)
                };
            }
            return q;
        }));
    };

    const markCorrectChoice = (qId: string, correctCId: string) => {
        setQuestions(questions.map(q => {
            if (q.id === qId) {
                return {
                    ...q,
                    choices: q.choices.map(c => ({
                        ...c,
                        isCorrect: c.id === correctCId
                    }))
                };
            }
            return q;
        }));
    };

    const handleSave = () => {
        setIsSaving(true);
        setTimeout(() => {
            setIsSaving(false);
            setSaveSuccess(true);
            setTimeout(() => setSaveSuccess(false), 3000);
        }, 800);
    };

    return (
        <div className="p-6 md:p-8 max-w-[1000px] mx-auto min-h-screen">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Assessment Builder</h1>
                    <p className="text-gray-500 dark:text-gray-400">Create tests, quizzes, and exams for your courses.</p>
                </div>
                <button 
                    onClick={handleSave}
                    className="bg-[#3ebcb0] hover:bg-[#349e94] text-white px-6 py-2.5 rounded-xl font-bold flex items-center gap-2 transition-colors cursor-pointer"
                >
                    {isSaving ? (
                        <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    ) : (
                        <Save className="w-5 h-5" />
                    )}
                    {saveSuccess ? "Published Tracker" : "Publish Assessment"}
                </button>
            </div>

            <div className="bg-white dark:bg-[#1e293b] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 transition-colors mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Assessment Title</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="e.g. Midterm Final Exam"
                            className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#3ebcb0] transition-all"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Passing Score (%)</label>
                        <input
                            type="number"
                            min="0"
                            max="100"
                            value={passingScore}
                            onChange={(e) => setPassingScore(Number(e.target.value))}
                            className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#3ebcb0] transition-all"
                        />
                    </div>
                </div>
            </div>

            <div className="space-y-6">
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white">Questions</h2>
                    <button 
                        onClick={addQuestion}
                        className="text-[#3ebcb0] hover:bg-[#3ebcb0]/10 px-4 py-2 rounded-lg font-semibold flex items-center gap-2 transition-colors cursor-pointer"
                    >
                        <Plus className="w-5 h-5" /> Add Question
                    </button>
                </div>

                {questions.length === 0 ? (
                    <div className="text-center py-12 border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-800/50">
                        <HelpCircle className="w-12 h-12 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
                        <h3 className="text-lg font-bold text-gray-700 dark:text-gray-300 mb-1">No Questions Added</h3>
                        <p className="text-gray-500 mb-4">Start by adding your first multiple choice question.</p>
                        <button 
                            onClick={addQuestion}
                            className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white px-6 py-2 rounded-lg font-semibold transition-colors cursor-pointer"
                        >
                            Add Question
                        </button>
                    </div>
                ) : (
                    questions.map((q, qIndex) => (
                        <div key={q.id} className="bg-white dark:bg-[#1e293b] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 transition-colors relative group">
                            <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button onClick={() => removeQuestion(q.id)} className="text-gray-400 hover:text-red-500 p-2"><Trash2 className="w-5 h-5"/></button>
                            </div>
                            
                            <div className="flex items-start gap-4 mb-6">
                                <div className="mt-2 text-gray-400"><GripVertical className="w-5 h-5" /></div>
                                <div className="flex-1">
                                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Question {qIndex + 1}</label>
                                    <input
                                        type="text"
                                        value={q.text}
                                        onChange={(e) => updateQuestionText(q.id, e.target.value)}
                                        className="w-full bg-transparent border-b-2 border-gray-200 dark:border-gray-700 focus:border-[#3ebcb0] text-xl font-bold text-gray-900 dark:text-white pb-2 focus:outline-none transition-colors"
                                    />
                                </div>
                            </div>

                            <div className="pl-9 space-y-3">
                                {q.choices.map((choice) => (
                                    <div key={choice.id} className={`flex items-center gap-3 p-3 rounded-xl border-2 transition-colors ${choice.isCorrect ? 'border-[#3ebcb0] bg-[#3ebcb0]/5' : 'border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-[#0f172a]'}`}>
                                        <button 
                                            onClick={() => markCorrectChoice(q.id, choice.id)}
                                            className={`w-6 h-6 rounded-full flex items-center justify-center border-2 transition-colors ${choice.isCorrect ? 'bg-[#3ebcb0] border-[#3ebcb0]' : 'border-gray-300 dark:border-gray-600'}`}
                                        >
                                            {choice.isCorrect && <CheckCircle2 className="w-4 h-4 text-white" />}
                                        </button>
                                        <input
                                            type="text"
                                            value={choice.text}
                                            onChange={(e) => updateChoiceText(q.id, choice.id, e.target.value)}
                                            className="flex-1 bg-transparent text-gray-700 dark:text-gray-300 font-medium focus:outline-none"
                                        />
                                        <button onClick={() => removeChoice(q.id, choice.id)} className="text-gray-400 hover:text-red-500 p-1"><Trash2 className="w-4 h-4"/></button>
                                    </div>
                                ))}

                                <button 
                                    onClick={() => addChoice(q.id)}
                                    className="text-sm font-semibold text-gray-500 hover:text-[#3ebcb0] mt-4 flex items-center gap-1 transition-colors"
                                >
                                    <Plus className="w-4 h-4" /> Add Option
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
