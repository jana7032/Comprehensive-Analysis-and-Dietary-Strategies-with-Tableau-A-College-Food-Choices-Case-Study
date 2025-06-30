import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ScatterChart, Scatter, BarChart, Bar } from 'recharts';
import { Heart, Activity, Scale, Brain } from 'lucide-react';
import { StatsCard } from '../charts/StatsCard';

const healthTrendData = [
  { month: 'Jan', feeling: 6.2, energy: 5.8, stress: 6.5, weight: 68.5 },
  { month: 'Feb', feeling: 6.4, energy: 6.1, stress: 6.2, weight: 68.2 },
  { month: 'Mar', feeling: 6.6, energy: 6.3, stress: 5.9, weight: 67.8 },
  { month: 'Apr', feeling: 6.8, energy: 6.6, stress: 5.6, weight: 67.5 },
  { month: 'May', feeling: 7.0, energy: 6.8, stress: 5.3, weight: 67.2 },
  { month: 'Jun', feeling: 7.2, energy: 7.1, stress: 5.0, weight: 67.0 },
];

const bmiData = [
  { category: 'Underweight', count: 15, color: '#3b82f6' },
  { category: 'Normal', count: 78, color: '#10b981' },
  { category: 'Overweight', count: 25, color: '#f59e0b' },
  { category: 'Obese', count: 7, color: '#ef4444' },
];

const exerciseHealthData = [
  { exercise: 0, health: 5.2, energy: 4.8 },
  { exercise: 1, health: 5.8, energy: 5.4 },
  { exercise: 2, health: 6.4, energy: 6.1 },
  { exercise: 3, health: 7.0, energy: 6.8 },
  { exercise: 4, health: 7.5, energy: 7.3 },
  { exercise: 5, health: 8.1, energy: 7.9 },
  { exercise: 6, health: 8.4, energy: 8.2 },
  { exercise: 7, health: 8.6, energy: 8.5 },
];

export const HealthMetrics: React.FC = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Health Metrics Dashboard</h1>
        <p className="text-gray-600">Comprehensive health and wellness tracking for college students</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Health Feeling"
          value="7.2/10"
          icon={Heart}
          trend="+16%"
          trendUp={true}
        />
        <StatsCard
          title="Energy Level"
          value="7.1/10"
          icon={Activity}
          trend="+22%"
          trendUp={true}
        />
        <StatsCard
          title="Avg Weight"
          value="67.0 kg"
          icon={Scale}
          trend="-1.5 kg"
          trendUp={true}
        />
        <StatsCard
          title="Stress Level"
          value="5.0/10"
          icon={Brain}
          trend="-23%"
          trendUp={true}
        />
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Health Trends Over Time</h3>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={healthTrendData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="feeling" stroke="#10b981" strokeWidth={3} name="Health Feeling" />
            <Line type="monotone" dataKey="energy" stroke="#3b82f6" strokeWidth={3} name="Energy Level" />
            <Line type="monotone" dataKey="stress" stroke="#ef4444" strokeWidth={3} name="Stress Level" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">BMI Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={bmiData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="category" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill={(entry, index) => bmiData[index]?.color || '#3b82f6'} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Exercise vs Health Correlation</h3>
          <ResponsiveContainer width="100%" height={300}>
            <ScatterChart data={exerciseHealthData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="exercise" name="Exercise Days/Week" />
              <YAxis dataKey="health" name="Health Rating" />
              <Tooltip cursor={{ strokeDasharray: '3 3' }} />
              <Scatter dataKey="health" fill="#10b981" />
            </ScatterChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-green-50 border border-green-200 p-6 rounded-xl">
          <h4 className="font-semibold text-green-900 mb-3">💚 Health Improvements</h4>
          <ul className="space-y-2 text-green-800 text-sm">
            <li>• Overall health feeling up 16% over 6 months</li>
            <li>• Energy levels increased by 22%</li>
            <li>• Average weight decreased by 1.5kg</li>
            <li>• 78% of students in healthy BMI range</li>
          </ul>
        </div>
        
        <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl">
          <h4 className="font-semibold text-blue-900 mb-3">📊 Key Correlations</h4>
          <ul className="space-y-2 text-blue-800 text-sm">
            <li>• Strong correlation: Exercise ↔ Health (r=0.89)</li>
            <li>• Moderate correlation: Diet quality ↔ Energy</li>
            <li>• Stress decreases with better nutrition</li>
            <li>• Sleep quality improves with regular meals</li>
          </ul>
        </div>
        
        <div className="bg-orange-50 border border-orange-200 p-6 rounded-xl">
          <h4 className="font-semibold text-orange-900 mb-3">⚠️ Health Risks</h4>
          <ul className="space-y-2 text-orange-800 text-sm">
            <li>• 32 students still have elevated stress levels</li>
            <li>• 12% show signs of irregular eating patterns</li>
            <li>• Weight fluctuations in 15% of students</li>
            <li>• Need for better mental health support</li>
          </ul>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-xl border border-blue-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Health Recommendations</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Individual Recommendations</h4>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• Maintain current exercise levels (4+ days/week optimal)</li>
              <li>• Focus on stress management techniques</li>
              <li>• Regular health check-ins every 2 weeks</li>
              <li>• Personalized nutrition plans for underweight students</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Institutional Actions</h4>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• Expand mental health and counseling services</li>
              <li>• Introduce wellness workshops and programs</li>
              <li>• Improve campus fitness facility access</li>
              <li>• Create peer support networks for healthy living</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};