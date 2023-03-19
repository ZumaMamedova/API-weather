
$(document).ready(function(){
    
    
    $("button").click(function(e){
        e.preventDefault();
        let city=$("#city").val();
        

        $.ajax({
        
            url:`http://api.weatherapi.com/v1/current.json?key=c49a7b4e477543f4900133804231903&q=${city}`,
            method:"get",
            success:function(data){
            //console.log(data);
            degree=degree==1?data.current.degree_c:data.current.degree_f;
            let html=`
            <ul>
            <li>City:${data.location.name}</li>
            <li>Country:${data.location.country}</li>
            <li>Weather:${degree}</li>
            <li>Icon:</li>
            </ul>


        `
        $("#result").html(html)
        $("#city").val("")

        },
        error:function(error){
            if(error.status==400);

        }
    })

    })

})
