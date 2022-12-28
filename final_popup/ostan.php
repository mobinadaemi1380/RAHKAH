<?php

// $ostanha=[
//     ["id"=>1,"name"=>"zanjan"],
//     ["id"=>2,"name"=>"tehran"],
//     ["id"=>3,"name"=>"tabriz"],
//     ["id"=>4,"name"=>"shiraz"],
    
// ];

// die(json_encode($ostanha));

$provinceJson=json_encode([["id"=>1,"name"=>"زنجان"],
["id"=>2,"name"=>"تهران"],
["id"=>3,"name"=>"گیلان"],
["id"=>4,"name"=>"آذربایجان شرقی"]]);
die($provinceJson);

?>