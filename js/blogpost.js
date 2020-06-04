function postblog(){
    var auth_name=document.getElementById('author-name').textContent;
    var user_name = document.getElementById('username').textContent;
    var blog = document.getElementById('blog-post').value;
    document.getElementById('blog-posted').innerHTML = blog;
    document.getElementById('user-title').innerHTML = auth_name;
    document.getElementById('user-username').innerHTML = user_name;

    var msg = document.getElementById('blog-msg')
    document.getElementById('post-date').innerHTML= Date();

    if (blog === ""){
        msg.className = "alert alert-danger"
        msg.innerHTML = "Cannot leave post empty!!"
    }

}