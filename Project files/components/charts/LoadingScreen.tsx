import React from 'react';
import { BarChart3, Loader2 } from 'lucide-react';

export const LoadingScreen: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="text-center">
        <div className="flex items-center justify-center mb-6">
          <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
            <BarChart3 className="w-8 h-8 text-white" />
          </div>
        </div>
        
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Loading College Food Analysis
        </h1>
        <p className="text-gray-600 mb-8">
          Preparing your comprehensive dietary insights dashboard...
        </p>
        
        <div className="flex items-center justify-center space-x-2">
          <Loader2 className="w-5 h-5 animate-spin text-blue-600" />
          <span className="text-sm text-gray-500">Analyzing student data</span>
        </div>
        
        <div className="mt-8 bg-white rounded-lg p-6 shadow-sm max-w-md">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-blue-600">125</div>
              <div className="text-xs text-gray-500">Students</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-600">28</div>
              <div className="text-xs text-gray-500">Metrics</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-orange-600">12</div>
              <div className="text-xs text-gray-500">Charts</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};