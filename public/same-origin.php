<?php
// see http://g-llc.co.jp/blog/programming008/
ini_set('mbstring.internal_encoding' , 'UTF-8');

header('Cross-Origin-Opener-Policy: same-origin');
header('Cross-Origin-Embedder-Policy: require-corp');

include("./index.html");
?>