        // back to top
        let up = document.querySelector('.up');
        window.onscroll = function(){
            up.classList.toggle('show', window.scrollX >= 800);
        }
        up.onclick = function(){
            window.scrollTo({behavior: 'smooth', top: 0});
        }