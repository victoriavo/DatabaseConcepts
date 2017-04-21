<?php


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
