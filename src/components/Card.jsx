// function Card() {
//   return (
//     <div className="card" style={{ width: '18rem' }}>
//       <img src="/geothermal.jpg" className="card-img-top" alt="Imagen geotermal" />
//       <div className="card-body">
//         <h5 className="card-title">Card title</h5>
//         <p className="card-text">
//           Some quick example text to build on the card title and make up the bulk of the card’s content.
//         </p>
//         <a href="#" className="btn btn-primary">Go somewhere</a>
//       </div>
//     </div>
//   );
// }

// export default Card;

function Card({ image, title, text, link }) {
  return (
    // h-100 para que todas las tarjetas tengan la misma altura 
    // widht ajusta el ancho de la tarjeta 
    <div className="card h-100" style={{ width: '20rem' }}> 
      <img src={image} className="card-img-top" alt={title} style={{ height: '200px', objectFit: 'cover' }} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <a href={link} className="btn btn-primary">Ir al sitio</a>
      </div>
    </div>
  );
}

export default Card;



// ctrl + D to select multiple occurences

//         {/* <img src="..." className="card-img-top" alt="..."> */}