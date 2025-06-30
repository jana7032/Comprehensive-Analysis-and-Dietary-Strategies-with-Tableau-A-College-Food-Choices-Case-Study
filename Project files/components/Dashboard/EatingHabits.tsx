import React from 'react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Clock, Utensils, Home, MapPin } from 'lucide-react';
import { StatsCard } from '../charts/StatsCard';

const mealTimingData = [
  { time: '6-8 AM', breakfast: 45 },
  { time: '8-10 AM', breakfast: 68 },
  { time: '10-12 PM', breakfast: 12 },
  { time: '12-2 PM', lunch: 78 },
  { time: '2-4 PM', lunch: 32 },
  { time: '6-8 PM', dinner: 92 },
  { time: '8-10 PM', dinner: 33 },
];

const cookingFrequencyData = [
  { category: 'Daily', count: 28 },
  { category: '4-6 times/week', count: 45 },
  { category: '2-3 times/week', count: 38 },
  { category: 'Rarely', count: 14 },
];

const eatingLocationData = [
  { name: 'Cafeteria', value: 45, color: '#3b82f6' },
  { name: 'Home/Dorm', value: 38, color: '#10b981' },
  { name: 'Restaurants', value: 17, color: '#f59e0b' },
];

const snackingData = [
  { type: 'Fruits', frequency: 65, healthy: true },
  { type: 'Nuts', frequency: 42, healthy: true },
  { type: 'Yogurt', frequency: 38, healthy: true },
  { type: 'Chips', frequency: 55, healthy: false },
  { type: 'Cookies', frequency: 48, healthy: false },
  { type: 'Candy', frequency: 32, healthy: false },
];

export const EatingHabits: React.FC = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Eating Habits Analysis</h1>
        <p className="text-gray-600">Understanding meal patterns, cooking behaviors, and eating preferences</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Meals Per Day"
          value="2.8"
          icon={Utensils}
          trend="average"
          trendUp={true}
        />
        <StatsCard
          title="Cook Weekly"
          value="4.2"
          icon={Home}
          trend="times/week"
          trendUp={true}
        />
        <StatsCard
          title="Eat Out Weekly"
          value="2.1"
          icon={MapPin}
          trend="times/week"
          trendUp={false}
        />
        <StatsCard
          title="Regular Schedule"
          value="68%"
          icon={Clock}
          trend="consistent"
          trendUp={true}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Cooking Frequency</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={cookingFrequencyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="category" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#059669" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Primary Eating Locations</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={eatingLocationData}
                cx="50%"
                cy="50%"
                outerRadius={100}
                dataKey="value"
                label={({ name, value }) => `${name}: ${value}%`}
              >
                {eatingLocationData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Snacking Patterns</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={snackingData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="type" />
            <YAxis />
            <Tooltip />
            <Bar 
              dataKey="frequency" 
              fill={(entry) => entry.healthy ? '#10b981' : '#ef4444'}
            />
          </BarChart>
        </ResponsiveContainer>
        <div className="mt-4 flex items-center justify-center space-x-8">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-green-500 rounded"></div>
            <span className="text-sm text-gray-600">Healthy Snacks</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-red-500 rounded"></div>
            <span className="text-sm text-gray-600">Unhealthy Snacks</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl">
          <h4 className="font-semibold text-blue-900 mb-3">⏰ Meal Timing Insights</h4>
          <ul className="space-y-2 text-blue-800 text-sm">
            <li>• Peak breakfast time: 8-10 AM (68% of students)</li>
            <li>• Most consistent meal: Dinner (92% eat 6-8 PM)</li>
            <li>• 23% skip breakfast regularly</li>
            <li>• Late dinner trend increasing (33% eat after 8 PM)</li>
          </ul>
        </div>
        
        <div className="bg-green-50 border border-green-200 p-6 rounded-xl">
          <h4 className="font-semibold text-green-900 mb-3">🍳 Cooking Patterns</h4>
          <ul className="space-y-2 text-green-800 text-sm">
            <li>• 73% cook 4+ times per week</li>
            <li>• Weekend cooking increases by 35%</li>
            <li>• Simple meals preferred (15-30 min prep)</li>
            <li>• Batch cooking growing in popularity</li>
          </ul>
        </div>
        
        <div className="bg-orange-50 border border-orange-200 p-6 rounded-xl">
          <h4 className="font-semibold text-orange-900 mb-3">🏫 Location Preferences</h4>
          <ul className="space-y-2 text-orange-800 text-sm">
            <li>• Cafeteria remains primary location (45%)</li>
            <li>• Home cooking increasing (38%)</li>
            <li>• Restaurant visits mostly social</li>
            <li>• Food trucks popular for quick meals</li>
          </ul>
        </div>
      </div>
    </div>
  );
};