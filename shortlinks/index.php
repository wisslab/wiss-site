<?php 

$FILE = '/data/KAIEC/WISS/hugo/wiss-site/shortlinks.json';
$str = file_get_contents($FILE);
$json = json_decode($str, true);
$path = trim($_SERVER['REQUEST_URI'], '/');

if ($path=='') {
        header('Location: ' . $json['root']['long'], true, 301);
        die();
}

foreach ($json['entries'] as $link) {
        if ($link['short']==$path) {
                header('Location: ' . $link['long'], true, 301);
                die();
        }
}
header('Location: ' . $json['default']['long'], true, 301);
die();
?>
