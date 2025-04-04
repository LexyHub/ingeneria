import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import TabsSection from './components/TabsSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('datosPersonales');
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [sidebarData, setSidebarData] = useState({
    tacticas: [
      { id: 1, text: 'Dilatación + Protección de embargo', color: 'orange' },
      { id: 2, text: 'Tercería (correcta 😇)', color: 'green' },
      { id: 3, text: 'Abandono', color: 'yellow' },
      { id: 4, text: 'Excepción de prescripción', color: 'blue' },
      { id: 5, text: 'Acción de prescipción', color: 'purple' },
      { id: 6, text: 'Monitoreo', color: 'pink' },
      { id: 7, text: 'Excepción de prescripción', color: 'blue' }
    ],
    descripcionCaso: 'Aqui va la descripción del caso...',
    objetivosCliente: 'Aqui va el objetivo del cliente...',
    notas: 'Aqui van las notas extras...'
  });

  // Función para actualizar datos del sidebar
  const updateSidebarData = (field, value) => {
    setSidebarData({
      ...sidebarData,
      [field]: value
    });
  };

  // Función para agregar una táctica
  const addTactica = (newTactica, color = 'blue') => {
    const newId = sidebarData.tacticas.length > 0 
      ? Math.max(...sidebarData.tacticas.map(tag => tag.id)) + 1 
      : 1;
    
    const newTag = {
      id: newId,
      text: newTactica,
      color: color
    };
    
    setSidebarData({
      ...sidebarData,
      tacticas: [...sidebarData.tacticas, newTag]
    });
  };

  // Función para eliminar una táctica
  const removeTactica = (id) => {
    setSidebarData({
      ...sidebarData,
      tacticas: sidebarData.tacticas.filter(tag => tag.id !== id)
    });
  };

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className="App min-h-screen bg-bgPlatform flex flex-col">
      <div className="tabs-container">
        <div className="tabs-left">
          <div className={`tab-item ${activeTab === 'datosPersonales' ? 'active' : ''}`} onClick={() => setActiveTab('datosPersonales')}>
            Datos Personales
          </div>
          <div className={`tab-item ${activeTab === 'deudas' ? 'active' : ''}`} onClick={() => setActiveTab('deudas')}>
            Deudas
          </div>
          <div className={`tab-item ${activeTab === 'bienes' ? 'active' : ''}`} onClick={() => setActiveTab('bienes')}>
            Bienes
          </div>
          <div className={`tab-item ${activeTab === 'juicios' ? 'active' : ''}`} onClick={() => setActiveTab('juicios')}>
            Juicios
          </div>
          <div className={`tab-item ${activeTab === 'contratos' ? 'active' : ''}`} onClick={() => setActiveTab('contratos')}>
            Contratos
          </div>
        </div>
        <div className="tabs-right">
          <button 
            onClick={toggleSidebar} 
            className={`sidebar-toggle ${isSidebarVisible ? 'active' : ''}`} 
            aria-label="Toggle sidebar"
          >
            {isSidebarVisible ? 'Ocultar panel' : 'Mostrar panel'}
          </button>
        </div>
      </div>
      
      <div className="flex flex-1 min-h-0">
        <div className="main-content flex-grow overflow-auto p-7">
          <TabsSection activeTab={activeTab} />
        </div>
        
        {isSidebarVisible && (
          <Sidebar 
            data={sidebarData} 
            updateDescription={(value) => updateSidebarData('descripcionCaso', value)}
            updateNotas={(value) => updateSidebarData('notas', value)}
            updateObjetivosCliente={(value) => updateSidebarData('objetivosCliente', value)}
            addTactica={addTactica}
            removeTactica={removeTactica}
          />
        )}
      </div>
      
      <Footer />
    </div>
  );
}

export default App;
