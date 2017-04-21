<?php
   // tutor sign up 
    $app->post('/tutor/signup', function ($request, $response) {
       $input = $request->getParsedBody();
       $sql = "INSERT INTO `Students`(`first_name`, `last_name`, `email`, `password`) VALUES (:first_name,:last_name,:email,:password)";
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

   
