const cursor = document.querySelector(".cursor");
document.addEventListener('mousemove', e=>{
    cursor.setAttribute("style","top:"+(e.pageY-8)+"px; left:" + (e.pageX-8)+"px");
});