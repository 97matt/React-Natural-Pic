import { useContext } from "react";
import "../assets/css/galeria.css";
import Heart from "./Heart";
import PhotosContext from "../contextAPI/PhotosProvider";

export default function Home() {
  const { photos, likeAndUnlikePhoto } = useContext(PhotosContext);

  return (
    <div className="galeria grid-columns-5 p-3">
      {photos.map((photo) => (
        <div onClick={() => likeAndUnlikePhoto(photo.id)} key={photo.id}>
          <Heart filled={photo.liked} />
          <p>{photo.alt}</p>
          <img className="foto" src={photo.src.original} alt={photo.alt} />
        </div>
      ))}
    </div>
  );
}
