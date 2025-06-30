import React from 'react';
import { StatsCard } from '../charts/StatsCard';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { Users, Apple, Activity, TrendingUp } from 'lucide-react';

const genderData = [
  { name: 'Female', value: 68, color: '#3b82f6' },
  { name: 'Male', value: 57, color: '#10b981' },
];

const dietData = [
  { diet: 'Omnivore', count: 78 },
  { diet: 'Vegetarian', count: 32 },
  { diet: 'Vegan', count: 15 },
];

const exerciseData = [
  { day: 'Mon', frequency: 45 },
  { day: 'Tue', frequency: 52 },
  { day: 'Wed', frequency: 48 },
  { day: 'Thu', frequency: 61 },
  { day: 'Fri', frequency: 38 },
  { day: 'Sat', frequency: 72 },
  { day: 'Sun', frequency: 55 },
];

export const OverviewDashboard: React.FC = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Overview Dashboard</h1>
        <p className="text-gray-600">Comprehensive analysis of college student food choices and dietary patterns</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Students"
          value="125"
          icon={Users}
          trend="+5.2%"
          trendUp={true}
        />
        <StatsCard
          title="Avg Daily Fruits"
          value="2.3"
          icon={Apple}
          trend="portions"
          trendUp={true}
        />
        <StatsCard
          title="Exercise Weekly"
          value="3.8"
          icon={Activity}
          trend="days/week"
          trendUp={true}
        />
        <StatsCard
          title="Healthy Feeling"
          value="6.7/10"
          icon={TrendingUp}
          trend="+0.8"
          trendUp={true}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Gender Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={genderData}
                cx="50%"
                cy="50%"
                outerRadius={100}
                dataKey="value"
                label={({ name, value }) => `${name}: ${value}`}
              >
                {genderData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Diet Types</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={dietData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="diet" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Weekly Exercise Frequency</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={exerciseData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="frequency" stroke="#10b981" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
          <h4 className="font-semibold text-blue-900 mb-2">Key Insight 1</h4>
          <p className="text-blue-800 text-sm">68% of students report eating vegetables daily, showing positive dietary awareness.</p>
        </div>
        <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
          <h4 className="font-semibold text-green-900 mb-2">Key Insight 2</h4>
          <p className="text-green-800 text-sm">Students exercise an average of 3.8 days per week, exceeding recommended guidelines.</p>
        </div>
        <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl">
          <h4 className="font-semibold text-orange-900 mb-2">Key Insight 3</h4>
          <p className="text-orange-800 text-sm">62% of students cook at home 3+ times per week, indicating good food preparation habits.</p>
        </div>
      </div>
    </div>
  );
};