import { AppDataSource } from "./data-source"
import {Photo} from "./entity/Photo" 
import { PhotoMetaData } from "./entity/PhotoMetaData";

AppDataSource.initialize().then(async () => {

  /* const photo = new Photo();
  photo.name = 'Relationship-photo'
  photo.description = "Relationship-description"
  photo.filename = " relationship.png"
  photo.views = 100
  photo.isPublished = true

  const photoMetaData = new PhotoMetaData()
  photoMetaData.height = 10;
  photoMetaData.width = 10;
  photoMetaData.orientation = 'vertical'
  photoMetaData.compressed = false
  photoMetaData.comment = " Greate Photo"
  photoMetaData.photo = photo */

  const photoRepository = AppDataSource.getRepository(Photo)
  const photoMetaDataRepository = AppDataSource.getRepository(PhotoMetaData)

 const metaDataWithPhoto = await photoMetaDataRepository.find({
   relations:{
      photo: true
   }
 })

 console.log(metaDataWithPhoto)

 const photoWithMetaData = await photoRepository.find({
   relations:{
      photoMetaData: true
   }
 })

 console.log(photoWithMetaData)


}).catch(error => console.log(error))
