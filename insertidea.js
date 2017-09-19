
$(function(){
	    $( "#target" ).datepicker();
});
// $(function(){
	// $("#year").datepicker( {
		// format: " yyyy", 
		// viewMode: "years", 
		// minViewMode: "years"
	// });
// });

function insertIdeaDetails(){
	alert("hello");
    var Details = BuildJSON();
    Details = JSON.stringify(Details)
    var url = "/api/ideadetails/insert"
    $.post(url, {
        Details: Details,
       // token: sessionStorage.sessionToken
    }, function(data, status) {
        console.log("Saved successfully")
    })

}
function UpdateIdeaDetails() {
    //alert("Update Clicked!!")
    var Details = BuildJSON();
    Details = JSON.stringify(Details)
    var url = "/api/ideadetails/update"
    var id = sessionStorage.projectPrimaryID
    $.post(url, {
        id: id,
        Details: Details,
        token: sessionStorage.sessionToken
    }, function(data) {
        if (data.success) {
            //console.log("Saved successfully")
        } else {

        }

    })
}

function Closewindow() {
    window.close();
}


function BuildJSON() {
    var Details = {
        "Name of Contributor": document.getElementById("contributor").value,
        "Workstream": document.getElementById("workstream").value,
        "Portfolio": document.getElementById("portfolio").value,
        "Application": document.getElementById("application").value,
        "Billable": $("input:radio[name=Billable]:checked").val(),
        "Significant idea": document.getElementById("Significant_idea").value,
        "Idea": document.getElementById("ideadesc").value,
        "Trigger": document.getElementById("Trigger").value,
        "Value_Benefits": document.getElementById("Value_Benefits").value,
        "Category": document.getElementById("Category").value,
        "Complexity": document.getElementById("Complexity").value,
        "Estimated_Efforts": document.getElementById("effort").value,
        "PSO_Delivery": $("input:radio[name=PSO_Delivery]:checked").val(),
        "Target_Implementation": document.getElementById("target").value,
        "Current_Status": getDropDowntext("status"),
        "Remarks": document.getElementById("Remarks").value,
        "HoursSpentaspartofQIS": document.getElementById("HoursSpentaspartofQIS").value,
        "Resourcesworkingonidea": document.getElementById("resourceworking").value,
        "Bag_Eligibility":$('#Bag_Eligibility:checked').val(),
        "QIS_EVENT": getDropDowntext("quarter"),        
    }
	

	
function getDropDowntext(selobjId) {
    var objSelect = document.getElementById(selobjId);
    var selectedText = objSelect.options[objSelect.selectedIndex].text;
    if (selectedText == "-- select --") {
        selectedText = "";
    }
    return selectedText;
}

    return Details;
}
