function return_video(){

	// the blob object contains the recorded data that
	// can be downloaded by the user, stored on server etc.
	let serverUrl = '/uploads/';
	let formData = new FormData();
	// let data = [];

	let name_data = "";
	let name = document.getElementsByName("personality-name");
	for(let i=0; i<name.length; i++){
		if (name[i].checked == true){
			name_data = name[i].value;
			continue;
		}
	}

	if (name_data == ""){
		return alert("Select a personality");
	} 

	// data.push(name_data)

	if(document.getElementById("myAudio_uploaded").files.length == 0 && player_input.recordedData == undefined){
		return alert("Add a document to be converted!")

	} else if (player_input.recordedData != undefined){
		data = (player_input.recordedData);
		// formData.append('file', data);
	} else{
		data = document.getElementById("myAudio_uploaded").files[0];
		// formData.append('file', data);
	}

	formData.append('file', data, name_data);



	

	// console.log('uploading recording:', data.name);

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



}