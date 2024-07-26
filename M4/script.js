//Funzione per visualizzare i prodotti dalla API
function visualizzaProdotti(){
   fetch("https://striveschool-api.herokuapp.com/api/product/", {
      headers: {
         "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjA5ZDFhNTQ2MTBmZDAwMTk4ZjAyN2IiLCJpYXQiOjE3MTIwNTA4OTcsImV4cCI6MTcxMzI2MDQ5N30.R4dLEhTe4HpB5q3IOFZ5fENhzv5LK3APUiJDZ-TAfXY"
      }
   })
   .then(response=> response.json())
   .then(data => {
   console.log(data);
    const prodottiCOntainer =document.getElementById('prodotti-container')
    prodottiCOntainer.innerHTML=''

    data.forEach(prodotto => {
      const prodottoDiv=document.createElement('div')
      prodottoDiv.addclassList('container-prodotto')
      prodottiCOntainer.append(prodottoDiv)
    });
   })
   .catch(error => {
    console.error('errore', error)
   });
}

//Funzione per aggiunngere un nuovo prodotto
function aggiungiProdotto(event){
   event.preventDefault();

   //Ottenere i valori inseriti nel form
   const nome=document.getElementById('nome-prodotto').value
   const descrizione=document.getElementById('descrizione-prodotto').value
   const prezzo=parseFloat(document.getElementById('prezzo-prodotto').value)
   const immagine=document.getElementById('immagine-prodotto').value
   const brand=document.getElementById('brand-prodotto').value

   //Creare un oggetto FormData per inviare il prodotto all'API
   const formData=new FormData()
   formData.append('name', nome)
   formData.append('description', descrizione)
   formData.append('brand', brand)
   formData.append('imageUrl', immagine)
   formData.append('price', prezzo)

   inviaProdottoAPI(formData)
}

//Funzione per inviare il prodotto all'API tramite richiesta POST
function inviaProdottoAPI(prodotto){
   //Converti l'oggetto FormData in oggetto js
   const prodottoJson={}
   prodotto.forEach((value, key)=>{
      prodottoJson[key]=value;
   })

   fetch("https://striveschool-api.herokuapp.com/api/product/", {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json',
         "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjA5ZDFhNTQ2MTBmZDAwMTk4ZjAyN2IiLCJpYXQiOjE3MTIwNTM2NzQsImV4cCI6MTcxMzI2MzI3NH0.p7GFa6UIf2EntMK_GtK5Fh7aZxwjqIfoNo_xvV2-OFE"
      },
      body: JSON.stringify(prodottoJson)
   })
   .then(response =>{
      if(!response.ok){
         throw new Error("Errore durante l'aggiunta del prodotto")
      }
      return response.json()
   })
   .then(data=>visualizzaProdotti())
   .catch(error=>{
      console.error('ERRORE')
   })
}

document.getElementById('aggiungi-prodotto-form').addEventListener('submit', aggiungiProdotto)

window.addEventListener('load', visualizzaProdotti)