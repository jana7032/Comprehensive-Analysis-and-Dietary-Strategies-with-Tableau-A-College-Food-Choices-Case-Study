import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { StatsCard } from '../charts/StatsCard';
import { Apple, Beef, Wheat, Droplets } from 'lucide-react';

const nutritionData = [
  { nutrient: 'Protein', current: 65, recommended: 80 },
  { nutrient: 'Carbs', current: 85, recommended: 90 },
  { nutrient: 'Fats', current: 45, recommended: 60 },
  { nutrient: 'Fiber', current: 38, recommended: 50 },
  { nutrient: 'Vitamins', current: 72, recommended: 85 },
];

const foodGroupData = [
  { group: 'Fruits', consumption: 78 },
  { group: 'Vegetables', consumption: 85 },
  { group: 'Grains', consumption: 92 },
  { group: 'Protein', consumption: 88 },
  { group: 'Dairy', consumption: 65 },
];

const radarData = [
  { subject: 'Breakfast Quality', A: 85, fullMark: 100 },
  { subject: 'Lunch Quality', A: 78, fullMark: 100 },
  { subject: 'Dinner Quality', A: 92, fullMark: 100 },
  { subject: 'Snack Quality', A: 65, fullMark: 100 },
  { subject: 'Hydration', A: 70, fullMark: 100 },
  { subject: 'Portion Control', A: 82, fullMark: 100 },
];

export const NutritionalAnalysis: React.FC = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Nutritional Analysis</h1>
        <p className="text-gray-600">Deep dive into nutritional intake patterns and deficiencies</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Daily Calories"
          value="2,150"
          icon={Apple}
          trend="avg kcal"
          trendUp={true}
        />
        <StatsCard
          title="Protein Intake"
          value="65g"
          icon={Beef}
          trend="vs 80g target"
          trendUp={false}
        />
        <StatsCard
          title="Fiber Intake"
          value="38g"
          icon={Wheat}
          trend="vs 50g target"
          trendUp={false}
        />
        <StatsCard
          title="Water Intake"
          value="1.8L"
          icon={Droplets}
          trend="vs 2.5L target"
          trendUp={false}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Nutrient Intake vs Recommendations</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={nutritionData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="nutrient" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="current" fill="#3b82f6" name="Current Intake" />
              <Bar dataKey="recommended" fill="#10b981" name="Recommended" opacity={0.7} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Food Group Consumption</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={foodGroupData} layout="horizontal">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="group" type="category" />
              <Tooltip />
              <Bar dataKey="consumption" fill="#059669" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Overall Nutritional Quality Assessment</h3>
        <ResponsiveContainer width="100%" height={400}>
          <RadarChart data={radarData}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis angle={90} domain={[0, 100]} />
            <Radar name="Quality Score" dataKey="A" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.3} />
          </RadarChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-red-50 border border-red-200 p-6 rounded-xl">
          <h4 className="font-semibold text-red-900 mb-3">⚠️ Areas of Concern</h4>
          <ul className="space-y-2 text-red-800 text-sm">
            <li>• Protein intake 18% below recommended levels</li>
            <li>• Fiber consumption needs improvement (24% below target)</li>
            <li>• Water intake significantly low (28% below recommended)</li>
            <li>• Snack quality scores are concerning (35% below optimal)</li>
          </ul>
        </div>
        
        <div className="bg-green-50 border border-green-200 p-6 rounded-xl">
          <h4 className="font-semibold text-green-900 mb-3">✅ Strong Areas</h4>
          <ul className="space-y-2 text-green-800 text-sm">
            <li>• Excellent dinner quality scores (92/100)</li>
            <li>• Good vegetable consumption (85% adherence)</li>
            <li>• Balanced carbohydrate intake (94% of target)</li>
            <li>• Strong portion control awareness (82/100)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};