// IndexedDB 
let db;
const request = indexedDB.open('dinnermovi', 1);


request.onupgradeneeded = function(event) {
    const db = event.target.result;
    db.createObjectStore('new_dinnermovi', { autoIncrement: true });
  };

request.onsuccess = function(event) {
    db = event.target.result;
    if (navigator.onLine) {
      
      uploadDinnerMovieDB();
    }
  };
  
  request.onerror = function(event) {
    console.log(event.target.errorCode);
  };

function saveRecord(record) {
    const transaction = db.transaction(['new_dinnermovi'], 'readwrite');

    const dinnermoviObjectStore = transaction.objectStore('new_dinnermovi');

    dinnermoviObjectStore.add(record);
  }

  function uploadDinnerMovieDB() {

    const transaction = db.transaction(['new_dinnermovi'], 'readwrite');

    const dinnermoviObjectStore = transaction.objectStore('new_dinnermovi');

    const getAll = dinnermoviObjectStore.getAll();


getAll.onsuccess = function() {

    if (getAll.result.length > 0) {

        fetch('/transaction', {
        method: 'POST',
        body: JSON.stringify(getAll.result),
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        }
      })
        .then(response => response.json())
        .then(serverResponse => {
          if (serverResponse.message) {
            throw new Error(serverResponse);
          }
     
          const transaction = db.transaction(['new_dinnermovi'], 'readwrite');
        
          const dinnermoviObjectStore = transaction.objectStore('new_dinnermovi');
       
          dinnermoviObjectStore.clear();

          alert('Transaction data has been submitted!');
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

}


window.addEventListener('online', uploadDinnerMovieDB);