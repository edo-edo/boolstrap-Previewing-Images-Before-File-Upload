class UploadFIle{
    constructor(){
        this.input = document.getElementById('file-field');
        this.delet = document.getElementById('delete');
    }
    viewImage(e){
    const imageField = document.getElementById('con');
    const reader = new FileReader();
    reader.onload = () => {
        if (reader.readyState === 2) {
            const img = document.createElement('img');
            img.style.height = '250px';
            img.style.width = '200px';
            img.style.margin = '10px';
            img.src = reader.result;
            imageField.appendChild(img);
            this.delet.className = 'btn btn-danger mt-4 ml-5 position-absolute';
        }
    }
    reader.readAsDataURL(e.target.files[0]);
    this.input.value = null;
    }

    changeBorderHeight(){
        const cont =  document.getElementById('con');
        const child = cont.childElementCount; 
        if(child == 5){
            cont.style.height = 'auto';
        } 
        if(child < 5){
            cont.style.height = '290px';
        } 

    }
}

class selectImage{
    constructor(){
        this.selected = [];
    }
    addBorder(e){
        let ev = e.target;
        let pe = document.getElementById("con")
        var children = Array.prototype.slice.call(pe.children);
        children.forEach(el => {
            el.style.removeProperty('border');
    
        });
        if (ev.id !== 'con') {
            ev.style.border = '4px solid red';
        }
        this.selected = [];
        if (ev.id !== 'con') {
        this.selected.push(ev);
        }
    }
    deleteImage(){
        if (this.selected.length === 0) {
            confirm('please select image!');
        } else {
            const img = this.selected[0];
            img.parentNode.removeChild(img);

        }
    }
}
const input = document.getElementById('file-field');
const container = document.getElementById('con');
const delet = document.getElementById('delete');
const view = new UploadFIle();
const select = new selectImage();
input.addEventListener("change", (e) => {
    view.viewImage(e);
    view.changeBorderHeight();
});

container.addEventListener('click', (e) => {
    select.addBorder(e);
});

delet.addEventListener('click', () => {
    select.deleteImage()
})

delet.addEventListener('click', () => {
    if (container.children.length === 0) {
        view.changeBorderHeight();
        delet.className = 'invisible';
    }
});







