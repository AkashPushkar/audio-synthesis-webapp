function return_video(){

	// the blob object contains the recorded data that
	// can be downloaded by the user, stored on server etc.

	var data = player_input.recordedData;
	var serverUrl = '/uploads/';
	var formData = new FormData();
	formData.append('file', data, data.name);

	console.log('uploading recording:', data.name);

	fetch(serverUrl, {
	    method: 'POST',
	    body: formData
	}).then(function(response){
				return response.blob();
	}).then(function(response){
			var url = URL.createObjectURL(response)
	    	document.getElementById("return_video").src = url;
	    	console.log('recording upload complete.');
	    // success => console.log('recording upload complete.')
	}).catch(
	    error => console.error('an upload error occurred!')
	);



	// document.getElementById("return_video").src = a+"1571078701024.webm";
}