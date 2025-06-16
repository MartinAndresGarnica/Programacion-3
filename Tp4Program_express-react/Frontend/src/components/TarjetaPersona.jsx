import '../css/TarjetaStyless.css'; 

const TarjetaPersona = ({ persona }) => {
  const { id, nombre, apellido, edad, email } = persona;

  return (
    <div className="tarjeta">
      <div className="tarjeta__header">
        <span className="tarjeta__id">ID: {id}</span>
      </div>
      <h2 className="tarjeta__titulo">{nombre} {apellido}</h2>
      <div className="tarjeta__info">
        <p>Edad: {edad}</p>
        <p>Email: {email}</p>
      </div>
    </div>
  );
};
export default TarjetaPersona;