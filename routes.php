<?php

//Get Tutor Profile Info
    $app->get('/tutor/viewProfile', function ($request, $response, $args) {
         $sth = $this->db->prepare("SELECT * FROM Tutors ORDER BY tutor_id");
        $sth->execute();
        $tutorprofiles = $sth->fetchAll();
        return $this->response->withJson($tutorprofiles);
    });

//Get Student Profile Info
$app->get('/student/viewProfile', function ($request, $response, $args) {
         $sth = $this->db->prepare("SELECT * FROM Students ORDER BY student_id");
        $sth->execute();
        $studentprofiles = $sth->fetchAll();
        return $this->response->withJson($studentprofiles);
    });

//View Sessions from Tutor's pov
$app->get('/tutor/sessions', function ($request, $response, $args) {
         $sth = $this->db->prepare("SELECT * FROM Sessions NATURAL JOIN Tutors");
        $sth->execute();
        $tutorSessions = $sth->fetchAll();
        return $this->response->withJson($tutorSessions);
    });
 
    
//Public Index.phtml page    
$app->get('/[{name}]', function ($request, $response, $args) {
    // Sample log message
    $this->logger->info("Slim-Skeleton '/' route");

    // Render index view
    return $this->renderer->render($response, 'index.phtml', $args);
});
