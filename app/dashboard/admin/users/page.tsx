"use client";

import React, { useState } from 'react';
import { Search, Filter, Plus, UserPlus, MoreVertical, Edit2, ShieldAlert, Ban, CheckCircle } from 'lucide-react';

type UserRole = 'Admin' | 'Instructor' | 'Employee';
type UserStatus = 'Active' | 'Inactive';

interface UserRow {
    id: string;
    name: string;
    email: string;
    department: string;
    role: UserRole;
    status: UserStatus;
    lastLogin: string;
}

const mockUsers: UserRow[] = [
    { id: '1', name: 'Sarah Connor', email: 's.connor@sky.net', department: 'Engineering', role: 'Employee', status: 'Active', lastLogin: '2h ago' },
    { id: '2', name: 'John Smith', email: 'john.smith@co.com', department: 'HR', role: 'Admin', status: 'Active', lastLogin: '10m ago' },
    { id: '3', name: 'Alan Turing', email: 'alan@bletchley.gov', department: 'Data Science', role: 'Instructor', status: 'Active', lastLogin: '1d ago' },
    { id: '4', name: 'Jane Doe', email: 'jane.d@co.com', department: 'Sales', role: 'Employee', status: 'Inactive', lastLogin: '1w ago' },
    { id: '5', name: 'Mike Johnson', email: 'mike.j@co.com', department: 'Marketing', role: 'Employee', status: 'Active', lastLogin: '5h ago' },
];

export default function AdminUsersPage() {
    const [users, setUsers] = useState<UserRow[]>(mockUsers);
    const [searchTerm, setSearchTerm] = useState('');

    const toggleStatus = (id: string) => {
        setUsers(users.map(u => 
            u.id === id ? { ...u, status: u.status === 'Active' ? 'Inactive' : 'Active' } : u
        ));
    };

    const changeRole = (id: string, newRole: UserRole) => {
        setUsers(users.map(u => u.id === id ? { ...u, role: newRole } : u));
    };

    const filteredUsers = users.filter(u => 
        u.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        u.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        u.department.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="p-6 md:p-8 max-w-[1400px] mx-auto min-h-screen">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">User Management</h1>
                    <p className="text-gray-500 dark:text-gray-400">Manage employee access, roles, and platform permissions.</p>
                </div>
                <div className="flex gap-3">
                    <button className="bg-white dark:bg-[#1e293b] text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 px-4 py-2.5 rounded-xl font-bold flex items-center gap-2 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer">
                        <Filter className="w-4 h-4" /> Filter
                    </button>
                    <button className="bg-[#1e88e5] hover:bg-[#1976d2] text-white px-4 py-2.5 rounded-xl font-bold flex items-center gap-2 transition-colors cursor-pointer">
                        <UserPlus className="w-5 h-5" /> Add User
                    </button>
                </div>
            </div>

            {/* Config & Search Bar */}
            <div className="bg-white dark:bg-[#1e293b] p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 flex items-center gap-4 mb-6 transition-colors">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search by name, email, or department..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full bg-gray-50 dark:bg-gray-800 border-none rounded-lg pl-10 pr-4 py-2.5 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#1e88e5] transition-all"
                    />
                </div>
            </div>

            {/* Users Table */}
            <div className="bg-white dark:bg-[#1e293b] rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden transition-colors">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-gray-50 dark:bg-gray-800/50 border-b border-gray-100 dark:border-gray-800 text-gray-500 dark:text-gray-400 text-xs uppercase tracking-wider font-bold">
                            <tr>
                                <th className="px-6 py-4">Employee Content</th>
                                <th className="px-6 py-4">Department</th>
                                <th className="px-6 py-4">Role</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4">Last Login</th>
                                <th className="px-6 py-4 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                            {filteredUsers.length === 0 ? (
                                <tr>
                                    <td colSpan={6} className="px-6 py-12 text-center text-gray-500">
                                        No users found matching "{searchTerm}"
                                    </td>
                                </tr>
                            ) : (
                                filteredUsers.map((user) => (
                                    <tr key={user.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#1e88e5] to-[#4fcebb] text-white flex items-center justify-center font-bold shadow-sm">
                                                    {user.name.charAt(0)}
                                                </div>
                                                <div>
                                                    <div className="font-bold text-gray-900 dark:text-white">{user.name}</div>
                                                    <div className="text-sm text-gray-500 dark:text-gray-400">{user.email}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 font-medium text-gray-700 dark:text-gray-300">
                                            {user.department}
                                        </td>
                                        <td className="px-6 py-4">
                                            <select 
                                                value={user.role}
                                                onChange={(e) => changeRole(user.id, e.target.value as UserRole)}
                                                className={`text-xs font-bold px-2.5 py-1.5 rounded-lg border-2 appearance-none cursor-pointer outline-none transition-colors
                                                    ${user.role === 'Admin' ? 'border-purple-200 bg-purple-50 text-purple-700 dark:bg-purple-500/10 dark:text-purple-400 dark:border-purple-500/20' : ''}
                                                    ${user.role === 'Instructor' ? 'border-blue-200 bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400 dark:border-blue-500/20' : ''}
                                                    ${user.role === 'Employee' ? 'border-gray-200 bg-gray-50 text-gray-700 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600' : ''}
                                                `}
                                            >
                                                <option value="Employee">Employee</option>
                                                <option value="Instructor">Instructor</option>
                                                <option value="Admin">Admin</option>
                                            </select>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-full border
                                                ${user.status === 'Active' ? 'bg-green-50 text-green-700 border-green-200 dark:bg-green-500/10 dark:text-green-400 dark:border-green-500/20' : 'bg-red-50 text-red-700 border-red-200 dark:bg-red-500/10 dark:text-red-400 dark:border-red-500/20'}
                                            `}>
                                                {user.status === 'Active' ? <CheckCircle className="w-3 h-3"/> : <Ban className="w-3 h-3"/>}
                                                {user.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-500 dark:text-gray-400">
                                            {user.lastLogin}
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center justify-center gap-2">
                                                <button 
                                                    onClick={() => toggleStatus(user.id)}
                                                    className="p-2 text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors cursor-pointer"
                                                    title={user.status === 'Active' ? "Deactivate User" : "Activate User"}
                                                >
                                                    {user.status === 'Active' ? <Ban className="w-4 h-4" /> : <CheckCircle className="w-4 h-4" />}
                                                </button>
                                                <button className="p-2 text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors cursor-pointer" title="Edit Permissions">
                                                    <ShieldAlert className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
