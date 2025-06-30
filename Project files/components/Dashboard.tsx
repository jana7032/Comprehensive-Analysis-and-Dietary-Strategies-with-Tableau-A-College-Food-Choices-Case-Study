import React from 'react';
import { OverviewDashboard } from './dashboards/OverviewDashboard';
import { NutritionalAnalysis } from './dashboards/NutritionalAnalysis';
import { DietaryTrends } from './dashboards/DietaryTrends';
import { EatingHabits } from './dashboards/EatingHabits';
import { HealthMetrics } from './dashboards/HealthMetrics';
import { Reports } from './dashboards/Reports';

interface DashboardProps {
  currentView: string;
}

export const Dashboard: React.FC<DashboardProps> = ({ currentView }) => {
  const renderView = () => {
    switch (currentView) {
      case 'overview':
        return <OverviewDashboard />;
      case 'nutritional':
        return <NutritionalAnalysis />;
      case 'trends':
        return <DietaryTrends />;
      case 'habits':
        return <EatingHabits />;
      case 'health':
        return <HealthMetrics />;
      case 'reports':
        return <Reports />;
      default:
        return <OverviewDashboard />;
    }
  };

  return (
    <div className="p-8 mt-16">
      {renderView()}
    </div>
  );
};