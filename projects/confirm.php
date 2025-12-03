<?php
$name       = isset($_POST['name']) ? htmlspecialchars($_POST['name']) : '';
$email      = isset($_POST['email']) ? htmlspecialchars($_POST['email']) : '';
$connection = isset($_POST['connection']) ? htmlspecialchars($_POST['connection']) : '';
$message    = isset($_POST['message']) ? nl2br(htmlspecialchars($_POST['message'])) : '';
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Mahalo for Sharing Your Manaʻo</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles.css">
</head>
<body class="confirm-page">
<header>
  <h1>Hawaiian Culture & History</h1>
  <nav>
    <ul class="main-nav">
      <li><a href="index.html">Home</a></li>
      <li><a href="culture.html">Culture</a></li>
      <li><a href="history.html">History &amp; Data</a></li>
      <li><a href="contact.html">Share Manaʻo</a></li>
    </ul>
  </nav>
</header>

<main>
  <section>
    <h2>Mahalo Nui!</h2>
    <p>Your manaʻo was received. Below is a summary of what you shared:</p>

    <ul class="confirm-list">
      <li><strong>Name:</strong> <?php echo $name; ?></li>
      <li><strong>Email:</strong> <?php echo $email; ?></li>
      <li><strong>Connection to Hawaiʻi:</strong> <?php echo $connection; ?></li>
      <li><strong>Manaʻo:</strong> <?php echo $message; ?></li>
    </ul>

    <p><a href="index.html">Return to Home</a></p>
  </section>
</main>

<footer>
  <p>&copy; 2025 Hawaiian Culture &amp; History</p>
</footer>
</body>
</html>
