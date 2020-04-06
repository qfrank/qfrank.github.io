$(function () {
    $(".nav-placeholder").load("share/navbar.html");
    $(".footer-placeholder").load("share/footer.html");
});
function switchPanel(file) {
    $(".body-placeholder").load('embed/'+file);
}
