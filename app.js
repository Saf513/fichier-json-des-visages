fetch('./visage.json')
    .then(response => response.json())
    .then(data => {
        test(data); 
    })
    .catch(error => {
        console.error('Erreur de chargement du fichier JSON :', error);
    });


    function test(data){


        const visageDisplay = data;

        const faceContainer = document.getElementById('face-container');

        visageDisplay.forEach(face => {
          
          let faceElement = document.createElement('div');
        
           let pic = document.createElement('img');
           let gendre = document.createElement('p');
    
           pic.src = face.img;
           pic.width=300;
           pic.height=400;
           gendre.textContent = face.gendre;
         
      

            // Ajouter le livre à la page
            faceContainer.appendChild(faceElement);
            faceElement .appendChild(pic);
            faceElement .appendChild(gendre);
            console.log(faceContainer)
        });
    }
