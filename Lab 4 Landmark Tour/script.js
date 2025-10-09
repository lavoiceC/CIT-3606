let base_landmark = "bp";
function Slandmark(landmark){
    const image = document.getElementById("myImage");
    const description = document.getElementById("description");
    const map = document.getElementById("map");
    if(landmark == "bp"){
        image.src = "myImage/bp.jpg";
        description.textContent = "Buckingham Palace is a London residence it is also the major headquarters of the royal family.";
        map.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4721.514471321009!2d-0.1444649235304209!3d51.50136397181184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760520cd5b5eb5%3A0xa26abf514d902a7!2sBuckingham%20Palace!5e1!3m2!1sen!2sus!4v1759412770351!5m2!1sen!2sus";
    }
    else if(landmark == "tm"){
        image.src = "myImage/tm.jpg";
        map.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3660.153953622634!2d78.0399663150012!3d27.17514478302154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397471f7b5a5c6b5%3A0x8d9e6c6e8f8e6e0!2sTaj%20Mahal!5e1!3m2!1sen!2sus!4v1759413076780!5m2!1sen!2sus";
        description.textContent = "The Taj Mahal was created in 1632 and is located in Agra, India.";
    }
    else if (landmark == "np"){
        image.src = "myImage/np.jpg";
        map.src ="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11652.048501958854!2d-79.5628019128418!3d37.62856779999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x884cd08b91c6b643%3A0x1e39415be412ec50!2sNatural%20Bridge%20State%20Park!5e1!3m2!1sen!2sus!4v1759935961286!5m2!1sen!2sus";
        description.textContent = "Natural Bridge is a beutiful rock formation located in Virginia shaped like a bridge and that why it got its name";
}
}
function ImageSize(){
        const size = document.getElementById("Size").value;
        const image = document.getElementById("myImage");
        if (size == "Small"){
            image.style.width = "300px";
        }
        else if (size == "Medium"){
            image.style.width = "600px";
        }
        else if (size == "Large"){
            image.style.width = "900px";
        }
        
}
    
    
