import { AppDataSource } from "./data-source"
import { Album } from "./entity/Album";
import {Photo} from "./entity/Photo" 
import { PhotoMetaData } from "./entity/PhotoMetaData";

AppDataSource.initialize().then(async () => {

 



  const albumRepository = AppDataSource.getRepository(Album);
 
  
  const photo = new Photo();

  photo.name = 'Many To Many Relationship'
  photo.description = "Relationship-description"
  photo.filename = " relationship.png"
  photo.views = 100
  photo.isPublished = true
  

  console.log("Before Photo Saved",photo)
  const photoRepository = AppDataSource.getRepository(Photo)
  await photoRepository.save(photo)

  console.log("After Photo Saved", photo)

  const album1 = new Album()
  album1.name ="Album A"
  album1.photos = [photo]
  console.log("Before album Saved", album1)
  await albumRepository.save(album1);
  console.log("After Album Saved",album1)

  /* const photo = new Photo();
  photo.name = 'new photo'
  photo.description = "Relationship-description"
  photo.filename = " relationship.png"
  photo.views = 100
  photo.isPublished = true

  const photoMetaData = new PhotoMetaData()
  photoMetaData.height = 20;
  photoMetaData.width = 20;
  photoMetaData.orientation = 'vertical'
  photoMetaData.compressed = false
  photoMetaData.comment = " Greate Photo"
  
  
  photo.photoMetaData = photoMetaData;
 
  
  const photoRepository = AppDataSource.getRepository(Photo)
  const photoMetaDataRepository = AppDataSource.getRepository(PhotoMetaData)

  const photoSaved = await photoRepository.save(photo); */

//  const metaDataWithPhoto = await photoMetaDataRepository.find({
//    relations:{
//       photo: true
//    }
//  })

//  console.log(metaDataWithPhoto)

//  const photoWithMetaData = await photoRepository.find({
//    relations:{
//       photoMetaData: true
//    }
//  })

//  console.log(photoWithMetaData)


}).catch(error => console.log(error))
