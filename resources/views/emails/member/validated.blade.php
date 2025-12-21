<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dossier validé - Jad Aviculture</title>
    <style>
        /* Reusing styles from welcome email for consistency */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f5f5f5;
            padding: 20px;
        }
        
        .email-container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }
        
        .header {
            background-color: #2c6e49;
            padding: 20px;
            text-align: center;
        }
        
        .logo {
            max-width: 150px;
            margin-bottom: 10px;
        }
        
        .content {
            padding: 30px;
        }
        
        h1 {
            color: #2c6e49;
            margin-bottom: 20px;
            font-size: 28px;
        }
        
        .welcome-message {
            font-size: 18px;
            margin-bottom: 25px;
            color: #555;
        }
        
        .info-box {
            background-color: #e8f5e9;
            border-left: 4px solid #2c6e49;
            padding: 15px;
            margin: 20px 0;
            border-radius: 0 5px 5px 0;
        }
        
        .cta-button {
            display: inline-block;
            background-color: #2c6e49;
            color: white;
            padding: 12px 25px;
            text-decoration: none;
            border-radius: 5px;
            font-weight: bold;
            margin: 25px 0;
            transition: background-color 0.3s;
        }
        
        .cta-button:hover {
            background-color: #1e4e2f;
        }
        
        .footer {
            background-color: #f8f9fa;
            padding: 20px;
            text-align: center;
            border-top: 1px solid #e9ecef;
        }
        
        .footer p {
            font-size: 14px;
            color: #6c757d;
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="header">
            <img src="{{ asset('logo1.png') }}" alt="Jad Aviculture" class="logo">
            <h1 style="color: white; margin-top: 10px;">Félicitations !</h1>
        </div>
        
        <div class="content">
            <h2>Bonjour {{ $member->getName() }},</h2>
            
            <p class="welcome-message">
                Nous avons le plaisir de vous informer que votre dossier a été validé par notre équipe administrative.
            </p>
            
            <div class="info-box">
                <p><strong>Votre compte est désormais actif.</strong> Vous pouvez dès à présent accéder à l'intégralité des fonctionnalités de l'application Jad Aviculture.</p>
            </div>
            
            <p>
                Nous sommes ravis de vous compter parmi nos membres actifs et nous espérons que nos services contribueront au succès de vos activités.
            </p>
            
            <div style="text-align: center;">
                <a href="{{ url('/dashboard') }}" class="cta-button">
                    Accéder au Dashboard
                </a>
            </div>
        </div>
        
        <div class="footer">
            <p>
                À bientôt sur Jad aviculture,<br>
                L'équipe de Jad aviculture
            </p>
            <p style="margin-top: 15px; font-size: 12px;">
                © {{ date('Y') }} Jad aviculture. Tous droits réservés.<br>
            </p>
        </div>
    </div>
</body>
</html>
