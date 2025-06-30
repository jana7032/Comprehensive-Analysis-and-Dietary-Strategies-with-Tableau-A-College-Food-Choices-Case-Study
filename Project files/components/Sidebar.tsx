import React from 'react';
import { 
  BarChart3, 
  PieChart, 
  TrendingUp, 
  Activity, 
  Target,
  FileText,
  Settings,
  Download
} from 'lucide-react';

interface SidebarProps {
  currentView: string;
  setCurrentView: (view: string) => void;
  isOpen: boolean;
}

const menuItems = [
  { id: 'overview', label: 'Overview Dashboard', icon: BarChart3 },
  { id: 'nutritional', label: 'Nutritional Analysis', icon: PieChart },
  { id: 'trends', label: 'Dietary Trends', icon: TrendingUp },
  { id: 'habits', label: 'Eating Habits', icon: Activity },
  { id: 'health', label: 'Health Metrics', icon: Target },
  { id: 'reports', label: 'Reports', icon: FileText },
];

export const Sidebar: React.FC<SidebarProps> = ({ currentView, setCurrentView, isOpen }) => {
  return (
    <aside className={`fixed left-0 top-16 h-[calc(100vh-4rem)] bg-white shadow-lg transition-transform duration-300 z-20 ${
      isOpen ? 'translate-x-0' : '-translate-x-full'
    } w-64`}>
      <div className="p-6">
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Analytics Menu</h2>
          <p className="text-sm text-gray-600">Navigate through different analysis views</p>
        </div>

        <nav className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setCurrentView(item.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                  currentView === item.id
                    ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-700'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <button className="w-full flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
            <Download className="w-5 h-5" />
            <span className="font-medium">Export Data</span>
          </button>
          <button className="w-full flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
            <Settings className="w-5 h-5" />
            <span className="font-medium">Settings</span>
          </button>
        </div>
      </div>
    </aside>
  );
};