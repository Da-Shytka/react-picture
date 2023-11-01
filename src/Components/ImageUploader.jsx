//Импорт библиотек и файлов
import { useState } from 'react';
import Dropzone from 'react-dropzone';
import imageUploaderData from "../MockData/imageUploaderData";

export const ImageUploaderTemplate = ({ item }) => {
  const { title } = item;

  return (
    <p className="container__header lined_header">{title}</p>
  );
};

//Объявление компонента представляет "загрузчик изображений", 
const ImageUploader = () => {

  const [selectedFile, setSelectedFile] = useState(null); //хранит URL загруженного изображения, null, так как изображение не было выбрано
  //Функция вызыыается при успешной загрузке файла с помощью компонента Dropzone
  const handleDrop = (acceptedFiles) => {
    if (acceptedFiles.length > 0) { //Если хотя бы один файл был успешно загружен
      setSelectedFile(URL.createObjectURL(acceptedFiles[0])); //создается URL изображение и сохраняется в selectedFile
    } 
  };

  return (
    <div className="image-uploader">
      <Dropzone onDrop={handleDrop}> 
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()} className="dropzone">
            <input {...getInputProps()} />
            {imageUploaderData.map((item, index) => (
              <ImageUploaderTemplate key={index} item={item} />
            ))}
          </div>
        )}
      </Dropzone>
      {selectedFile && (
        <div className="image-preview">
          <img src={selectedFile} alt="Uploaded" />
        </div>
      )}
    </div>
  );
};

export default ImageUploader;