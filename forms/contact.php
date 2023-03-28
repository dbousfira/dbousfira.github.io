<?php

    $receiving_email_address = 'd.bousfira@hotmail.fr';
      $subject = $_POST['subject'];
      $msg = $_POST['message'];

      // Uncomment below code if you want to use SMTP to send emails. You need to enter your correct SMTP credentials
      /*
      $contact->smtp = array(
        'host' => 'example.com',
        'username' => 'example',
        'password' => 'pass',
        'port' => '587'
      );
      */

      echo $contact->send();
      // send email
      mail($receiving_email_address, $subject, $msg);
    ?>