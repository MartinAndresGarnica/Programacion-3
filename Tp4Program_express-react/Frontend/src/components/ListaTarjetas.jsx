import TarjetaPersona from './TarjetaPersona';

const ListaTarjetas = ({ personas }) => {
  const handleVerMas = (persona) => {
    console.log('Ver más info de:', persona);
    // Aquí puedes agregar la lógica para mostrar más detalles
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {personas.map((persona) => (
        <TarjetaPersona 
          key={persona.id} 
          persona={persona}
          onVerMas={handleVerMas}
        />
      ))}
    </div>
  );
};
export default ListaTarjetas;