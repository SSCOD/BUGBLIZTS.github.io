



        function render(data)
        {
            var html = "<div class='prev-comments'><div class='single-item'><h4>"+data.name+"</h4><div class='email'>"+data.email+"</div><p>"+data.body+"</p><div class='clear'></div></div></div>"
    
            $('#container_comment').append(html);
        }
        
    
    
    
    $(document).ready(function()
    {
        var coment = [
            {"name": "Syed Saad", "email": "saad@gmail.com", "body": "this is a coment 1"}
        ];
        for(var i=0;i<coment.length;i++)
        {
            render(coment[i]);
        }
        $('#addComent').click(function()
        {
            var addObj = 
            {
                "name": $('#name').val(),
                "email": $('#email').val(),
                "body": $('#bodyText').val()
            };
           
            coment.push(addObj);
            render(addObj);
            $('#name').val(''),
            $('#email').val(''),
            $('#bodyText').val()
        });
       
    });
    
    
    