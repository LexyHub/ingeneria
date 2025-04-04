import React, { useState } from 'react';
import { FiX, FiPlus, FiEdit2, FiChevronDown, FiChevronUp } from 'react-icons/fi';

const SidebarSection = ({ title, children, defaultOpen = true, onEdit }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="mb-6 bg-white rounded-lg shadow-sm overflow-hidden">
      <div 
        className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="font-medium text-base">{title}</h3>
        <div className="flex items-center">
          {onEdit && (
            <button 
              onClick={(e) => {
                e.stopPropagation(); 
                onEdit();
              }}
              className="text-primary mr-3 hover:text-primary-dark"
            >
              <FiEdit2 size={16} />
            </button>
          )}
          {isOpen ? <FiChevronUp /> : <FiChevronDown />}
        </div>
      </div>
      
      {isOpen && (
        <div className="p-4 border-t border-gray-100">
          {children}
        </div>
      )}
    </div>
  );
};

const TagItem = ({ tag, onRemove }) => {
  return (
    <div className={`tag tag-${tag.color}`}>
      {tag.text}
      {onRemove && (
        <button 
          onClick={() => onRemove(tag.id)}
          className="remove-icon ml-2"
          aria-label="Eliminar"
        >
          <FiX size={14} />
        </button>
      )}
    </div>
  );
};

const Sidebar = ({ 
  data, 
  updateDescription,
  updateNotas,
  updateObjetivosCliente,
  addTactica,
  removeTactica
}) => {
  const [isEditingDescription, setIsEditingDescription] = useState(false);
  const [isEditingObjetivos, setIsEditingObjetivos] = useState(false);
  const [isEditingNotas, setIsEditingNotas] = useState(false);
  const [tempDescription, setTempDescription] = useState(data.descripcionCaso);
  const [tempObjetivos, setTempObjetivos] = useState(data.objetivosCliente);
  const [tempNotas, setTempNotas] = useState(data.notas);
  const [newTactica, setNewTactica] = useState('');
  const [showAddTactica, setShowAddTactica] = useState(false);

  const colors = ['orange', 'green', 'yellow', 'blue', 'purple', 'pink'];
  
  const handleSaveDescription = () => {
    updateDescription(tempDescription);
    setIsEditingDescription(false);
  };

  const handleSaveObjetivos = () => {
    updateObjetivosCliente(tempObjetivos);
    setIsEditingObjetivos(false);
  };

  const handleSaveNotas = () => {
    updateNotas(tempNotas);
    setIsEditingNotas(false);
  };

  const handleAddTactica = () => {
    if (newTactica.trim()) {
      // Seleccionar un color aleatorio de la lista
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      addTactica(newTactica.trim(), randomColor);
      setNewTactica('');
      setShowAddTactica(false);
    }
  };

  return (
    <div className="sidebar">
      <SidebarSection 
        title="Tácticas"
        onEdit={() => setShowAddTactica(!showAddTactica)}
      >
        <div className="flex flex-wrap mb-3">
          {data.tacticas.map((tag) => (
            <TagItem key={tag.id} tag={tag} onRemove={removeTactica} />
          ))}
        </div>
        
        {showAddTactica && (
          <div className="mt-3">
            <input
              type="text"
              value={newTactica}
              onChange={(e) => setNewTactica(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mb-2 text-sm"
              placeholder="Nueva táctica"
            />
            <div className="flex space-x-2">
              <button 
                onClick={handleAddTactica}
                className="px-3 py-1 bg-primary text-white text-xs rounded"
              >
                Agregar
              </button>
              <button 
                onClick={() => setShowAddTactica(false)}
                className="px-3 py-1 border border-gray-300 text-gray-600 text-xs rounded"
              >
                Cancelar
              </button>
            </div>
          </div>
        )}

        {!showAddTactica && (
          <button 
            onClick={() => setShowAddTactica(true)} 
            className="flex items-center text-xs text-primary hover:underline mt-2"
          >
            <FiPlus className="mr-1" /> Agregar táctica
          </button>
        )}
      </SidebarSection>
      
      <SidebarSection 
        title="Descripción del caso"
        onEdit={() => setIsEditingDescription(true)}
      >
        {isEditingDescription ? (
          <div>
            <textarea
              value={tempDescription}
              onChange={(e) => setTempDescription(e.target.value)}
              className="w-full h-32 p-3 border border-gray-300 rounded text-sm focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
            />
            <div className="flex justify-end space-x-2 mt-3">
              <button 
                onClick={handleSaveDescription}
                className="px-3 py-1 bg-primary text-white text-xs rounded"
              >
                Guardar
              </button>
              <button 
                onClick={() => {
                  setTempDescription(data.descripcionCaso);
                  setIsEditingDescription(false);
                }}
                className="px-3 py-1 border border-gray-300 text-gray-600 text-xs rounded"
              >
                Cancelar
              </button>
            </div>
          </div>
        ) : (
          <div 
            className="p-3 border border-gray-200 rounded-md text-gray-600 min-h-[100px] cursor-pointer hover:border-gray-300"
            onClick={() => setIsEditingDescription(true)}
          >
            {data.descripcionCaso}
          </div>
        )}
      </SidebarSection>
      
      <SidebarSection 
        title="Objetivo del cliente"
        onEdit={() => setIsEditingObjetivos(true)}
      >
        {isEditingObjetivos ? (
          <div>
            <textarea
              value={tempObjetivos}
              onChange={(e) => setTempObjetivos(e.target.value)}
              className="w-full h-32 p-3 border border-gray-300 rounded text-sm focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
            />
            <div className="flex justify-end space-x-2 mt-3">
              <button 
                onClick={handleSaveObjetivos}
                className="px-3 py-1 bg-primary text-white text-xs rounded"
              >
                Guardar
              </button>
              <button 
                onClick={() => {
                  setTempObjetivos(data.objetivosCliente);
                  setIsEditingObjetivos(false);
                }}
                className="px-3 py-1 border border-gray-300 text-gray-600 text-xs rounded"
              >
                Cancelar
              </button>
            </div>
          </div>
        ) : (
          <div 
            className="p-3 border border-gray-200 rounded-md text-gray-600 min-h-[100px] cursor-pointer hover:border-gray-300"
            onClick={() => setIsEditingObjetivos(true)}
          >
            {data.objetivosCliente}
          </div>
        )}
      </SidebarSection>
      
      <SidebarSection 
        title="Notas"
        onEdit={() => setIsEditingNotas(true)}
      >
        {isEditingNotas ? (
          <div>
            <textarea
              value={tempNotas}
              onChange={(e) => setTempNotas(e.target.value)}
              className="w-full h-32 p-3 border border-gray-300 rounded text-sm focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
            />
            <div className="flex justify-end space-x-2 mt-3">
              <button 
                onClick={handleSaveNotas}
                className="px-3 py-1 bg-primary text-white text-xs rounded"
              >
                Guardar
              </button>
              <button 
                onClick={() => {
                  setTempNotas(data.notas);
                  setIsEditingNotas(false);
                }}
                className="px-3 py-1 border border-gray-300 text-gray-600 text-xs rounded"
              >
                Cancelar
              </button>
            </div>
          </div>
        ) : (
          <div 
            className="p-3 border border-gray-200 rounded-md text-gray-600 min-h-[100px] cursor-pointer hover:border-gray-300"
            onClick={() => setIsEditingNotas(true)}
          >
            {data.notas}
          </div>
        )}
      </SidebarSection>
    </div>
  );
};

export default Sidebar;
