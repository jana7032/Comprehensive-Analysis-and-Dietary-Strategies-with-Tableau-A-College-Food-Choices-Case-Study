import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { TrendingUp, TrendingDown, Calendar } from 'lucide-react';

const monthlyTrends = [
  { month: 'Jan', fruits: 65, vegetables: 72, junkFood: 45, waterIntake: 1.6 },
  { month: 'Feb', fruits: 68, vegetables: 75, junkFood: 42, waterIntake: 1.7 },
  { month: 'Mar', fruits: 72, vegetables: 78, junkFood: 38, waterIntake: 1.8 },
  { month: 'Apr', fruits: 75, vegetables: 82, junkFood: 35, waterIntake: 1.9 },
  { month: 'May', fruits: 78, vegetables: 85, junkFood: 32, waterIntake: 2.0 },
  { month: 'Jun', fruits: 82, vegetables: 88, junkFood: 28, waterIntake: 2.1 },
];

const weeklyData = [
  { week: 'Week 1', homeCooked: 68, fastFood: 32, healthy: 75 },
  { week: 'Week 2', homeCooked: 72, fastFood: 28, healthy: 78 },
  { week: 'Week 3', homeCooked: 75, fastFood: 25, healthy: 82 },
  { week: 'Week 4', homeCooked: 78, fastFood: 22, healthy: 85 },
];

const seasonalData = [
  { season: 'Spring', salads: 85, warmMeals: 65, freshFruits: 92, comfort: 45 },
  { season: 'Summer', salads: 92, warmMeals: 45, freshFruits: 98, comfort: 35 },
  { season: 'Fall', salads: 72, warmMeals: 88, freshFruits: 75, comfort: 72 },
  { season: 'Winter', salads: 58, warmMeals: 95, freshFruits: 68, comfort: 85 },
];

export const DietaryTrends: React.FC = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Dietary Trends Analysis</h1>
        <p className="text-gray-600">Track dietary pattern changes over time and identify seasonal variations</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-green-50 border border-green-200 p-6 rounded-xl">
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-semibold text-green-900">Fruit Consumption</h4>
            <TrendingUp className="w-5 h-5 text-green-600" />
          </div>
          <div className="text-2xl font-bold text-green-700">+26%</div>
          <p className="text-green-600 text-sm">Increase over 6 months</p>
        </div>
        
        <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl">
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-semibold text-blue-900">Water Intake</h4>
            <TrendingUp className="w-5 h-5 text-blue-600" />
          </div>
          <div className="text-2xl font-bold text-blue-700">+31%</div>
          <p className="text-blue-600 text-sm">Improvement trend</p>
        </div>
        
        <div className="bg-orange-50 border border-orange-200 p-6 rounded-xl">
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-semibold text-orange-900">Junk Food</h4>
            <TrendingDown className="w-5 h-5 text-orange-600" />
          </div>
          <div className="text-2xl font-bold text-orange-700">-38%</div>
          <p className="text-orange-600 text-sm">Significant reduction</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">6-Month Dietary Trends</h3>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={monthlyTrends}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="fruits" stroke="#10b981" strokeWidth={3} name="Fruits %" />
            <Line type="monotone" dataKey="vegetables" stroke="#3b82f6" strokeWidth={3} name="Vegetables %" />
            <Line type="monotone" dataKey="junkFood" stroke="#ef4444" strokeWidth={3} name="Junk Food %" />
            <Line type="monotone" dataKey="waterIntake" stroke="#06b6d4" strokeWidth={3} name="Water (L)" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Weekly Cooking Patterns</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={weeklyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="week" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="homeCooked" stackId="1" stroke="#10b981" fill="#10b981" />
              <Area type="monotone" dataKey="fastFood" stackId="1" stroke="#ef4444" fill="#ef4444" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Seasonal Food Preferences</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={seasonalData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="season" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="salads" stroke="#22c55e" strokeWidth={2} />
              <Line type="monotone" dataKey="warmMeals" stroke="#f97316" strokeWidth={2} />
              <Line type="monotone" dataKey="freshFruits" stroke="#3b82f6" strokeWidth={2} />
              <Line type="monotone" dataKey="comfort" stroke="#8b5cf6" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-gray-50 p-6 rounded-xl">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <Calendar className="w-5 h-5 mr-2" />
          Trend Analysis Summary
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Positive Trends</h4>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• Steady increase in fruit and vegetable consumption</li>
              <li>• Growing preference for home-cooked meals</li>
              <li>• Improved hydration habits across all demographics</li>
              <li>• Seasonal awareness in food choices</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Areas for Improvement</h4>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• Winter comfort food consumption still high</li>
              <li>• Weekend dietary patterns show regression</li>
              <li>• Need for consistent healthy snacking options</li>
              <li>• Meal timing regularity could be improved</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};