window.addEventListener("load" , function (){

    $("#search").on("click", function(){ url_replace_sendform(this); }); 

});
function url_replace_sendform(elem){

    let form_elem   = $(elem).parent("form");
    let data        = new FormData( $(form_elem).get(0) );
    let url         = $(form_elem).prop("action");
    

    let keys        = [];
    let values      = [];

    for (let d of data ){
        keys.push(d[0]);
        values.push(d[1]);
    }


    //let key     = $(elem).prop("name");
    //let value   = $(elem).val();

    //TODO:ここでクエリストリングを書き換える。
    // https://maku77.github.io/js/web/search-params.html

    param   = new URLSearchParams(window.location.search);

    for (let d of data ){
        param.set(d[0] , d[1]);
    }

    //書き換えたクエリストリングへ移動する
    // https://qiita.com/shuntaro_tamura/items/99adbe51132e0fb3c9e9
    
    window.location.href = "?" + param.toString();

}

