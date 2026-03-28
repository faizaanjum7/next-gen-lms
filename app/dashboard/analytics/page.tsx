"use client";

import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell,
  AreaChart, Area,
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis 
} from 'recharts';
import { Users, TrendingUp, Award, Clock } from 'lucide-react';

const completionData = [
  { name: 'Completed', value: 75 },
  { name: 'In Progress', value: 15 },
  { name: 'Not Started', value: 10 },
];
const PIE_COLORS = ['#2EC4B6', '#FF9F1C', '#E5E7EB'];

const skillData = [
  { subject: 'Leadership', score: 80, fullMark: 100 },
  { subject: 'Tech Skills', score: 90, fullMark: 100 },
  { subject: 'Communication', score: 85, fullMark: 100 },
  { subject: 'Problem Solving', score: 95, fullMark: 100 },
  { subject: 'Agile', score: 70, fullMark: 100 },
  { subject: 'Data Analysis', score: 65, fullMark: 100 },
];

const deptData = [
  { name: 'Eng', completed: 85, target: 90 },
  { name: 'Sales', completed: 65, target: 80 },
  { name: 'Mktg', completed: 90, target: 85 },
  { name: 'HR', completed: 75, target: 80 },
  { name: 'Support', completed: 80, target: 85 },
];

const engagementData = [
  { month: 'Jan', activeUsers: 400, hoursLog: 2400 },
  { month: 'Feb', activeUsers: 450, hoursLog: 2600 },
  { month: 'Mar', activeUsers: 510, hoursLog: 2900 },
  { month: 'Apr', activeUsers: 480, hoursLog: 2750 },
  { month: 'May', activeUsers: 590, hoursLog: 3200 },
  { month: 'Jun', activeUsers: 650, hoursLog: 3800 },
];

const statCards = [
  { title: "Total Employees", value: "2,405", trend: "+12% vs last month", icon: Users, color: "text-[#2EC4B6]", bgColor: "bg-[#2EC4B6]/10" },
  { title: "Avg Completion", value: "78%", trend: "+5% vs last month", icon: Award, color: "text-[#FF9F1C]", bgColor: "bg-[#FF9F1C]/10" },
  { title: "Learning Hours", value: "14.5k", trend: "+22% vs last month", icon: Clock, color: "text-[#8e52f5]", bgColor: "bg-[#8e52f5]/10" },
  { title: "Engagement Score", value: "9.2/10", trend: "+2% vs last month", icon: TrendingUp, color: "text-[#ff8eef]", bgColor: "bg-[#ff8eef]/10" }
];

export default function AnalyticsDashboard() {
  return (
    <div className="p-6 md:p-8 max-w-[1400px] mx-auto min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Corporate HR Analytics</h1>
        <p className="text-gray-500 dark:text-gray-400">Track and analyze workforce learning and development metrics.</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {statCards.map((stat, idx) => (
          <div key={idx} className="bg-white dark:bg-[#1e293b] rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-800 transition-colors">
            <div className="flex justify-between items-start mb-4">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${stat.bgColor}`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
            </div>
            <div>
              <div className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-1">{stat.title}</div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{stat.value}</div>
              <div className="text-xs font-semibold text-green-500 bg-green-50 dark:bg-green-500/10 inline-block px-2 py-1 rounded-md">
                {stat.trend}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Learning Engagement Chart */}
        <div className="bg-white dark:bg-[#1e293b] rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-800 transition-colors flex flex-col">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Learning Engagement</h2>
          <div className="flex-1 w-full min-h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={engagementData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2EC4B6" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#2EC4B6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} style={{ fontSize: '12px', fill: '#9CA3AF' }} />
                <YAxis axisLine={false} tickLine={false} style={{ fontSize: '12px', fill: '#9CA3AF' }} />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Area type="monotone" dataKey="activeUsers" stroke="#2EC4B6" strokeWidth={3} fillOpacity={1} fill="url(#colorUsers)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Employee Completion Rate */}
        <div className="bg-white dark:bg-[#1e293b] rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-800 transition-colors flex flex-col">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Course Completion Rates</h2>
          <div className="flex flex-1 flex-col items-center justify-center min-h-[300px] relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={completionData}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={110}
                  paddingAngle={5}
                  dataKey="value"
                  stroke="none"
                >
                  {completionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  itemStyle={{ fontWeight: 'bold' }}
                />
              </PieChart>
            </ResponsiveContainer>
            {/* Center Text */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
              <div className="text-sm font-semibold text-gray-500 dark:text-gray-400">Overall</div>
              <div className="text-4xl font-extrabold text-[#2EC4B6]">75%</div>
            </div>
            
            {/* Custom Legend */}
            <div className="flex gap-4 mt-2">
              {completionData.map((item, i) => (
                 <div key={item.name} className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full" style={{ backgroundColor: PIE_COLORS[i] }}></span>
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-300">{item.name}</span>
                 </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Department Training Stats */}
        <div className="bg-white dark:bg-[#1e293b] rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-800 transition-colors">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Department Performance</h2>
          <div className="w-full min-h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={deptData}
                margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} style={{ fontSize: '12px', fill: '#9CA3AF' }} />
                <YAxis axisLine={false} tickLine={false} style={{ fontSize: '12px', fill: '#9CA3AF' }} />
                <Tooltip 
                  cursor={{fill: 'transparent'}}
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Legend iconType="circle" wrapperStyle={{ paddingTop: '20px' }}/>
                <Bar dataKey="completed" name="Completed Rate" fill="#FF9F1C" radius={[4, 4, 0, 0]} barSize={20} />
                <Bar dataKey="target" name="Target Rate" fill="#F3F4F6" radius={[4, 4, 0, 0]} barSize={20} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Skill Development Radar */}
        <div className="bg-white dark:bg-[#1e293b] rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-800 transition-colors">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Skill Development Map</h2>
          <div className="w-full min-h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="70%" data={skillData}>
                <PolarGrid stroke="#E5E7EB" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#6B7280', fontSize: 13, fontWeight: 500 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                <Radar name="Company Average" dataKey="score" stroke="#8e52f5" strokeWidth={2} fill="#8e52f5" fillOpacity={0.4} />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                 />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
