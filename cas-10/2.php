<?php
   $niz[] = "Android";
   $niz[] = "B programming language";
   $niz[] = "C programming language";
   $niz[] = "D programming language";
   $niz[] = "euphoria";
   $niz[] = "F#";
   $niz[] = "GWT";
   $niz[] = "HTML5";
   $niz[] = "ibatis";
   $niz[] = "Java";
   $niz[] = "K programming language";
   $niz[] = "Lisp";
   $niz[] = "Microsoft technologies";
   $niz[] = "Networking";
   $niz[] = "Open Source";
   $niz[] = "Prototype";
   $niz[] = "Prolog";
   $niz[] = "QC";
   $niz[] = "Restful web services";
   $niz[] = "Scrum";
   $niz[] = "Testing";
   $niz[] = "UML";
   $niz[] = "VB Script";
   $niz[] = "Web Technologies";
   $niz[] = "Xerox Technology";
   $niz[] = "YQL";
   $niz[] = "ZOPL";
   $niz[]="ZZ";

   $niska = $_GET['tekst'];

   $vraceno = "";

   if($niska!==""){
      $niska = strtolower($niska);
      $duzina = strlen($niska);
      foreach($niz as $elem){

         if(stristr(substr($elem, 0, $duzina), $niska)){
            if($vraceno !==  ""){
               $vraceno .= ", ".$elem;
             } else{
                $vraceno = $elem;
             }

         }
      }
   }

   echo $vraceno;

?>
