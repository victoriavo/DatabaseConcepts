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

//View Sessions from Student POV
$app->get('/student/sessions', function ($request, $response, $args) {
         $sth = $this->db->prepare("SELECT * FROM Sessions NATURAL JOIN Students");
        $sth->execute();
        $studentSessions = $sth->fetchAll();
        return $this->response->withJson($studentSessions);
    });


// student sign up NOT TESTED
    $app->post('/student/signup', function ($request, $response) {
        $input = $request->getParsedBody();
        $sql = "INSERT INTO Students (studentinfo) VALUES (:studentinfo)";
         $sth = $this->db->prepare($sql);
        $sth->bindParam("studentinfo", $input['studentinfo']);
        $sth->execute();
        $input['student_id'] = $this->db->lastInsertId();
        return $this->response->withJson($input);
    });
        

// tutor sign up NOT TESTED
    $app->post('/tutor/signup', function ($request, $response) {
        $input = $request->getParsedBody();
        $sql = "INSERT INTO Tutors (tutorinfo) VALUES (:tutorinfo)";
         $sth = $this->db->prepare($sql);
        $sth->bindParam("tutorinfo", $input['tutorinfo']);
        $sth->execute();
        $input['tutor_id'] = $this->db->lastInsertId();
        return $this->response->withJson($input);
    }); 
    
//Public Index.phtml page    
$app->get('/[{name}]', function ($request, $response, $args) {
    // Sample log message
    $this->logger->info("Slim-Skeleton '/' route");

    // Render index view
    return $this->renderer->render($response, 'index.phtml', $args);
});
