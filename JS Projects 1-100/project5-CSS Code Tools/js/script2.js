document.addEventListener('DOMContentLoaded',() => {
    
    const container = document.getElementById('container');
    const btncopy = document.getElementById('btncopy');
    const allborder = document.getElementById('all');
    const all_value = document.getElementById('all_value');
    const code = document.getElementById('code');
    const border_styles = document.getElementById('border_style');
    const borderElement = document.getElementById('border');

    var all_radius = 10;
    var border_color = "solid";
    var border_size = 2;
    var coding = "test";

    function allbordersUpdate() {
        all_radius = allborder.value;
        border_size = borderElement.value;
        all_value.innerText = all_radius+"px";
        border_value.innerText = border_size+"px";
        coding = `
        border-radius:${all_radius}px;
        border: ${border_size}px ${border_color} orange;
        `;
        code.value = coding;
        container.style.cssText = coding;
    };

    allborder.addEventListener("mousemove",allbordersUpdate);
    allborder.addEventListener("change",allbordersUpdate);

    borderElement.addEventListener('mousemove',allbordersUpdate);
    borderElement.addEventListener('change',allbordersUpdate);

    btncopy.addEventListener('click',() => {
        document.querySelector('textarea').select();
        document.execCommand('copy');
        alert('code coppied');
    });

    allbordersUpdate();

    border_styles.addEventListener('change',function() {
        border_color = this.value;
        allbordersUpdate();
    });
});