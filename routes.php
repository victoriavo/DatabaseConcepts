<?php
//Victoria's Routes
// tutor sign up 
$app->post('/tutor/signup', function ($request, $response) {
  $input = $request->getParsedBody();
  $sql = "INSERT INTO `Tutors`(`first_name`, `last_name`, `email`, `password`) VALUES (:first_name,:last_name,:email,:password)";
  $sth = $this->db->prepare($sql);
  $sth->bindParam(":email", $input['email']);
  $sth->bindParam(":first_name", $input['first_name']);
  $sth->bindParam(":last_name", $input['last_name']);
  $sth->bindParam(":password", $input['last_name']);
  $sth->execute();
  $input['first_name'] = $this->db->lastInsertId();
  $input['last_name'] = $this->db->lastInsertId();
  $input['password'] = $this->db->lastInsertId();
  $input['email'] = $this->db->lastInsertId();
  return $this->response->withJson($input);


});

   // student sign up
    $app->post('/student/signup', function ($request, $response) {
         $input = $request->getParsedBody();
        $sql = "INSERT INTO `Students`(`first_name`, `last_name`, `email`, `password`) VALUES (:first_name,:last_name,:email,:password)";
         $sth = $this->db->prepare($sql);
         $sth->bindParam(":email", $input['email']);
        $sth->bindParam(":first_name", $input['first_name']);
         $sth->bindParam(":last_name", $input['last_name']);
         $sth->bindParam(":password", $input['last_name']);
         $sth->execute();
         $input['email'] = $this->db->lastInsertId();
         $input['first_name'] = $this->db->lastInsertId();
         $input['last_name'] = $this->db->lastInsertId();
         $input['password'] = $this->db->lastInsertId();
         return $this->response->withJson($input);

    });

//Jacob's routes

//Update tutor info w/out specifying a tutor
$app->post('/tutor/newProfile', function ($request, $response) {
    $input = $request->getParsedBody();
    $sql = "INSERT INTO `Tutors` (`bio`, `past_high_school`) VALUES (:bio, :past_high_school)";
    $sth = $this->db->prepare($sql);
    $sth->bindParam(":bio", $input['bio']);
    $sth->bindParam(":past_high_school", $input['past_high_school']);
    $sth->execute();
    $input['bio'] = $this->db->lastInsertId();
    $input['past_high_school'] = $this->db->lastInsertId();
    return $this->response->withJson($input);
});

//Update student info w/out specifying a student
$app->post('/student/newProfile', function ($request, $response) {
    $input = $request->getParsedBody();
    $sql = "INSERT INTO `Students` (`bio`, `high_school`, `graduation_year`) VALUES (:bio, :high_school, :graduation_year)";
    $sth = $this->db->prepare($sql);
    $sth->bindParam(":bio", $input['bio']);
    $sth->bindParam(":high_school", $input['high_school']);
    $sth->bindParam(":graduation_year", $input['graduation_year']);
    $sth->execute();
    $input['bio'] = $this->db->lastInsertId();
    $input['high_school'] = $this->db->lastInsertId();
    $input['graduation_year'] = $this->db->lastInsertId();
    return $this->response->withJson($input);
});

//Maya's Routes
//View Tutor Profile
$app->get('/tutor/viewProfile/[{tutor_id}]', function ($request, $response, $args) {
    $sth = $this->db->prepare("SELECT photo, first_name, last_name, past_high_school, bio FROM `Tutors`  JOIN `Photos`  WHERE tutor_id=:tutor_id AND tutor_id = id");
    $sth->bindParam("tutor_id",$args['tutor_id']);
    $sth->execute();
    $view = $sth->fetchObject();
    return $this->response->withJson($view);
});
//View Student Profile
$app->get('/student/viewProfile/[{student_id}]', function ($request, $response, $args) {
   $sth = $this->db->prepare("SELECT photo, first_name, last_name, high_school, graduation_year, bio FROM `Students` JOIN `Photos`  WHERE student_id = :student_id AND id = student_id");
   $sth->bindParam("student_id",$args['student_id']);
   $sth->execute();
   $view = $sth->fetchObject();
   return $this->response->withJson($view);
});
//View Sessions From Tutor POV
$app->get('/tutor/sessions/[{tutor_id}]', function ($request, $response, $args) {
   $sth = $this->db->prepare("SELECT first_name, last_name, bio, isAccepted, time_requested, time_accepted FROM `Sessions` NATURAL JOIN `Students` WHERE tutor_id =  :tutor_id");
   $sth->bindParam("tutor_id",$args['tutor_id']);
   $sth->execute();
   $sessions = $sth->fetchAll();
   return $this->response->withJson($sessions);
});
//View Sessions From Student POV
$app->get('/student/sessions/[{student_id}]', function ($request, $response, $args) {
   $sth = $this->db->prepare("SELECT first_name, last_name, bio, isAccepted, time_requested, time_accepted FROM `Sessions` NATURAL JOIN `Tutors` WHERE student_id = :student_id");
   $sth->bindParam("student_id", $args['student_id']);
   $sth->execute();
   $sessions = $sth->fetchAll();
   return $this->response->withJson($sessions);
});
//Find Tutor
$app->get('/findTutor/[{subject_name}]', function ($request, $response, $args) {
   $sth = $this->db->prepare("SELECT first_name, last_name, past_high_school FROM `Subjects` NATURAL JOIN `Courses` NATURAL JOIN `Courses Taught` NATURAL JOIN `Tutors`WHERE subject_name = :subject_name");
   $sth->bindParam("subject_name", $args['subject_name']);
   $sth->execute();
   $find = $sth->fetchAll();
   return $this->response->withJson($find);
});
