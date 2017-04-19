<?php

//Get Tutor Profile Info
    $app->get('/tutor/viewProfile', function ($request, $response, $args) {
         $sth = $this->db->prepare("SELECT * FROM Tutors ORDER BY tutor_id");
        $sth->execute();
        $tutorprofiles = $sth->fetchAll();
        return $this->response->withJson($tutorprofiles);
    });
    
//Public Index.phtml page    
$app->get('/[{name}]', function ($request, $response, $args) {
    // Sample log message
    $this->logger->info("Slim-Skeleton '/' route");

    // Render index view
    return $this->renderer->render($response, 'index.phtml', $args);
});

>
