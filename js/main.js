var accordion = document.querySelectorAll(".accordion");

for (var i = 0; i < accordion.length; i++) {
    accordion[i].onclick = function () {

        var ul = this.nextElementSibling;
        var img = this.childNodes[1];

        console.log(img);
        if (ul.classList.contains('show')) {
            ul.classList.remove('opacity');
            img.classList.remove("rotate");
            setTimeout(function () {

                ul.classList.remove('show');
                ul.classList.add('hide')
            }
     , 200)
        }
        else {
            ul.classList.remove('hide');
            ul.classList.add('show');
            img.classList.add("rotate")
            setTimeout(function () {
                ul.classList.add('opacity')
            }
           , 200)
        }
    }
}