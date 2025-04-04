import React from 'react';
import DatosPersonales from './tabs/DatosPersonales';
import Deudas from './tabs/Deudas';
import Bienes from './tabs/Bienes';
import Juicios from './tabs/Juicios';
import Contratos from './tabs/Contratos';

const TabsSection = ({ activeTab }) => {
  const renderTabContent = () => {
    switch (activeTab) {
      case 'datosPersonales':
        return <DatosPersonales />;
      case 'deudas':
        return <Deudas />;
      case 'bienes':
        return <Bienes />;
      case 'juicios':
        return <Juicios />;
      case 'contratos':
        return <Contratos />;
      default:
        return <DatosPersonales />;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden p-4">
      {renderTabContent()}
    </div>
  );
};

export default TabsSection;
