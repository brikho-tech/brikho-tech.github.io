<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nom = strip_tags(trim($_POST["nom"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = trim($_POST["message"]);

    // Adresse e-mail de destination
    $to = "eloi.kreel@gmail.com";
    $sujet = "Nouveau message de $nom via le formulaire de contact";
    $contenu = "Nom: $nom\nEmail: $email\nMessage:\n$message";

    // En-têtes pour l'e-mail
    $headers = "From: $email";

    // Envoi de l'e-mail
    if (mail($to, $sujet, $contenu, $headers)) {
        echo "<p>Merci, $nom ! Votre message a été envoyé.</p>";
    } else {
        echo "<p>Désolé, une erreur s'est produite. Veuillez réessayer plus tard.</p>";
    }
}
?>
