import { useContext } from "react";
import PhotosContext from "../contextAPI/PhotosProvider";
import Heart from "../components/Heart";

export default function Favoritos() {
  const { favorites, likeAndUnlikePhoto } = useContext(PhotosContext);

  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 galeria grid-columns-4">
        {favorites.map((photo) => (
          <div onClick={() => likeAndUnlikePhoto(photo.id)} key={photo.id}>
            <Heart filled={photo.liked} />
            <p>{photo.alt}</p>
            <img className="foto" src={photo.src.original} alt={photo.alt} />
          </div>
        ))}
      </div>
      {favorites.length === 0 && (
        <p className="no-favorite">No hay fotos guardadas en favoritos</p>
      )}
    </div>
  );
}
