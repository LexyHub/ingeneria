import React, { useState } from 'react';
import { FiX } from 'react-icons/fi';

const DetalleAccion = ({ accion, onClose, onSave }) => {
  const [datosAccion, setDatosAccion] = useState({
    // Deuda
    acreedor: accion.acreedor || '',
    montoDeuda: accion.montoDeuda || '',
    fechaVencimiento: accion.fechaVencimiento || '',
    
    // Acción
    tipoPrescripcion: accion.tipoPrescripcion || '',
    prescripcionDesde: accion.prescripcionDesde || '',
    
    // Notas
    notas: accion.notas || ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDatosAccion({
      ...datosAccion,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(datosAccion);
  };

  // Opciones para selects
  const tiposPrescripcion = ['Ordinaria (5 años)', 'Extraordinaria (10 años)', 'Especial'];

  // Formatear moneda
  const formatearDinero = (monto) => {
    return new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP'
    }).format(monto);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2 className="text-xl font-semibold">Detalle de Acción de Prescripción</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <FiX size={24} />
          </button>
        </div>
        
        <form onSubmit={handleSubmit}>
          {/* Deuda */}
          <div className="card-container mb-4">
            <h3 className="text-lg font-medium mb-3">Deuda</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-group">
                <label className="form-label">Acreedor</label>
                <input
                  type="text"
                  name="acreedor"
                  value={datosAccion.acreedor}
                  onChange={handleChange}
                  className="input-field"
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">Monto Deuda</label>
                <input
                  type="number"
                  name="montoDeuda"
                  value={datosAccion.montoDeuda}
                  onChange={handleChange}
                  className="input-field"
                />
                {datosAccion.montoDeuda && (
                  <p className="text-sm text-gray-500 mt-1">
                    {formatearDinero(datosAccion.montoDeuda)}
                  </p>
                )}
              </div>
              
              <div className="form-group">
                <label className="form-label">Fecha de Vencimiento</label>
                <input
                  type="date"
                  name="fechaVencimiento"
                  value={datosAccion.fechaVencimiento}
                  onChange={handleChange}
                  className="input-field"
                />
              </div>
            </div>
          </div>
          
          {/* Acción */}
          <div className="card-container mb-4">
            <h3 className="text-lg font-medium mb-3">Acción</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-group">
                <label className="form-label">Tipo de Prescripción</label>
                <select
                  name="tipoPrescripcion"
                  value={datosAccion.tipoPrescripcion}
                  onChange={handleChange}
                  className="form-select"
                >
                  <option value="">Seleccione</option>
                  {tiposPrescripcion.map((tipo, index) => (
                    <option key={index} value={tipo}>
                      {tipo}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="form-group">
                <label className="form-label">Prescripción desde</label>
                <input
                  type="date"
                  name="prescripcionDesde"
                  value={datosAccion.prescripcionDesde}
                  onChange={handleChange}
                  className="input-field"
                />
              </div>
            </div>
          </div>
          
          {/* Notas */}
          <div className="card-container mb-4">
            <h3 className="text-lg font-medium mb-3">Notas</h3>
            <div className="form-group">
              <textarea
                name="notas"
                value={datosAccion.notas}
                onChange={handleChange}
                className="form-textarea w-full"
                rows="4"
                placeholder="Detalles importantes sobre esta acción de prescripción..."
              />
            </div>
          </div>
          
          <div className="modal-footer">
            <button type="button" onClick={onClose} className="btn-secondary mr-2">
              Cancelar
            </button>
            <button type="submit" className="btn-primary">
              Guardar Cambios
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DetalleAccion;
