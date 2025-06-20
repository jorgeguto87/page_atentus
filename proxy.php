<?php
$token = "123";
$mensagem = $_POST['mensagem'] ?? '';
$numeros = [
    "5521999363578",
    "5521981764373"
];

$url = "https://atentus.com.br:3000/enviar";

$headers = [
    "Content-Type: application/json",
    "token: $token"
];

$sucesso = true;

foreach ($numeros as $numero) {
    $payload = json_encode([
        "numero" => $numero,
        "mensagem" => $mensagem
    ]);

    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false); // cuidado em produção

    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    $error = curl_error($ch);
    curl_close($ch);

    if ($httpCode !== 200) {
        $sucesso = false;
    }
}

echo $sucesso ? "OK" : "❌ Erro ao enviar uma ou mais mensagens.";
?>
