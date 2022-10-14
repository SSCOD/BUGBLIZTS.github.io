      
//Swiper slider
var swiper = new Swiper(".bg-slider-thumbs", {
    loop: true,
    spaceBetween: 0,
    slidesPerView: 0,
});
var swiper2 = new Swiper(".bg-slider", {
    loop: true,
    spaceBetween: 0,
    thumbs: {
        swiper: swiper,
    },
});





        // back to top
        let up = document.querySelector('.up');
        window.onscroll = function(){
            up.classList.toggle('show', window.scrollX >= 800);
        }
        up.onclick = function(){
            window.scrollTo({behavior: 'smooth', top: 0});
        }





        function home(){
            location.replace("./index.html")
        }
        document.getElementById('saad').innerHTML = localStorage.getItem("saqib");
        let saqib =  document.getElementById('saqib')
        saqib.innerHTML = localStorage.getItem("saqib")
       







        window.addEventListener("load", function(){
            setTimeout(
                function open(event){
                    document.querySelector(".popup").style.display = "block";
                },
                1000
            )
        });
        
        
        document.querySelector("#close").addEventListener("click", function(){
            document.querySelector(".popup").style.display = "none";
        });
        


