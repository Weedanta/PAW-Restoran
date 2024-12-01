<?php
// app/Http/Kernel.php

$routeMiddleware = [
    // ...
    'admin' => \App\Http\Middleware\AdminMiddleware::class,
];