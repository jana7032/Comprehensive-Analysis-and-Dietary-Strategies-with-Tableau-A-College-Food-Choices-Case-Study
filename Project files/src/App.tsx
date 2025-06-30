import React, { useState, useEffect } from 'react';
import { Dashboard } from './components/Dashboard';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { DataProvider } from './context/DataContext';
import { LoadingScreen } from './components/LoadingScreen';

function App() {
  const [currentView, setCurrentView] = useState('overview');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial data loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <DataProvider>
      <div className="min-h-screen bg-gray-50">
        <Header 
          sidebarOpen={sidebarOpen} 
          setSidebarOpen={setSidebarOpen} 
        />
        
        <div className="flex">
          <Sidebar 
            currentView={currentView}
            setCurrentView={setCurrentView}
            isOpen={sidebarOpen}
          />
          
          <main className={`flex-1 transition-all duration-300 ${
            sidebarOpen ? 'ml-64' : 'ml-0'
          }`}>
            <Dashboard currentView={currentView} />
          </main>
        </div>
      </div>
    </DataProvider>
  );
}

export default App;