(function() {
    var FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

    var fileInput = document.querySelector(".notice__photo .upload input[type=file]");
    var preview = document.querySelector(".notice__photo .upload img");
    var imagesContainer = document.querySelector('.form__photo-container');
    var fileInputHouse = document.querySelector(".form__photo-container #images");


    var renderRoom = function(link) {
        var imageRoom = document.createElement('div');
        imageRoom.classList.add('notice__image');
        imageRoom.innerHTML = '<img src="" width="60" height="55" alt=""><button class="close__image" type="button"></button>';
        imageRoom.querySelector('img').src = link;
        imageRoom.querySelector('img').alt = 'Фото квартиры #';
        imageRoom.querySelector('.close__image').addEventListener('click', function() {
            var parent = this.parentNode;
            imagesContainer.removeChild(parent);
        })
        imagesContainer.appendChild(imageRoom);
    }

    fileInput.addEventListener("change", function() {
        var file = fileInput.files[0];
        var fileName = file.name.toLowerCase();
        var matches = FILE_TYPES.some(function(it) {
            return fileName.endsWith(it);
        });
        if (matches) {
            var reader = new FileReader();
            reader.addEventListener("load", function() {
                preview.src = reader.result;
                console.log(preview);
            });
            reader.readAsDataURL(file);
        }
    });

    fileInputHouse.addEventListener("change", function() {
        var file = Array.from(fileInputHouse.files);

        file.forEach(function(element) {
            var file = element;
            var fileName = file.name.toLowerCase();
            var matches = FILE_TYPES.some(function(it) {
                return fileName.endsWith(it);
            });
            if (matches) {
                var reader = new FileReader();
                reader.addEventListener('load', function() {
                    renderRoom(reader.result);
                });
            }
            reader.readAsDataURL(file);
        });
    });

})();