(function () {
      
        document.getElementById("uploadFile").onchange = function(el) {
            readURL(this)
                EXIF.getData(el.target.files[0], function() {
                 
                   EXIF.getData(this,()=>{
                       console.log(this)
                       
                       
                       
                    if(Object.keys(this.exifdata).length > 0){
                        
                    //display camera details    
                      camera_details(this.exifdata)
                      //display image details
                    generate_lat_lang(this)
                    
                
              
                }else{
                     noDataAvailable()
                    }
   
                    });
    
                });
            }
            var image = document.getElementsByClassName('DisplayImage');
        for (var i = 0; i < image.length; i++) {
            image[i].addEventListener('click', function(){
                EXIF.getData(this,()=>{
            if(Object.keys(this.exifdata).length > 0){
                     //display camera details    
                      camera_details(this.exifdata)
                      //display image details
                    generate_lat_lang(this)
            }else{
              noDataAvailable()
               
            }
        });
            });
        }
    
      
    })();
    
    
    function readURL(input) {
        ///reading the Uploading file
      if (input.files && input.files[0]) {
        var reader = new FileReader();
        
        reader.onload = function(e) {
            document.getElementById("preview").src=  e.target.result
        }
        
        reader.readAsDataURL(input.files[0]);
      }
    }
    
    function noDataAvailable(){
        
        document.getElementById("Lati").innerText = "N/A"
        document.getElementById("Long").innerText = "N/A"
        document.getElementById("datetime").innerText = "N/A"
        alert("No GPS Data Available")
    }
    
    //getting camera details 
   function camera_details(exifData=''){
                        var cmm = "N/A"
                        var company = "N/A"
                        if(exifData.Model){
                           cmm =  exifData.Model;
                        }
                         if(exifData.Make){
                           company =  exifData.Make;
                        }
        
        //Camera Model
        //Image Resolution
        document.getElementById("datetime").innerText = (exifData.DateTimeOriginal) ? exifData.DateTimeOriginal : "N/A"
        //Iso speed
        //lense shutter speed
        
            }
    
    function generate_lat_lang(imageData=''){
       
//geting cordinates of latitude
    var latDegree = imageData.exifdata.GPSLatitude[0].numerator;
    var latMinute = imageData.exifdata.GPSLatitude[1].numerator;
    var latSecond = imageData.exifdata.GPSLatitude[2].numerator/imageData.exifdata.GPSLatitude[2].denominator;
    
    document.getElementById("Lati").innerText = (latDegree + (latMinute/60) + (latSecond/3600)).toFixed(8);;
//geting cordinates of longitude
    var lonDegree = imageData.exifdata.GPSLongitude[0].numerator;
    var lonMinute = imageData.exifdata.GPSLongitude[1].numerator;
    var lonSecond = imageData.exifdata.GPSLongitude[2].numerator/imageData.exifdata.GPSLongitude[2].denominator;
    document.getElementById("Long").innerText = (lonDegree + (lonMinute/60) + (lonSecond/3600)).toFixed(8);
             
    }