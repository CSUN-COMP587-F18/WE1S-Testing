/* Scripts loaded by base.html */
$(document).ready(function() {
	// Disable search field
	$('#search').submit(function(e) {
		e.preventDefault();
		alert('Search functionality has not yet been enabled.');
	});
	// Handle scroll to top
	$(window).scroll(function(){ 
		if ($(this).scrollTop() > 100) { 
			$('#scroll').fadeIn(); 
		} else { 
			$('#scroll').fadeOut(); 
		} 
	}); 
	$('#scroll').click(function(){ 
		$("html, body").animate({ scrollTop: 0 }, 600); 
		return false; 
	});


//anandos javascript code for the functionality of the buttons "+" "submit" and "x"


    //removing an input aka the "x"
    $(document).on('click', '.remove', function() {
        $(this).parent().remove();
        return false; //prevent form submission
    });

    //the first one is the "submit" button for serializatoin
	 // authorsjs start
    $(document).on('click', '#author_serialize', function(){
      var store = "";
        var x = $('#aform :input').serializeArray();
        console.log(x)
        $.each(x, function(i, field){
          if (i==x.length-1) {
            store = store + field.value
          } else{
            store = store + field.value + "\r";
          }
        });
        document.getElementById("authors").value = store;
        $('#aform').parent().remove();
        $("#authors").show();
        alert("Your field has have been submitted!");
        console.log(store);
    });

    //this is the adding a new inputfield feature aka the "+". these repeat for the rest of the fields
    //only differenec is their id names but functionality is pretty much the same things 
    $(document).on('click', '#add_author', function(){
        $('.author_field').append('<div><input name="sadface" type="textarea"><button class="btn rip remove btn-lg btn-outline-editorial">X</button></div>');
      
        return false; //prevent form submission
    });
    // keywordjs start
    $(document).on('click', '#keyword_serialize', function(){
      var store = "";
        var x = $('#kform :input').serializeArray();
        console.log(x)
        $.each(x, function(i, field){
          if (i==x.length-1) {
            store = store + field.value
          } else{
            store = store + field.value + "\r";
          }
        });
        document.getElementById("keywords").value = store;
        $('#kform').parent().remove();
        $("#keywords").show();
        alert("Your field has have been submitted!");
        console.log(store);
    });


    $(document).on('click', '#add_keyword', function(){
        $('.keyword_field').append('<div><input name="sadface" type="textarea"><button class="btn rip remove btn-lg btn-outline-editorial">X</button></div>');
      
        return false; //prevent form submission
    });
    // notejs start


    $(document).on('click', '#note_serialize', function(){
      var store = "";
        var x = $('#nform :input').serializeArray();
        console.log(x)
        $.each(x, function(i, field){
          if (i==x.length-1) {
            store = store + field.value
          } else{
            store = store + field.value + "\r";
          }
        });
        document.getElementById("notes").value = store;
        $('#nform').parent().remove();
        $("#notes").show();
        alert("Your field has have been submitted!");
        console.log(store);
    });


    $(document).on('click', '#add_note', function(){
        $('.note_field').append('<div><input name="sadface" type="textarea"><button class="btn rip remove btn-lg btn-outline-editorial">X</button></div>');
      
        return false; //prevent form submission
    });

            // contributorsjs start
    $(document).on('click', '#contributor_serialize', function(){
      var store = "";
        var x = $('#cform :input').serializeArray();
        console.log(x)
        $.each(x, function(i, field){
          if (i==x.length-1) {
            store = store + field.value
          } else{
            store = store + field.value + "\r";
          }
        });
        document.getElementById("contributors").value = store;
        $('#cform').parent().remove();
        $("#contributors").show();
        alert("Your field has have been submitted!");
        console.log(store);
    });


    $(document).on('click', '#add_contributor', function(){
        $('.contributor_field').append('<div><input name="sadface" type="textarea"><button class="btn rip remove btn-lg btn-outline-editorial">X</button></div>');
      
        return false; //prevent form submission
    });

        // licencesjs start
    $(document).on('click', '#license_serialize', function(){
      var store = "";
        var x = $('#lform :input').serializeArray();
        console.log(x)
        $.each(x, function(i, field){
          if (i==x.length-1) {
            store = store + field.value
          } else{
            store = store + field.value + "\r";
          }
        });
        document.getElementById("licenses").value = store;
        $('#lform').parent().remove();
        $("#licenses").show();
        alert("Your field has have been submitted!");
        console.log(store);
    });


    $(document).on('click', '#add_license', function(){
        $('.license_field').append('<div><input name="sadface" type="textarea"><button class="btn rip remove btn-lg btn-outline-editorial">X</button></div>');
      
        return false; //prevent form submission
    });


        // relationshipjs start
    $(document).on('click', '#relationships_serialize', function(){
      var store = "";
        var x = $('#rform :input').serializeArray();
        console.log(x)
        $.each(x, function(i, field){
          if (i==x.length-1) {
            store = store + field.value
          } else{
            store = store + field.value + "\r";
          }
        });
        document.getElementById("relationships").value = store;
        $('#rform').parent().remove();
        $("#relationships").show();
        alert("Your field has have been submitted!");
        console.log(store);
    });


    $(document).on('click', '#add_relationships', function(){
        $('.relationships_field').append('<div><input name="sadface" type="textarea"><button class="btn rip remove btn-lg btn-outline-editorial">X</button></div>');
      
        return false; //prevent form submission
    });


    // sourcesjs start
    $(document).on('click', '#source_serialize', function(){
      var store = "";
        var x = $('#sform :input').serializeArray();
        console.log(x)
        $.each(x, function(i, field){
          if (i==x.length-1) {
            store = store + field.value
          } else{
            store = store + field.value + "\r";
          }
        });
        document.getElementById("sources").value = store;
        $('#sform').parent().remove();
        $("#sources").show();
        alert("Your field has have been submitted!");
        console.log(store);
    });


    $(document).on('click', '#add_source', function(){
        $('.source_field').append('<div><input name="sadface" type="textarea"><button class="btn rip remove btn-lg btn-outline-editorial">X</button></div>');
      
        return false; //prevent form submission
    });


    // processesjs start
    $(document).on('click', '#processes_serialize', function(){
      var store = "";
        var x = $('#pform :input').serializeArray();
        console.log(x)
        $.each(x, function(i, field){
          if (i==x.length-1) {
            store = store + field.value
          } else{
            store = store + field.value + "\r";
          }
        });
        document.getElementById("processes").value = store;
        $('#pform').parent().remove();
        $("#processes").show();
        alert("Your field has have been submitted!");
        console.log(store);
    });


    $(document).on('click', '#add_processes', function(){
        $('.processes_field').append('<div><input name="sadface" type="textarea"><button class="btn rip remove btn-lg btn-outline-editorial">X</button></div>');
      
        return false; //prevent form submission
    });



    // querytermsjs start
    $(document).on('click', '#queryterm_serialize', function(){
      var store = "";
        var x = $('#qform :input').serializeArray();
        console.log(x)
        $.each(x, function(i, field){
          if (i==x.length-1) {
            store = store + field.value
          } else{
            store = store + field.value + "\r";
          }
        });
        document.getElementById("queryterms").value = store;
        $('#qform').parent().remove();
        $("#queryterms").show();
        alert("Your field has have been submitted!");
        console.log(store);
    });


    $(document).on('click', '#add_queryterm', function(){
        $('.queryterm_field').append('<div><input name="sadface" type="textarea"><button class="btn rip remove btn-lg btn-outline-editorial">X</button></div>');
      
        return false; //prevent form submission
    });
    
});
