import { useState, useRef } from 'preact/hooks'
import html2canvas from 'html2canvas'
import './app.css'

function App() {
  // Crea un estado para almacenar las imágenes cargadas por el usuario
  const [images, setImages] = useState([
    '/path/to/default/image1.jpg',
    '/path/to/default/image2.jpg',
    '/path/to/default/image3.jpg',
    '/path/to/default/image4.jpg',
  ]);

  // Define una función para manejar el cambio en el input de tipo "file"
  const handleFileChange = (event) => {
    // Obtén el archivo cargado por el usuario
    const file = event.target.files[0];

    // Si el usuario ha cargado un archivo, actualiza el estado de las imágenes
    if (file) {
      setImages(() => {
        const link = URL.createObjectURL(file)
        // Crea una copia del estado actual de las imágenes
        const newImages = [...images];
        // Actualiza la imagen en la posición correspondiente
        newImages[event.target.name] = link;
        // Devuelve las imágenes actualizadas
        return newImages;
      });
    }

  }

  const saveImage = () => {
    const divToSave: (HTMLElement|null) = document.querySelector('#a-imagen')
    
    html2canvas(divToSave, /*{dpi: 300}*/)
    .then(canvas => {
      const img = canvas.toDataURL()
        
      const a = document.createElement("a")
      a.href = img
      a.download = "imagen.png"
      
      a.click()
    })
  }

  return (
    <main class="mx-auto container py-3">
      <div class="flex flex-shrink" id="a-imagen">
        {/* Muestra las imágenes cargadas por el usuario */}
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Imagen ${index + 1}`} width="200"/>
        ))}
        {/* Crea un input de tipo "file" para cada imagen */}
        <div>
          {images.map((image, index) => (
            <input
              key={index}
              type="file"
              name={index.toString()}
              onChange={handleFileChange}
            />
          ))}
        </div>
      </div>
      <button onClick={saveImage} class="bg-slate-800 text-white px-3 py-2 mt-8 rounded-md">Guardar como imagen</button>
    </main>
  );
}

export { App }