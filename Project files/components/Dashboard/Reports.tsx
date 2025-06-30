import React, { useState } from 'react';
import { FileText, Download, Calendar, BarChart3, Users, TrendingUp } from 'lucide-react';

const reportTypes = [
  {
    id: 'summary',
    title: 'Executive Summary Report',
    description: 'High-level overview of all dietary and health metrics',
    icon: FileText,
    lastGenerated: '2025-01-20',
    size: '2.4 MB'
  },
  {
    id: 'nutritional',
    title: 'Detailed Nutritional Analysis',
    description: 'Comprehensive breakdown of nutritional intake patterns',
    icon: BarChart3,
    lastGenerated: '2025-01-19',
    size: '3.1 MB'
  },
  {
    id: 'trends',
    title: 'Dietary Trends Report',
    description: 'Monthly and seasonal dietary pattern analysis',
    icon: TrendingUp,
    lastGenerated: '2025-01-18',
    size: '1.8 MB'
  },
  {
    id: 'demographics',
    title: 'Demographic Analysis',
    description: 'Food choices breakdown by student demographics',
    icon: Users,
    lastGenerated: '2025-01-17',
    size: '2.2 MB'
  }
];

export const Reports: React.FC = () => {
  const [selectedReport, setSelectedReport] = useState<string | null>(null);

  const handleGenerateReport = (reportId: string) => {
    setSelectedReport(reportId);
    // Simulate report generation
    setTimeout(() => {
      setSelectedReport(null);
      alert(`Report generated successfully! Download started.`);
    }, 2000);
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Reports & Documentation</h1>
        <p className="text-gray-600">Generate comprehensive reports and export data for presentations</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reportTypes.map((report) => {
          const Icon = report.icon;
          return (
            <div key={report.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{report.title}</h3>
                    <p className="text-sm text-gray-600">{report.description}</p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <div className="flex items-center space-x-4">
                  <span>Last generated: {report.lastGenerated}</span>
                  <span>Size: {report.size}</span>
                </div>
              </div>

              <div className="flex space-x-3">
                <button
                  onClick={() => handleGenerateReport(report.id)}
                  disabled={selectedReport === report.id}
                  className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {selectedReport === report.id ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      <span>Generating...</span>
                    </>
                  ) : (
                    <>
                      <Download className="w-4 h-4" />
                      <span>Generate Report</span>
                    </>
                  )}
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <Calendar className="w-4 h-4" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Documentation</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div>
              <h4 className="font-medium text-gray-900">Step-by-Step Development Guide</h4>
              <p className="text-sm text-gray-600">Complete project implementation procedure</p>
            </div>
            <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-800">
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </button>
          </div>
          
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div>
              <h4 className="font-medium text-gray-900">Technical Architecture Document</h4>
              <p className="text-sm text-gray-600">System design and data flow documentation</p>
            </div>
            <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-800">
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </button>
          </div>
          
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div>
              <h4 className="font-medium text-gray-900">Data Analysis Methodology</h4>
              <p className="text-sm text-gray-600">Statistical methods and analysis techniques used</p>
            </div>
            <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-800">
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl">
          <h4 className="font-semibold text-blue-900 mb-3">📊 Data Sources</h4>
          <ul className="space-y-2 text-blue-800 text-sm">
            <li>• Primary: College Food Choices Dataset (Kaggle)</li>
            <li>• Secondary: Student demographic data</li>
            <li>• Supplementary: Health and exercise metrics</li>
            <li>• Total records: 125 students, 28 variables</li>
          </ul>
        </div>
        
        <div className="bg-green-50 border border-green-200 p-6 rounded-xl">
          <h4 className="font-semibold text-green-900 mb-3">🔧 Tools Used</h4>
          <ul className="space-y-2 text-green-800 text-sm">
            <li>• Frontend: React + TypeScript</li>
            <li>• Visualization: Recharts library</li>
            <li>• Styling: Tailwind CSS</li>
            <li>• Data Processing: JavaScript/TypeScript</li>
          </ul>
        </div>
        
        <div className="bg-orange-50 border border-orange-200 p-6 rounded-xl">
          <h4 className="font-semibold text-orange-900 mb-3">📈 Key Metrics</h4>
          <ul className="space-y-2 text-orange-800 text-sm">
            <li>• 12 interactive visualizations</li>
            <li>• 6 dashboard sections</li>
            <li>• Real-time data filtering</li>
            <li>• Responsive design for all devices</li>
          </ul>
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">📝 How to Use This Dashboard</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-gray-900 mb-2">For Presentations</h4>
            <ol className="space-y-1 text-sm text-gray-700 list-decimal list-inside">
              <li>Start with the Overview Dashboard for high-level insights</li>
              <li>Navigate to specific analysis sections using the sidebar</li>
              <li>Use the interactive charts to demonstrate trends</li>
              <li>Generate reports for detailed documentation</li>
            </ol>
          </div>
          <div>
            <h4 className="font-medium text-gray-900 mb-2">For Academic Projects</h4>
            <ol className="space-y-1 text-sm text-gray-700 list-decimal list-inside">
              <li>Document methodology using the provided guides</li>
              <li>Export visualizations for academic papers</li>
              <li>Reference the technical architecture document</li>
              <li>Use the statistical insights for research conclusions</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};